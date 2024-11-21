import circuit from "@/artifacts/circuit.json";
import { Board } from "@/components/shared/board";
import { Keyboard } from "@/components/shared/keyboard";
import { toast } from "@/lib/hooks/use-toast";
import { getRandomWord, checkGuess } from "@/lib/utils/";
import {
  BarretenbergBackend, // BarretenbergVerifier as Verifier,
} from "@noir-lang/backend_barretenberg";
import { Noir } from "@noir-lang/noir_js";
import { useState, useEffect, useCallback } from "react";

export function Game() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [usedLetters, setUsedLetters] = useState<
    Record<string, "correct" | "present" | "absent">
  >({});

  useEffect(() => {
    setSolution(getRandomWord());
  }, []);

  const handleKeyPress = useCallback(
    async (key: string) => {
      if (gameOver) return;

      if (key === "ENTER") {
        if (currentGuess.length !== 5) return;

        try {
          // @ts-expect-error: Nargo doesn't generate proper typings
          const backend = new BarretenbergBackend(circuit);

          // @ts-expect-error: Nargo doesn't generate proper typings
          const noir = new Noir(circuit);

          const input = { target_word: solution, guess: currentGuess };

          toast({
            title: "Generating proof...",
            description: "Please wait...",
            variant: "default",
          });

          const { witness } = await noir.execute(input);
          const proof = await backend.generateProof(witness);

          toast({
            title: "Generating proof... ✅",
            description: "Please wait",
            variant: "default",
          });

          toast({
            title: "Proof generated",
            description: "🎉",
            variant: "default",
          });
          console.log("input", proof.proof);

          const isValid = await backend.verifyProof(proof);
          if (isValid) {
            toast({
              title: "Proof is valid",
              description: proof.proof,
              variant: "default",
            });
            return;
          }
        } catch (err) {
          if (err instanceof Error) {
            toast({
              title: "Error",
              description: err.message,
              variant: "destructive",
            });

            console.error(`Error: ${err}`);
            return;
          }

          if (typeof err === "string") {
            toast({
              title: "Error",
              description: err,
              variant: "destructive",
            });

            console.error(`Error: ${err}`);
            return;
          }

          toast({
            title: "Error",
            description: "Something went wrong",
            variant: "destructive",
          });
          console.error(`Error: ${err}`);
        } finally {
          const newGuesses = [...guesses, currentGuess];
          setGuesses(newGuesses);
          setCurrentGuess("");

          const result = checkGuess(currentGuess, solution);
          const newUsedLetters = { ...usedLetters };
          currentGuess.split("").forEach((letter, i) => {
            if (
              result[i] === "correct" ||
              (result[i] === "present" && newUsedLetters[letter] !== "correct")
            ) {
              newUsedLetters[letter] = result[i];
            } else if (!newUsedLetters[letter]) {
              newUsedLetters[letter] = "absent";
            }
          });
          setUsedLetters(newUsedLetters);

          if (currentGuess === solution || newGuesses.length === 6) {
            setGameOver(true);
          }
        }
      } else if (key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    },

    [currentGuess, gameOver, guesses, solution, usedLetters],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (e.key === "Backspace") {
        handleKeyPress("BACKSPACE");
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          handleKeyPress(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col items-center justify-center bg-secondary p-4">
      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        solution={solution}
      />
      <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />
      {gameOver && (
        <div className="mt-4 text-xl font-bold">
          {guesses[guesses.length - 1] === solution
            ? "You won!"
            : `Game over! The word was ${solution}`}
        </div>
      )}
    </div>
  );
}

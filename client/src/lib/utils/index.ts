export const WORDS = ["AZTEC", "APPLE", "MANGO"];

export function getRandomWord(): string {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function checkGuess(
  guess: string,
  solution: string,
): ("correct" | "present" | "absent")[] {
  const result: ("correct" | "present" | "absent")[] = [];
  const solutionArray = solution.split("");

  guess.split("").forEach((letter, i) => {
    if (letter === solutionArray[i]) {
      result.push("correct");
    } else if (solutionArray.includes(letter)) {
      result.push("present");
    } else {
      result.push("absent");
    }
  });

  return result;
}

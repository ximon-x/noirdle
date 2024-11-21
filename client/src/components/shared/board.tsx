interface BoardProps {
  guesses: string[];
  currentGuess: string;
  solution: string;
}

export function Board({ guesses, currentGuess, solution }: BoardProps) {
  const empties = Array(6 - guesses.length - 1).fill("");

  return (
    <div className="mb-4 grid grid-rows-6 gap-1">
      {guesses.map((guess, i) => (
        <Row key={i} guess={guess} solution={solution} />
      ))}
      {guesses.length < 6 && (
        <Row guess={currentGuess} solution={solution} current />
      )}
      {empties.map((_, i) => (
        <Row key={i} guess="" solution={solution} />
      ))}
    </div>
  );
}

interface RowProps {
  guess: string;
  solution: string;
  current?: boolean;
}

function Row({ guess, solution, current = false }: RowProps) {
  const tiles = Array(5).fill("");

  return (
    <div className="grid grid-cols-5 gap-1">
      {tiles.map((_, i) => (
        <Tile
          key={i}
          letter={guess[i]}
          status={getTileStatus(guess, solution, i)}
          current={current}
        />
      ))}
    </div>
  );
}

interface TileProps {
  letter: string;
  status: "correct" | "present" | "absent" | "empty";
  current: boolean;
}

function Tile({ letter, status, current }: TileProps) {
  const className = `w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold ${
    current
      ? "border-gray-500"
      : status === "correct"
        ? "bg-green-500 text-white border-green-500"
        : status === "present"
          ? "bg-yellow-500 text-white border-yellow-500"
          : status === "absent"
            ? "bg-gray-500 text-white border-gray-500"
            : "border-gray-300"
  }`;

  return <div className={className}>{letter}</div>;
}

function getTileStatus(
  guess: string,
  solution: string,
  index: number,
): "correct" | "present" | "absent" | "empty" {
  if (!guess[index]) return "empty";
  if (guess[index] === solution[index]) return "correct";
  if (solution.includes(guess[index])) return "present";

  return "absent";
}

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  usedLetters: Record<string, "correct" | "present" | "absent">;
}

export function Keyboard({ onKeyPress, usedLetters }: KeyboardProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      {KEYS.map((row, i) => (
        <div key={i} className="flex gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`rounded px-2 py-4 font-bold ${
                key.length > 1 ? "w-16" : "w-10"
              } ${
                usedLetters[key] === "correct"
                  ? "bg-green-500 text-white"
                  : usedLetters[key] === "present"
                    ? "bg-yellow-500 text-white"
                    : usedLetters[key] === "absent"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200"
              }`}
            >
              {key === "BACKSPACE" ? "←" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

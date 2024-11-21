import { useState } from "react";

import NoirContext from "../contexts/noir-context";
import { LetterStatus } from "../types/noir-types";

export default function NoirProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [letterStatuses, setLetterStatuses] = useState<LetterStatus[]>([]);

  return (
    <NoirContext.Provider value={{ letterStatuses, setLetterStatuses }}>
      {children}
    </NoirContext.Provider>
  );
}

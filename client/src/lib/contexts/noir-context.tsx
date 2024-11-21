import { createContext, Dispatch, SetStateAction } from "react";

import { LetterStatus } from "../types/noir-types";

type NoirResponse = {
  letterStatuses: LetterStatus[];
  setLetterStatuses: Dispatch<SetStateAction<LetterStatus[]>>;
};

const NoirContext = createContext<NoirResponse | null>(null);

export default NoirContext;

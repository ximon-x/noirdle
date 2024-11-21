import { useContext } from "react";

import NoirContext from "../contexts/noir-context";

export default function useNoir() {
  return {
    ...useContext(NoirContext),
  };
}

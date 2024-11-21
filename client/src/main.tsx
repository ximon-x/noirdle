import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import NoirProvider from "./lib/providers/noir-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoirProvider>
      <App />
    </NoirProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import NoirProvider from "./lib/providers/noir-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoirProvider>
      <Toaster />
      <App />
    </NoirProvider>
  </StrictMode>,
);

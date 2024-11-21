import { Send } from "lucide-react";

import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import GradualSpacing from "./components/ui/gradual-spacing";
import ShineBorder from "./components/ui/shine-border";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between">
      <header></header>
      <main className="flex items-center justify-center">
        <ShineBorder
          className="flex h-fit flex-col items-center justify-center gap-8 overflow-hidden rounded-lg border bg-transparent p-8 dark:bg-transparent md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest md:text-7xl md:leading-[5rem]"
            text="Noirdle"
          />
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="h-48 w-48">
              <Button variant="default" size="lg" className="text-lg">
                Place Guess <Send className="h-4 w-4" />
              </Button>
            </Card>
            <Card className="4-48 h-48" />
          </section>
        </ShineBorder>
      </main>
      <footer>
        <p className="text-md text-center font-bold leading-loose">
          Powered by Aztec Noir
        </p>
        <p className="text-center text-sm leading-loose">
          &copy; {new Date().getFullYear()} Noirdle
        </p>
      </footer>
    </div>
  );
}

export default App;

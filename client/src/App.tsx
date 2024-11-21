import { Game } from "@/components/shared/game";
import GradualSpacing from "@/components/ui/gradual-spacing";
import ShineBorder from "@/components/ui/shine-border";

function App() {
  return (
    <div className="flex w-screen flex-col items-center justify-between">
      <ShineBorder
        className="flex h-fit flex-col items-center justify-center gap-8 overflow-hidden rounded-lg border bg-transparent p-8 dark:bg-transparent md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <GradualSpacing
          className="font-display text-center text-xl font-bold -tracking-widest md:text-6xl md:leading-[5rem]"
          text="Noirdle"
        />
        <Game />
      </ShineBorder>
    </div>
    // <div className="flex min-h-screen w-screen flex-col items-center justify-between">
    //   <header className="flex">
    //     <img
    //       src="/logo.svg"
    //       alt="Noirdle"
    //       className="h-16 w-16 md:h-48 md:w-48"
    //     />
    //   </header>
    //   <main className="flex items-center justify-center">
    //   </main>
    //   <footer>
    //     <p className="text-center text-sm leading-loose">
    //       Built by Group 6 of the ZK Encode 2024 Q4 Bootcamp
    //     </p>
    //     <p className="text-md text-center font-bold leading-loose">
    //       Powered by Aztec Noir
    //     </p>
    //   </footer>
    // </div>
  );
}

export default App;

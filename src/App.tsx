import "./App.scss";
import useConfigStore from "@/stores/store.ts";
import { ThemeType } from "@/types/config.ts";
import { NextUIProvider } from "@nextui-org/react";
import { HomePage } from "@/pages/HomePage";

function App() {
  const { config } = useConfigStore((state) => ({
    config: state.config
  }));

  return (
    <NextUIProvider>
      <main
        className={`${config.theme === ThemeType.light ? "light" : "dark"} text-foreground bg-background`}
      >
        <HomePage />
      </main>
    </NextUIProvider>
  );
}

export default App;

import "./App.css";
import { DarkModeProvider } from "./DarkModeContext";
import ThemeDropDown from "./components/ThemeDropDown";

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <button>Home</button>
          <DarkModeProvider>
            <ThemeDropDown></ThemeDropDown>
          </DarkModeProvider>
        </nav>
      </header>
    </>
  );
}

export default App;

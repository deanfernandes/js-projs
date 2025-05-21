import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import DebounceButton from "./DebounceButton";

export default function ThemeDropDown() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  function handleOnClick() {
    setDarkMode(!darkMode);
  }

  return (
    <DebounceButton
      innerText={(darkMode ? "🌙" : "☀️") + "Theme"}
      onClick={handleOnClick}
      delay={500}
    ></DebounceButton>
  );
}

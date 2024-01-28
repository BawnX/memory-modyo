"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/svg";

/**
 * Component rendered in client for change theme
 *
 * @component
 * @return  {JSX.Element} Component Theme Switcher
 *
 * @example
 * return (
 *   <ThemeSwitch />
 * )
 */

function ThemeSwitchComponent() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const changeTheme = () => {
    if (isLight) {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };

  return (
    <button
      type="button"
      className="button button--rounded button--resize"
      onClick={changeTheme}
    >
      {isLight ? <SunIcon size={36} /> : <MoonIcon size={36} />}
    </button>
  );
}

export default ThemeSwitchComponent;

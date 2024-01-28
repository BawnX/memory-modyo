"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

/**
 * Component for users to get avatar.
 *
 * @component
 * @param   {Object} theme
 * @param   {JSX.Element} theme.children  children body
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * const title = Score
 * const body = 10
 * return (
 *   <ThemeProvider>
 *      <main>
 *        <h1>hello world</h1>
 *      </main>
 *   </ThemeProvider>
 * )
 */
function ThemeProvider({ children }) {
  const { theme } = useTheme();
  return (
    <NextThemesProvider attribute="class" defaultTheme={theme}>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;

import dynamic from "next/dynamic";

const ThemeSwitchComponent = dynamic(
  () => import("@/components/atoms/theme-switch"),
  { ssr: false },
);

function Header() {
  return (
    <header>
      <nav className="receptacle receptacle--header" aria-label="Global">
        <span />

        <section className="receptacle--header__section">
          <ThemeSwitchComponent />
        </section>
      </nav>
    </header>
  );
}

export default Header;

import dynamic from "next/dynamic";
import AvatarUserComponent from "@/components/molecules/avatar-user";

const ThemeSwitchComponent = dynamic(
  () => import("@/components/atoms/theme-switch"),
  { ssr: false },
);

function Header() {
  return (
    <header>
      <nav className="receptacle receptacle--header" aria-label="Global">
        <AvatarUserComponent size={48} />

        <section className="receptacle--header__section">
          <ThemeSwitchComponent />
        </section>
      </nav>
    </header>
  );
}

export default Header;

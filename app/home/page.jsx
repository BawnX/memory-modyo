import ClickableAvatar from "@/components/molecules/clickable-avatar";
import FormHomeComponent from "@/components/molecules/form-home";

export default function Home() {
  return (
    <section className="receptacle receptacle--one-col">
      <ClickableAvatar />
      <div className="card">
        <FormHomeComponent />
      </div>
    </section>
  );
}

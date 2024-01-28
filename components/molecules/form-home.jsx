"use client";

import { useRouter } from "next/navigation";
import InputComponent from "@/components/atoms/input";
import ButtonComponent from "@/components/atoms/button";
import useUserStore from "@/commons/store/user";

/**
 * Component form home
 *
 * @component
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * return (
 *   <FormHomeComponent />
 * )
 */
function FormHomeComponent() {
  const router = useRouter();
  const userStore = useUserStore((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    userStore.setName(event.target.fullName.value);
    router.push("/game", { scroll: false });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form--title">Cuentanos Sobre Ti</h1>
      <InputComponent
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Nombre Apellido"
        label="Tu Nombre"
      />
      <ButtonComponent type="submit" mode="rectagle">
        Jugar
      </ButtonComponent>
    </form>
  );
}

export default FormHomeComponent;

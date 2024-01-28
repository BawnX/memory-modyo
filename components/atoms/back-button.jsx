"use client";

import { useRouter } from "next/navigation";
import { BackIcon } from "@/components/svg";

/**
 * Component rendered in client for change theme
 *
 * @component
 * @return  {JSX.Element} Back Button Component
 *
 * @example
 * return (
 *   <ResetButtonComponent />
 * )
 */

function BackButtonComponent() {
  const router = useRouter();

  const onClick = () => {
    router.push("/home", { scroll: false });
  };

  return (
    <button type="button" className="button button--rounded" onClick={onClick}>
      <BackIcon size={36} />
    </button>
  );
}

export default BackButtonComponent;

"use client";

import AvatarComponent from "@/components/atoms/avatar";
import useUserStore from "@/commons/store/user";
import GenerateRandomId from "@/commons/functions/avatar";
import useStore from "@/commons/store/store";

/**
 * Component for clickable avatar
 *
 * @component
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * return (
 *   <ClickableAvatar />
 * )
 */
function ClickableAvatar() {
  const userStore = useStore(useUserStore, (state) => state);

  const generateAvatar = () => {
    const seed = GenerateRandomId(1, 10000000);
    userStore.setSeed(seed);
  };

  return (
    <span className="avatar" onClick={generateAvatar}>
      <AvatarComponent width={384} height={384} seed={userStore.seed} />
    </span>
  );
}

export default ClickableAvatar;

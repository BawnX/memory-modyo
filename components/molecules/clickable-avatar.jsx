"use client";

import AvatarComponent from "@/components/atoms/avatar";
import useUserStore from "@/commons/store/user";
import GenerateRandomId from "@/commons/functions/avatar";
import ImageSkeleton from "../atoms/image-skeleton";
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

  if (userStore.seed === 0) {
    return (
      <span className="avatar">
        <ImageSkeleton size={384} />
      </span>
    );
  }

  return (
    <span className="avatar" onClick={generateAvatar}>
      <AvatarComponent width={384} height={384} seed={userStore.seed} />
    </span>
  );
}

export default ClickableAvatar;

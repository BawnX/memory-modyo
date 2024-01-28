"use client";

import AvatarComponent from "../atoms/avatar";
import useUserStore from "@/commons/store/user";

/**
 * Component for users to get avatar.
 *
 * @component
 * @param   {Object} avatarUser
 * @param   {string} avatarUser.size    size for users
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * return (
 *   <AvatarUserComponent size={250} />
 * )
 */
function AvatarUserComponent({ size }) {
  const userStore = useUserStore((state) => state);

  return <AvatarComponent size={size} seed={userStore.seed} />;
}

export default AvatarUserComponent;

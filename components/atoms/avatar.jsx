import Image from "next/image";

/**
 * Component for users to get avatar.
 *
 * @component
 * @param {Object}  avatar
 * @param   {number} avatar.size                set width and height for icon
 * @param   {number | undefined} avatar.width   set width for avatar
 * @param   {number | undefined} avatar.height  set height for avatar
 * @param   {number} avatar.seed                set for avatar
 * @return  {JSX.Element} Component for avatar
 *
 * @example
 * const width = 48
 * const height = 48
 * return (
 *   <Avatar width={width} height={height} />
 * )
 */

function AvatarComponent({ size, width, height, seed }) {
  const url = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;
  return (
    <Image
      src={url}
      alt="avatar of the user"
      width={width ?? size}
      height={height ?? size}
      priority
    />
  );
}

export default AvatarComponent;

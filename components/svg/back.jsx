/**
 * Back Icon component
 *
 * @component
 * @param   {number} size   set width and height for icon
 * @param   {number | undefined} width  set width for icon
 * @param   {number | undefined} height set height for icon
 * @param   {object} props  set any prop object
 * @return  {JSX.Element} Component icon
 *
 * @example
 * const size = 48
 * return (
 *    <BackIcon size={48} />
 * )
 */

function BackIcon({ size = 24, width, height, ...props }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width ?? size}
      height={height ?? size}
      role="presentation"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BackIcon;

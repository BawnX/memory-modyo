/**
 * Image Skeleton SVG component
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
 *    <ImageSkeletonSVG size={48} />
 * )
 */

function ImageSkeletonSVG({ size = 24, width, height, ...props }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width ?? size}
      height={height ?? size}
      role="presentation"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </g>
    </svg>
  );
}

export default ImageSkeletonSVG;

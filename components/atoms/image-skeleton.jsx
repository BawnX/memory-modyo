import { ImageSkeletonSVG } from "../svg";

/**
 * Component rendered in client use buttons
 *
 * @component
 * @param {Object}        imageSkeleton
 * @param {number}        imageSkeleton.size  boolean for open or close dialog
 * @return {JSX.Element}  Component Image Skeleton
 *
 * @example
 * return (
 *   <ImageSkeletonSVG size={40}/>
 * )
 */
function ImageSkeleton({ size }) {
  return <ImageSkeletonSVG size={size} className="image-skeleton" />;
}

export default ImageSkeleton;

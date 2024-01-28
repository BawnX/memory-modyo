/**
 * Component Loading
 *
 * @component
 * @return  {JSX.Element} Component for loading components
 *
 * @example
 * return (
 *   <LoadingComponent />
 * )
 */
function LoadingComponent() {
  return (
    <section className="receptacle receptacle--center">
      <span className="spin" role="status" />
    </section>
  );
}

export default LoadingComponent;

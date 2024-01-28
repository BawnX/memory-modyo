/**
 * Component Loading
 *
 * @component
 * @return  {JSX.Element} Component in case something goes wrong
 *
 * @example
 * return (
 *   <sometingWrongComponent />
 * )
 */
function sometingWrongComponent() {
  return (
    <section className="receptacle receptacle--center">
      <h1 className="text-xl">Ups!! Algo salió mal</h1>
    </section>
  );
}

export default sometingWrongComponent;

/**
 * Component rendered in client use buttons
 *
 * @component
 * @param {Object}        input
 * @param {string}        input.id            identifier for input
 * @param {string}        input.name          name for input
 * @param {string}        input.type          type input for example string | number | email
 * @param {string}        input.placeholder   text for place holding input
 * @param {string}        input.label         text for input
 * @return {JSX.Element}  Component Image Skeleton
 *
 * @example
 * return (
 *   <InputComponent
 *      id="fullName"
 *      name="fullName"
 *      type="text"
 *      placeholder="Nombre Apellido"
 *      label="Tu Nombre"
 *    />
 * )
 */
function InputComponent({ id, name, type, placeholder, label }) {
  return (
    <div>
      <label htmlFor={id} className="input--lavel">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="input input--invalid input--valid"
      />
    </div>
  );
}

export default InputComponent;

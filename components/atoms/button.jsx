/**
 * Component rendered in client use buttons
 *
 * @component
 * @param {Object}              button
 * @param {string}              button.type       type button some exples are submit | button | reset
 * @param {string}              button.mode       style for button options rounded | rectangle
 * @param {function(): void}    button.onClick    function for execute in button
 * @param {JSX.Element}         button.children   children component for button
 * @return {JSX.Element}  Button Component
 *
 * @example
 * const returnGame = () => {}
 * return (
 *   <ButtonComponent type="button" mode="rectagle" onClick={returnGame}>
 *      Volver A Jugar
 *   </ButtonComponent>
 * )
 */

function ButtonComponent({ type, mode, onClick, children }) {
  const modes = {
    rounded: "button button--rounded",
    rectagle: "button button--rectangle",
  };

  return (
    <button type={type} className={modes[mode]} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponent;

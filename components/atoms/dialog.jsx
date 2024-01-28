/**
 * Component rendered in client use buttons
 *
 * @component
 * @param {Object}        dialog
 * @param {boolean}       dialog.isOpen     boolean for open or close dialog
 * @param {JSX.Element}   dialog.children   children component for dialog
 * @return {JSX.Element}  Component Dialog
 *
 * @example
 * return (
 *   <DialogComponent isOpen={false}>
 *      Volver A Jugar
 *   </DialogComponent>
 * )
 */
function DialogComponent({ isOpen, children }) {
  return (
    <dialog open={isOpen} className="theme dialog">
      {children}
    </dialog>
  );
}

export default DialogComponent;

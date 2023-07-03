type ModalProps = {
  children: any;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-95"
      onClick={onClose}
    >
      <dialog
        className="fixed top-1/4 w-[30rem] rounded-md border-none bg-slate-400 ease-in-out"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;

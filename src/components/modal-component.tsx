import { FC, ReactNode } from "react";

interface ModalContainerProps {
  children: ReactNode;
  closeModal?: () => void;
}

const ModalContainer: FC<ModalContainerProps> = ({ children, closeModal }) => {
  return (
    <div className="bg-black bg-opacity-40 min-h-svh min-w-full absolute flex justify-center items-center z-1">
      <div className="bg-white relative w-full max-w-xs  p-3 sm:p-5 sm:max-w-md max-h-[90svh] overflow-auto">
        <div className="sticky top-0 right-0">
          <button
            onClick={(e) => {
              closeModal?.();
            }}
            className="absolute right-0 ml-auto p-2 font-bold"
            title="close modal"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;

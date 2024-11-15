import React, { useState, useEffect, useRef } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const AddJobModal = ({ isOpen, onClose }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog
      className="place-content-center place-items-center rounded-xl h-[70vh] w-[24vw]"
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      <div className="h-[96%] w-[90%] flex-col rounded-lg">
        <h1 className="text-xl font-semibold">Add New Job</h1>

        <select className="outline-0 w-[100%] mt-4 border rounded-lg h-10 pl-2 pr-2 " name="department" id="department">
            <option value="">Select Department</option>
        </select>

        <input
          className="outline-0 w-[100%] mt-4 border rounded-lg h-10 pl-2 pr-2 "
          id="jobTitle"
          placeholder="Enter Job Title"
          type="text"
        />
        <select className="outline-0 w-[100%] mt-4 border rounded-lg h-10 pl-2 pr-2 " name="department" id="department">
            <option value="">Select Location</option>
        </select>

        <input
          className="outline-0 w-[100%] mt-4 border rounded-lg h-10 pl-2 pr-2 "
          id="salery"
          placeholder="Enter Amount"
          type="text"
        />
        <h2 className="mt-4 font-semibold">Select Type</h2>
        <div className="w-[100%] mt-4 flex gap-4">
          <div>
            <input
              className="scale-125 accent-[#7152F3] mr-2"
              type="radio"
              id="office"
              name="type"
            />
            <label htmlFor="office"> Office</label>
          </div>
          <div>
            <input
              className="scale-125 accent-[#7152F3] mr-2"
              type="radio"
              id="remote"
              name="type"
            />
            <label htmlFor="remote"> Work from home</label>
          </div>
        </div>
        <div className="flex gap-3 w-[100%]  mb-4 mt-4">
          <button
            onClick={onClose}
            className="flex justify-center items-center gap-1 w-[48%] h-10 border rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex justify-center items-center gap-1  h-10 w-[48%] rounded-lg text-white bg-[#7152F3]"
          >
            Apply
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddJobModal;

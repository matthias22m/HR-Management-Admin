import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const FilterModal = ({ isOpen, onClose }: ModalProps) => {
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
        <h1 className="text-xl font-semibold">Filter</h1>
        <div className="w-34 h-10 mt-6 border rounded-md flex items-center">
          <label htmlFor="search-input">
            <CiSearch size={25} />
          </label>
          <input
            className="outline-0 pl-2 pr-2 w-[100%]"
            id="search-input"
            placeholder="Search Employee"
            type="text"
          />
        </div>
        <h2 className="mt-4 font-semibold">Department</h2>
        <div className=" mt-4 grid grid-rows-5 grid-cols-2 gap-2">
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Design</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Java</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">HR</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Python</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Sales</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">React JS</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Business Analyst</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Account</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Project Manager</label>
          </div>
          <div className="h-8 flex items-center gap-2">
            <input className="scale-150 accent-[#7152F3]" type="checkbox" name="" id="" />
            <label className=" ml-2" htmlFor="">Node JS</label>
          </div>
        </div>
        <h2 className="mt-4 font-semibold">Select Type</h2>
        <div className="w-[100%] mt-4 flex gap-4">
          <div>
            <input className="scale-125 accent-[#7152F3] mr-2" type="radio" id="office" name="type" />
            <label htmlFor="office"> Office</label>
          </div>
          <div>
            <input className="scale-125 accent-[#7152F3] mr-2" type="radio" id="remote" name="type" />
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

export default FilterModal;

import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GrDocumentUpload } from "react-icons/gr";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDocument() {
  const [file, setFile] = useState<File>();
  const handleChange = (file: React.SetStateAction<File | undefined>) => {
    setFile(file);
  };
  console.log(file);
  return (
    <>
      <FileUploader
        multiple={false}
        disabled={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      >
        <div className="border-2 border-[#7152F3] border-dotted rounded-xl flex-col place-content-center place-items-center w-96 h-32">
          <GrDocumentUpload className="mb-2" size={30} color="#7152F3" />
          {file !== undefined ? (
            <span className="text-[#7152F3]">File uploaded successfuly!</span>
          ) : (
            <p>
              Drag & Drop or <span className="text-[#7152F3]">choose file </span>
              to upload
            </p>
          )}
          <p className="text-sm text-gray-500">
            supported formats: Pdf, Jpeg, Jpg
          </p>
        </div>
      </FileUploader>
    </>
  );
}

export default DragDocument;

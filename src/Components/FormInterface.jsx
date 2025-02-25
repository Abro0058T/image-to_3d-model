"use client";
import axios from "axios";
import React, { useState } from "react";
import { FileUpload } from "../Components/file-upload";

function FormInterface({ setData, setFurniture }) {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (uploadedFiles) => {
    if (uploadedFiles.length === 0) return;

    const file = uploadedFiles[0]; // Get the first uploaded file
    setFiles(uploadedFiles);

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/wall", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data.furniture);

        setFurniture(response.data.furniture);
        setData(response.data.wall);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}

export default FormInterface;

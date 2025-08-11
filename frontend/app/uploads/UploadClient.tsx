"use client";

import FileUpload from "../../components/FileUpload";

export default function UploadClient() {
  const handleComplete = (key: string) => {
    // TODO: Wire up post-upload actions (e.g., save metadata, show toast, navigate)
    // For now, keep it simple and visible during manual testing.
    console.log("File uploaded:", key);
    alert(`File uploaded successfully: ${key}`);
  };

  return <FileUpload onUploadComplete={handleComplete} />;
}

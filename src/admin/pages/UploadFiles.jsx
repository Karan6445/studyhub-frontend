import { useState } from "react";
import { Upload, FileText, ImageIcon } from "lucide-react";

const UploadFiles = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    console.log(file);

    alert("File Uploaded Successfully");
  };

  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h1 className="text-3xl font-bold mb-8">
        Upload Study Material
      </h1>

      <form onSubmit={handleUpload}>

        <label className="border-2 border-dashed border-orange-400 rounded-xl h-72 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition">

          <Upload size={60} className="text-orange-500 mb-4"/>

          <h2 className="text-xl font-semibold">
            Drag & Drop Files Here
          </h2>

          <p className="text-gray-500 mt-2">
            PDF, Image, ZIP, DOCX
          </p>

          <input
            type="file"
            className="hidden"
            onChange={handleChange}
          />

        </label>

        {file && (
          <div className="mt-6 bg-gray-100 rounded-lg p-4 flex items-center gap-4">

            {file.type.includes("image") ? (
              <ImageIcon />
            ) : (
              <FileText />
            )}

            <div>

              <h3 className="font-semibold">
                {file.name}
              </h3>

              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>

          </div>
        )}

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">

          Upload File

        </button>

      </form>

    </div>
  );
};

export default UploadFiles;
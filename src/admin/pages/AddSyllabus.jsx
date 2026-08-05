import { useState } from "react";

const AddSyllabus = () => {
  const [formData, setFormData] = useState({
    department: "",
    semester: "",
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "pdf") {
      setFormData({ ...formData, pdf: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Syllabus Uploaded Successfully");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-8">
        Add Syllabus
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="department"
          placeholder="Department (Example: CSE)"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <select
          name="semester"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        >
          <option>Select Semester</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
          <option>Semester 5</option>
          <option>Semester 6</option>
          <option>Semester 7</option>
          <option>Semester 8</option>
        </select>

        <input
          type="file"
          name="pdf"
          accept=".pdf"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
          Upload Syllabus
        </button>

      </form>

    </div>
  );
};

export default AddSyllabus;
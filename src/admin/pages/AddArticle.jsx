import { useState } from "react";
import api from "../../api/axios";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/articles", formData);

    alert(res.data.message);

    setFormData({
      title: "",
      category: "",
      author: "",
      image: "",
      description: "",
      content: "",
    });
  } catch (err) {
    alert(err.response?.data?.message || "Error");
  }
};

  return (
    <div className="bg-white p-8 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-8">
        Add New Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Article Title"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <select
          name="category"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        >
          <option>Select Category</option>
          <option>React</option>
          <option>Java</option>
          <option>Python</option>
          <option>Node</option>
          <option>MongoDB</option>
          <option>AI</option>
        </select>

        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Short Description"
          rows="4"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Article Content"
          rows="10"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Publish Article
        </button>

      </form>

    </div>
  );
};

export default AddArticle;
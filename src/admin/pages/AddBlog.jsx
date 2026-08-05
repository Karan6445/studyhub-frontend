import { useState } from "react";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    author: "",
    image: null,
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setBlog({ ...blog, image: files[0] });
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(blog);
    alert("Blog Published Successfully");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-8">Add Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <select
          name="category"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        >
          <option>Select Category</option>
          <option>Technology</option>
          <option>Programming</option>
          <option>Career</option>
          <option>Education</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          rows="3"
          placeholder="Short Description"
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <textarea
          name="content"
          rows="10"
          placeholder="Write Blog Content..."
          className="w-full border rounded-lg p-3"
          onChange={handleChange}
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
          Publish Blog
        </button>

      </form>
    </div>
  );
};

export default AddBlog;
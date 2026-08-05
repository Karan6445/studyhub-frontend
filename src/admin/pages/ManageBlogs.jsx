const blogs = [
  {
    id: 1,
    title: "React 19 Features",
    category: "Technology",
    author: "Admin",
  },
  {
    id: 2,
    title: "Java Interview Tips",
    category: "Career",
    author: "Admin",
  },
];

const ManageBlogs = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h1 className="text-3xl font-bold mb-6">
        Manage Blogs
      </h1>

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Author</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>

          {blogs.map((blog) => (
            <tr key={blog.id} className="border-b">

              <td className="p-3">{blog.title}</td>

              <td className="text-center">{blog.category}</td>

              <td className="text-center">{blog.author}</td>

              <td className="text-center">

                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ManageBlogs;
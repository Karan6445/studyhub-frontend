const files = [
  {
    id: 1,
    name: "DSA Notes.pdf",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "React CheatSheet.pdf",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "DBMS Diagram.png",
    type: "Image",
    size: "500 KB",
  },
];

const ManageFiles = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h1 className="text-3xl font-bold mb-6">
        Uploaded Files
      </h1>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3 text-left">File Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Size</th>
            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {files.map((file) => (

            <tr key={file.id} className="border-b">

              <td className="p-3">{file.name}</td>

              <td className="text-center">{file.type}</td>

              <td className="text-center">{file.size}</td>

              <td className="text-center">

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

export default ManageFiles;
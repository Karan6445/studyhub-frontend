const syllabus = [
  {
    id: 1,
    department: "Computer Science",
    semester: "Semester 4",
  },
  {
    id: 2,
    department: "Mechanical",
    semester: "Semester 5",
  },
];

const ManageSyllabus = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h1 className="text-3xl font-bold mb-6">
        Manage Syllabus
      </h1>

      <table className="w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Department</th>
            <th className="p-3">Semester</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {syllabus.map((item) => (
            <tr key={item.id} className="border-b">

              <td className="p-3">{item.department}</td>

              <td className="text-center">{item.semester}</td>

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

export default ManageSyllabus;
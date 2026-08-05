const notes = [
  {
    id: 1,
    subject: "Data Structures",
    semester: "Semester 4",
  },
  {
    id: 2,
    subject: "Operating System",
    semester: "Semester 4",
  },
  {
    id: 3,
    subject: "DBMS",
    semester: "Semester 5",
  },
];

const ManageNotes = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h1 className="text-3xl font-bold mb-6">
        Manage Notes
      </h1>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3 text-left">Subject</th>
            <th className="p-3">Semester</th>
            <th className="p-3">Actions</th>
          </tr>

        </thead>

        <tbody>

          {notes.map((note) => (
            <tr key={note.id} className="border-b">

              <td className="p-3">{note.subject}</td>

              <td className="text-center">{note.semester}</td>

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

export default ManageNotes;
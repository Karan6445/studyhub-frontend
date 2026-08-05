import { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  Trash2,
  Pencil,
} from "lucide-react";

const UsersPage = () => {
  // ==========================
  // State
  // ==========================

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Users
  // ==========================

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/users"
      );

      setUsers(res.data);
    } catch (error) {
      console.log("Error fetching users:", error);
      alert("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Search
  // ==========================

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  // ==========================
  // Statistics
  // ==========================

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const blockedUsers = users.filter(
    (user) => user.status === "Blocked"
  ).length;

  // ==========================
  // Delete User
  // ==========================

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/users/${id}`
      );

      alert("User deleted successfully.");

      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Failed to delete user.");
    }
  };

  // ==========================
  // Block / Unblock
  // ==========================

  const toggleStatus = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/users/${id}/status`
      );

      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Failed to update status.");
    }
  };

  // ==========================
  // Edit User
  // ==========================

  const editUser = async (user) => {
    const name = prompt("Enter Name", user.name);

    if (!name) return;

    const email = prompt("Enter Email", user.email);

    if (!email) return;

    const role = prompt("Enter Role", user.role);

    if (!role) return;

    try {
      await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        {
          name,
          email,
          role,
        }
      );

      alert("User updated successfully.");

      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Failed to update user.");
    }
  };

  // ==========================
  // Loading
  // ==========================

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-xl font-semibold">
          Loading Users...
        </h2>
      </div>
    );
  }

  // ==========================
  // JSX Starts Here
  // (Continue with Part 2)
  // ==========================

  return (
        <div className="space-y-8">

      {/* Heading */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Users Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered users
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Total Users
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalUsers}
              </h2>
            </div>

            <Users
              size={45}
              className="text-orange-500"
            />

          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Active Users
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {activeUsers}
              </h2>
            </div>

            <UserCheck
              size={45}
              className="text-green-500"
            />

          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Blocked Users
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {blockedUsers}
              </h2>
            </div>

            <UserX
              size={45}
              className="text-red-500"
            />

          </div>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-5">

        <div className="flex items-center border rounded-lg px-4">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search user by name or email..."
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* Users Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th>Email</th>

              <th>Role</th>

              <th>Status</th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user) => (

                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-medium">
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    {user.role}
                  </td>

                  <td>

                    <button
                      onClick={() =>
                        toggleStatus(user._id)
                      }
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </button>

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          editUser(user)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() =>
                          deleteUser(user._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500"
                >
                  No users found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default UsersPage;
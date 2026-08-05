import { useState } from "react";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Image,
  Save,
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    websiteName: "Study Hub",
    email: "admin@studyhub.com",
    phone: "+91 9876543210",
    website: "https://studyhub.com",
    address: "Nashik, Maharashtra",
    description:
      "Study Hub provides Notes, Syllabus, Blogs and Courses.",

    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(settings);

    alert("Settings Saved Successfully");
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Website Settings
        </h1>

        <p className="text-gray-500">
          Manage your website information.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-8 space-y-6"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-medium">
              Website Name
            </label>

            <div className="flex items-center border rounded-lg mt-2">

              <Globe className="mx-3 text-gray-400" />

              <input
                type="text"
                name="websiteName"
                value={settings.websiteName}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              />

            </div>
          </div>

          <div>
            <label className="font-medium">
              Contact Email
            </label>

            <div className="flex items-center border rounded-lg mt-2">

              <Mail className="mx-3 text-gray-400" />

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              />

            </div>
          </div>

          <div>
            <label className="font-medium">
              Phone Number
            </label>

            <div className="flex items-center border rounded-lg mt-2">

              <Phone className="mx-3 text-gray-400" />

              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              />

            </div>
          </div>

          <div>
            <label className="font-medium">
              Website URL
            </label>

            <input
              type="text"
              name="website"
              value={settings.website}
              onChange={handleChange}
              className="w-full border rounded-lg mt-2 p-3"
            />
          </div>

        </div>

        <div>
          <label className="font-medium">
            Address
          </label>

          <div className="flex items-center border rounded-lg mt-2">

            <MapPin className="mx-3 text-gray-400" />

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />

          </div>
        </div>

        <div>
          <label className="font-medium">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={settings.description}
            onChange={handleChange}
            className="w-full border rounded-lg mt-2 p-3"
          />
        </div>

        <h2 className="text-xl font-semibold">
          Social Links
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            className="border rounded-lg p-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            className="border rounded-lg p-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            className="border rounded-lg p-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="youtube"
            placeholder="YouTube URL"
            className="border rounded-lg p-3"
            onChange={handleChange}
          />

        </div>

        <div>

          <label className="font-medium">
            Website Logo
          </label>

          <div className="border-2 border-dashed rounded-xl mt-2 p-8 text-center">

            <Image
              className="mx-auto text-orange-500"
              size={45}
            />

            <p className="mt-3 text-gray-500">
              Upload Logo
            </p>

            <input
              type="file"
              className="mt-4"
            />

          </div>

        </div>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
        >
          <Save size={18} />
          Save Settings
        </button>

      </form>

    </div>
  );
};

export default Settings;
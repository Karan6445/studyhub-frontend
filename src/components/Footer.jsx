import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1c2e] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold mb-5">
              StudyHub
            </h2>

            <p className="text-gray-300 leading-8">
              A modern learning platform helping thousands of students
              achieve their academic goals through premium study
              materials and interactive learning.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a href="#" className="hover:text-yellow-300">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Notes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Courses
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Study Material
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300">
                  Help Center
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">

                <MapPin size={20} />

                <p>
                  INDIA
                </p>

              </div>

              <div className="flex gap-3">

                <Mail size={20} />

                <p>
                  hello@studyhub.com
                </p>

              </div>

              <div className="flex gap-3">

                <Phone size={20} />

                <p>
                  +1 123 456 7890
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-sm">
            © 2026 StudyHub. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-400">

            <a href="#" className="hover:text-yellow-300">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-yellow-300">
              Terms of Service
            </a>

            <a href="#" className="hover:text-yellow-300">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
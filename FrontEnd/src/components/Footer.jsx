import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Nex<span className="text-blue-500">Hire</span>
            </h2>

            <p className="mt-5 text-sm leading-7">
              NexHire helps job seekers connect with top companies and discover
              exciting career opportunities across multiple industries.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="hover:text-blue-500 transition">
                  Jobs
                </Link>
              </li>

              <li>
                <Link to="/companies" className="hover:text-blue-500 transition">
                  Companies
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Popular Categories
            </h3>

            <ul className="space-y-3">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>UI/UX Designer</li>
              <li>Data Scientist</li>
              <li>DevOps Engineer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>support@nexhire.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} NexHire. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Portfolio</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SemilogoDan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/semilogo-dan-s-ba86b2206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:semilogoolusola@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-600 hover:text-primary">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Connect</h3>
            <p className="text-sm text-gray-600">
              Feel free to reach out through any of my social media channels or send me an email directly.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
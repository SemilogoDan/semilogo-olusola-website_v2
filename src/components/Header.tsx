import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold">
            Portfolio
          </Link>
          <nav className="flex space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium hover:text-primary"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
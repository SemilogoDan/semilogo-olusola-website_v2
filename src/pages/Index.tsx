import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Full Stack Developer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Building modern web applications with cutting-edge technologies.
              </p>
              <a
                href="#projects"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Developer"
                  className="rounded-lg shadow-lg"
                />
                <div className="flex justify-center mt-6 space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-600 mb-6">
                  I'm a passionate full-stack developer with expertise in building scalable web applications.
                  My focus is on creating efficient, user-friendly solutions using modern technologies.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Frontend Development</li>
                  <li>✓ Backend Development</li>
                  <li>✓ Database Design</li>
                  <li>✓ API Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                </div>
                <p className="text-gray-600">University Name • 2020-2022</p>
                <p className="text-gray-600 mt-2">
                  Specialized in Software Engineering and Artificial Intelligence
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                </div>
                <p className="text-gray-600">University Name • 2016-2020</p>
                <p className="text-gray-600 mt-2">
                  Focus on Computer Science fundamentals and Software Development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Honors & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Best Graduate Project</h3>
                </div>
                <p className="text-gray-600">University Name • 2022</p>
                <p className="text-gray-600 mt-2">
                  Awarded for exceptional research and implementation of AI-driven solutions
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Dean's List</h3>
                </div>
                <p className="text-gray-600">University Name • 2019-2022</p>
                <p className="text-gray-600 mt-2">
                  Consistently maintained high academic performance throughout the program
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A full-featured online shopping platform",
                  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                },
                {
                  title: "Task Management App",
                  description: "Efficient project and task management solution",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                },
                {
                  title: "Portfolio Website",
                  description: "Modern and responsive portfolio showcase",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

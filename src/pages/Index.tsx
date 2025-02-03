import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award, Medal } from "lucide-react";

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
        <section id="about" className="about-section py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Developer"
                  className="rounded-lg shadow-lg"
                />
                <div className="flex justify-center mt-6 space-x-4 social-icons">
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
        <section className="education-section py-24 bg-gray-50">
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

        {/* Projects Section */}
        <section id="projects" className="project-section py-24 bg-gray-50">
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
                    <h3 className="text-xl font-semibold mb-2 project-title">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certification-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Medal className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">AWS Certified Solutions Architect</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Amazon Web Services • 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Professional certification for designing distributed systems on AWS
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Medal className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Google Cloud Professional</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Google • 2023</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Advanced certification for Google Cloud Platform architecture
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

        {/* Contact Section */}
        <section id="contact" className="contact-section py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

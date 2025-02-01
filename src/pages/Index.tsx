import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
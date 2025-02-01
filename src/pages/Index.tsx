import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const gigs = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    price: "Starting at $2000",
  },
  {
    id: 2,
    title: "Technical Consulting",
    description: "Expert advice on your technical challenges",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "Starting at $150/hour",
  },
  {
    id: 3,
    title: "Code Review",
    description: "Comprehensive code review and optimization",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    price: "Starting at $500",
  },
];

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
                Building Digital Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Expert web development and technical consulting to help your business grow.
              </p>
              <a
                href="#services"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Services/Gigs Section */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gigs.map((gig) => (
                <Link
                  key={gig.id}
                  to={`/gig/${gig.id}`}
                  className="group block overflow-hidden rounded-lg border hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{gig.title}</h3>
                    <p className="text-gray-600 mb-4">{gig.description}</p>
                    <p className="text-primary font-medium">{gig.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-8">
                I'm a passionate developer with over 8 years of experience in building
                web applications. I specialize in creating efficient, scalable, and
                user-friendly solutions for businesses of all sizes.
              </p>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
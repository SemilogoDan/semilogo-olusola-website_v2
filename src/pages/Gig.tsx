import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const gigs = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    price: "Starting at $2000",
    details: [
      "Custom web application development",
      "Frontend and backend implementation",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "Technical Consulting",
    description: "Expert advice on your technical challenges",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "Starting at $150/hour",
    details: [
      "Technical architecture review",
      "Performance optimization",
      "Security assessment",
      "Code quality analysis",
      "Technology stack recommendations",
    ],
  },
  {
    id: 3,
    title: "Code Review",
    description: "Comprehensive code review and optimization",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    price: "Starting at $500",
    details: [
      "In-depth code analysis",
      "Best practices recommendations",
      "Performance optimization suggestions",
      "Security vulnerability assessment",
      "Documentation review",
    ],
  },
];

const Gig = () => {
  const { id } = useParams();
  const gig = gigs.find((g) => g.id === Number(id));

  if (!gig) {
    return <div>Gig not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={gig.image}
                alt={gig.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{gig.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{gig.description}</p>
              <p className="text-3xl font-bold text-primary mb-8">{gig.price}</p>
              
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-3 mb-8">
                {gig.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                Contact to Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gig;
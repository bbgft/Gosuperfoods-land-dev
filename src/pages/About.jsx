import { FaLeaf, FaGlobe, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?healthy,food')",
        }}
      >
        <div className="bg-black bg-opacity-50 px-6 py-8 text-white text-center rounded-lg mt-44">
          <h1 className="text-4xl font-bold">Welcome to Go Superfoods</h1>
          <p className="mt-2 text-lg">
            Empowering a healthier world—one superfood at a time.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Go Superfoods is a passionate food-tech startup on a mission to make
          nutrient-dense, sustainable, and affordable superfoods accessible to
          everyone. We believe health and wellness should be a right, not a
          privilege.
        </p>

        <p className="text-lg">
          Our journey began with a simple question:{" "}
          <em>“How can we make superfoods more accessible and impactful?”</em>
          Since then, we've grown into a movement focused on nutrition,
          education, community, and sustainability.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Vision & Mission
          </h2>
          <p className="text-lg mb-4">
            <strong className="text-green-600">Vision:</strong> To empower a
            healthier world, one superfood at a time.
          </p>
          <p className="text-lg">
            <strong className="text-green-600">Mission:</strong> To improve
            global health by delivering nutrient-rich superfoods that are safe,
            sustainable, and available to all.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="mt-2 text-gray-700">
                We ensure our superfoods are of the highest standard—natural,
                organic, and authentic.
              </p>
            </div>
            <div>
              <FaGlobe className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="mt-2 text-gray-700">
                From farm to table, we prioritize eco-friendly practices and
                carbon-neutral goals.
              </p>
            </div>
            <div>
              <FaUsers className="text-orange-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-2 text-gray-700">
                We uplift farmers, empower communities, and create awareness
                through education and outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Impact */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Sustainability & Social Impact
          </h2>
          <p className="text-lg mb-4">
            Our strategic framework—
            <strong>"Healthy People on a Healthy Planet"</strong>—guides
            everything we do. From ethical sourcing and zero-waste policies to
            youth education and women empowerment initiatives, we are committed
            to real change.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Carbon-neutral production and responsible sourcing</li>
            <li>
              School and community education programs (3E: Educate, Empower,
              Engage)
            </li>
            <li>
              Women-led social enterprise: <strong>Superfoods DiDi</strong>
            </li>
            <li>
              Superfoods Ambassador & Adoption programs to spread awareness
            </li>
            <li>Nutrition gardens and superfoods hubs for local impact</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Movement</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Be a part of a healthier, more sustainable future. Whether you're a
          consumer, farmer, student, or enthusiast, Go Superfoods welcomes you.
        </p>
        <a
          href="https://humblegroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </section>
    </div>
  );
}

export default function About() {
  const features = [
    {
      icon: "📚",
      title: "Vast Collection",
      description: "Access thousands of books across all genres and categories."
    },
    {
      icon: "💡",
      title: "Smart Recommendations",
      description: "Our AI-powered system recommends books based on your preferences."
    },
    {
      icon: "❤️",
      title: "Community Driven",
      description: "Connect with fellow book lovers and share your favorite reads."
    },
    {
      icon: "🌍",
      title: "Global Library",
      description: "Discover books from authors around the world."
    },
  ];

  const team = [
    { name: "Fajar Ramadhan", role: "Lead Developer" },
    { name: "Budi Santoso", role: "UI/UX Designer" },
    { name: "Siti Nurhaliza", role: "Data Scientist" },
    { name: "Ahmad Wijaya", role: "Backend Engineer" },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          About E-Library
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your ultimate platform for discovering, exploring, and connecting with books and fellow readers worldwide.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-blue-100">
            To democratize access to books and foster a global community of readers who share knowledge, insights, and passion for literature. We believe that reading enriches lives and connects people across cultures and boundaries.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Why Choose E-Library?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
        {[
          { label: "Books Available", value: "50K+" },
          { label: "Active Readers", value: "100K+" },
          { label: "Community Reviews", value: "500K+" },
          { label: "Countries", value: "180+" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
              {stat.value}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! Contact us through our contact page or reach out on social media.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

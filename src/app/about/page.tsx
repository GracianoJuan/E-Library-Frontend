export default function About() {
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

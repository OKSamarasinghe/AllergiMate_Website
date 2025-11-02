import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#2196F3'}}>
              Who We Are
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                AllergiMate is a health-tech startup founded with a simple yet powerful goal — to make every meal safe.
                We blend cutting-edge AI with human empathy to empower individuals, families, and businesses to live and serve without fear of allergic reactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F8F9FA', borderLeft: `4px solid #2196F3`}}>
                <p className="text-lg text-gray-700 italic font-medium">
                  "To make allergy safety effortless, accurate, and accessible for everyone."
                </p>
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We believe that everyone deserves to eat with confidence. Our mission drives every feature we build, 
                every partnership we form, and every innovation we pursue.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                  <span className="text-white text-3xl">🔮</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              </div>
              <div className="text-center p-6 rounded-lg" style={{backgroundColor: '#F0F8F0', borderLeft: `4px solid #38C558`}}>
                <p className="text-lg text-gray-700 italic font-medium">
                  "A future where no one has to question what's on their plate."
                </p>
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We envision a world where dining is purely about enjoyment and connection, 
                not worry and fear. Technology should make life simpler, not complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at AllergiMate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Empathy */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                We care about the people behind every meal.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We use AI to solve real-world health challenges.
              </p>
            </div>

            {/* Inclusivity */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#9C27B0'}}>
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusivity</h3>
              <p className="text-gray-600 leading-relaxed">
                Food safety for all, across every cuisine and culture.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#607D8B'}}>
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Your safety and privacy are always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">💡</span>
            <h2 className="text-4xl font-bold mb-8 text-white">
              Our Story
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-xl text-white leading-relaxed italic">
                "AllergiMate began as a small idea — to help one person eat safely. 
                Today, it's a mission to make allergy-safe dining the global standard."
              </p>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              What started as a personal challenge became our collective passion. 
              Every line of code, every algorithm, every partnership we build is driven by real stories 
              from real people who deserve to dine without fear.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built by <span style={{color: '#2196F3'}}>Passionate Innovators</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines expertise in AI, healthcare, and user experience to create solutions that truly matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Engineers</h3>
              <p className="text-gray-600">Building intelligent systems that understand food like never before</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl font-bold">UX</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Experts</h3>
              <p className="text-gray-600">Crafting intuitive experiences that make safety simple</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <span className="text-white text-2xl font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Advisors</h3>
              <p className="text-gray-600">Ensuring our solutions meet real medical needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you're someone living with allergies, a restaurant owner, or a developer who wants to make a difference — 
            there's a place for you in the AllergiMate community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" style={{backgroundColor: '#38C558'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}>
              🤝 Partner With Us
            </button>
            <button className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" style={{borderColor: '#2196F3', color: '#2196F3'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}>
              💼 View Careers
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
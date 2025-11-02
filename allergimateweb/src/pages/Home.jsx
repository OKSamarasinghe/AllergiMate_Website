import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#2196F3'}}>
                Manage Your Allergies with 
                <span style={{color: '#38C558'}}> AllergiMate</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-600">
                Your personal allergy management companion that helps you track, identify, and avoid allergens with smart technology and real-time alerts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" style={{backgroundColor: '#38C558'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}>
                  Try AllergiMate
                </button>
                <button className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" style={{borderColor: '#2196F3', color: '#2196F3'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8 transform rotate-3 hover:rotate-0 transition duration-300">
                <div className="w-full h-64 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'}}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                      <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h3 className="font-semibold text-lg" style={{color: '#1976D2'}}>AllergiMate Dashboard</h3>
                    <p className="mt-2" style={{color: '#1565C0'}}>Track your allergies smartly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Allergy Management
              <span style={{color: '#2196F3'}}> Made Simple</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AllergiMate combines advanced technology with user-friendly design to help you live confidently with allergies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#E3F2FD'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#2196F3'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Tracking</h3>
              <p className="text-gray-600">Monitor your allergic reactions and identify patterns with our intelligent tracking system.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: '#E8F5E8'}}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#38C558'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m5-7l-5 5V3l5 5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Alerts</h3>
              <p className="text-gray-600">Get instant notifications about potential allergens in your environment and food.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Support</h3>
              <p className="text-gray-600">Quick access to emergency contacts and medical information when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users <span style={{color: '#2196F3'}}>Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#2196F3'}}>
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Allergy Sufferer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"AllergiMate has completely changed how I manage my food allergies. The real-time alerts have prevented several dangerous situations."</p>
            </div>

            <div className="text-white rounded-lg p-8" style={{backgroundColor: '#2196F3'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold" style={{color: '#2196F3'}}>
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Dr. Michael Chen</h4>
                  <p className="text-sm" style={{color: '#E3F2FD'}}>Allergist</p>
                </div>
              </div>
              <p className="italic">"I recommend AllergiMate to all my patients. It's an excellent tool for tracking symptoms and managing allergies effectively."</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#38C558'}}>
                  E
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Emily Davis</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Managing my child's allergies is so much easier now. The app gives me peace of mind every day."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
            Try AllergiMate Today
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of users who trust AllergiMate to help them live safely with allergies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" style={{backgroundColor: '#38C558'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}>
              Download App
            </button>
            <button className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" style={{borderColor: '#2196F3', color: '#2196F3'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
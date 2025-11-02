import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#2196F3'}}>
              About <span style={{color: '#38C558'}}>AllergiMate</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                We're a passionate team of innovators dedicated to making food allergy management effortless and accessible. 
                Through cutting-edge AI technology and human-centered design, we're transforming how people with allergies interact with food.
              </p>
              <div className="inline-block px-8 py-3 rounded-full" style={{backgroundColor: '#38C558'}}>
                <p className="text-white font-semibold text-lg">"Making every meal safe, one scan at a time"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span style={{color: '#2196F3'}}>Purpose</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              </div>
              <div className="text-center p-6 rounded-lg mb-6" style={{backgroundColor: '#E3F2FD', borderLeft: `4px solid #2196F3`}}>
                <p className="text-lg text-gray-700 italic font-medium">
                  "To empower individuals with food allergies to live freely and confidently through innovative technology."
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Provide instant, accurate allergy detection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Make dining safe and stress-free</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Bridge the gap between consumers and restaurants</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              </div>
              <div className="text-center p-6 rounded-lg mb-6" style={{backgroundColor: '#E8F5E8', borderLeft: `4px solid #38C558`}}>
                <p className="text-lg text-gray-700 italic font-medium">
                  "A world where food allergies never limit your choices or experiences."
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">★</span>
                  </div>
                  <p className="text-gray-600">Universal food safety standards</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">★</span>
                  </div>
                  <p className="text-gray-600">Global accessibility for allergy management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">★</span>
                  </div>
                  <p className="text-gray-600">Technology that brings people together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              Our Core <span style={{color: '#38C558'}}>Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Safety First */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5V16H8.5V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature prioritizes user safety and accurate allergy detection above all else.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage cutting-edge AI to solve complex real-world health challenges.
              </p>
            </div>

            {/* Empathy */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the daily challenges and design with compassion and care.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#9C27B0'}}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions work for everyone, regardless of background or technical skill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - FIXED */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Our Journey
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#2196F3'}}>The Problem</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Over 220 million people worldwide live with food allergies, yet 30% of allergic reactions 
                    still occur in restaurants due to miscommunication and lack of proper tools.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#38C558'}}>The Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We developed AI-powered technology that bridges the communication gap, 
                    making allergy information instant, accurate, and accessible to everyone.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3" style={{color: '#FF6B6B'}}>The Impact</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Today, we're helping thousands of people dine safely while empowering 
                    restaurants to serve with confidence and care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              {/* Logo Display */}
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <img src={logo} alt="AllergiMate Logo" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#2196F3'}}>Our Promise</h3>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Every line of code we write, every feature we build, and every partnership we form 
                is driven by our commitment to making food allergies a thing you manage, not something that manages you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powered by <span style={{color: '#2196F3'}}>Advanced Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines multiple cutting-edge technologies to deliver unmatched accuracy and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5.04,7.5L12,10.85L18.96,7.5L12,4.15Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced algorithms that learn from millions of food data points to provide accurate allergen detection.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Image recognition technology that can identify ingredients and potential allergens in food photos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12H9C9,13.65 10.35,15 12,15C13.65,15 15,13.65 15,12H17M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart text analysis that understands menu descriptions and ingredient lists in multiple languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section - UPDATED BACKGROUND */}
      <section className="py-20" style={{backgroundColor: '#38C558'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A diverse group of passionate professionals working together to make food allergies manageable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5,12C11,12 12.5,11.33 12.5,10.5C12.5,9.67 11,9 9.5,9C8,9 6.5,9.67 6.5,10.5C6.5,11.33 8,12 9.5,12M3,20V18C3,16.67 5.67,16 9.5,16C13.33,16 16,16.67 16,18V20H3M16.5,20V18.5C16.5,17.17 15.17,16 13.5,16H13.75C15.58,16 17.5,16.92 17.5,18.5V20H16.5M14.5,12C16,12 17.5,11.33 17.5,10.5C17.5,9.67 16,9 14.5,9C13.92,9 13.25,9.17 12.75,9.42C13.08,9.67 13.25,10.08 13.25,10.5C13.25,10.92 13.08,11.33 12.75,11.58C13.25,11.83 13.92,12 14.5,12Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engineers</h3>
              <p className="text-gray-600 text-sm">Building robust, scalable solutions</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6H13V14H11V6M11,16H13V18H11V16Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Researcher</h3>
              <p className="text-gray-600 text-sm">Ensuring medical accuracy</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#9C27B0'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V19H19V9Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Designers</h3>
              <p className="text-gray-600 text-sm">Crafting intuitive experiences</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A6,6 0 0,1 18,8A6,6 0 0,1 12,14A6,6 0 0,1 6,8A6,6 0 0,1 12,2M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,15C15.31,15 18,16.69 18,18.75V22H6V18.75C6,16.69 8.69,15 12,15Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building connections</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" 
              style={{backgroundColor: '#25af45'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#03f239'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#25af45'}
              onClick={() => navigate('/team')}
            >
              🧑‍💻 Meet Our Full Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - UPDATED BACKGROUND */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🤝</span>
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              Join the AllergiMate Movement
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're living with allergies, working in food service, or simply believe in our mission — 
              there's a place for you in our community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" 
              style={{backgroundColor: '#38C558'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}
              onClick={() => navigate('/product')}
            >
              🚀 Try Our Product
            </button>
            <button 
              className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" 
              style={{borderColor: '#2196F3', color: '#2196F3'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} 
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}
              onClick={() => navigate('/contact')}
            >
              💬 Get In Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
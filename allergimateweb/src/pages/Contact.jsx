import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#2196F3'}}>
              Let's Create a Safer Food Future  <span style={{color: '#38C558'}}>Together</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                Have questions, ideas, or partnership opportunities? We'd love to hear from you. Whether you're a restaurant owner, 
                a health-tech collaborator, or an allergy-aware individual — AllergiMate is built for you.
              </p>
              <div className="inline-block px-8 py-3 rounded-full" style={{backgroundColor: '#38C558'}}>
                <p className="text-white font-semibold text-lg">🤝 Building Connections • 💡 Sharing Ideas • 🌍 Making Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in <span style={{color: '#2196F3'}}>Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a 
                  href="mailto:team.allergimate@gmail.com"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white"
                  style={{backgroundColor: '#2196F3'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'} 
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
                >
                  <span>📧</span>
                  <span>team.allergimate@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">Based in the heart of Sri Lanka</p>
                <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-lg" style={{backgroundColor: '#E8F5E8', color: '#38C558'}}>
                  <span>📍</span>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - UPDATED BACKGROUND */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Send Us a Message
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-lg">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 transition duration-200"
                    style={{
                      borderColor: '#E5E7EB',
                      focusRingColor: '#2196F3'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2196F3';
                      e.target.style.boxShadow = `0 0 0 2px rgba(33, 150, 243, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 transition duration-200"
                    style={{
                      borderColor: '#E5E7EB',
                      focusRingColor: '#2196F3'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2196F3';
                      e.target.style.boxShadow = `0 0 0 2px rgba(33, 150, 243, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 transition duration-200 resize-vertical"
                    style={{
                      borderColor: '#E5E7EB',
                      focusRingColor: '#2196F3'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2196F3';
                      e.target.style.boxShadow = `0 0 0 2px rgba(33, 150, 243, 0.1)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E5E7EB';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Tell us about your inquiry, partnership ideas, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-12 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white ${
                      isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    style={{backgroundColor: '#38C558'}}
                    onMouseEnter={(e) => {
                      if (!isLoading) {
                        e.target.style.backgroundColor = '#2E8B57';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLoading) {
                        e.target.style.backgroundColor = '#38C558';
                      }
                    }}
                  >
                    {isLoading ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <span>📧</span>
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Section - UPDATED BACKGROUND */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              Partnership <span style={{color: '#38C558'}}>Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in revolutionizing food safety and allergy management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurants */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurants & Hotels</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Integrate our platform to provide safer dining experiences for your allergy-conscious customers.
              </p>
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-white transition duration-200"
                style={{backgroundColor: '#38C558'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}
              >
                Learn More
              </button>
            </div>

            {/* Health Tech */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health-Tech Collaborators</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Partner with us to advance allergy detection technology and improve healthcare outcomes.
              </p>
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-white transition duration-200"
                style={{backgroundColor: '#2196F3'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
              >
                Collaborate
              </button>
            </div>

            {/* Investors */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investors & Advisors</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join our mission to make food allergies manageable through innovative technology solutions.
              </p>
              <button 
                className="px-6 py-3 rounded-lg font-semibold text-white transition duration-200"
                style={{backgroundColor: '#FF6B6B'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF5252'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6B6B'}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - UPDATED BACKGROUND */}
      <section className="py-20" style={{backgroundColor: '#38C558'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-600">We typically respond within 24 hours during business days. For urgent partnership or business inquiries, we aim to respond within 12 hours.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can restaurants integrate AllergiMate into their existing systems?</h3>
              <p className="text-gray-600">Yes! Our platform is designed to seamlessly integrate with existing restaurant management systems. We provide comprehensive onboarding and technical support.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer demos or trials?</h3>
              <p className="text-gray-600">Absolutely! We offer personalized demos for restaurants and businesses interested in our platform. Contact us to schedule a demonstration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message Section - UPDATED BACKGROUND */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🤝</span>
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              We're here to listen, collaborate, and innovate — because every meal deserves to be safe.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your voice matters in shaping the future of food safety. Whether you have feedback, ideas, or simply want to join our community, 
              we're excited to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:team.allergimate@gmail.com"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" 
              style={{backgroundColor: '#2196F3'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
            >
              📧 Email Us Directly
            </a>
            <button 
              className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" 
              style={{borderColor: '#38C558', color: '#38C558'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#38C558'; e.target.style.color = 'white'}} 
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#38C558'}}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              📝 Send a Message
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
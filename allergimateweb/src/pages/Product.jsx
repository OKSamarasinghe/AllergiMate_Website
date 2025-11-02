import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mobileImage from '../assets/mobile.jpg';
import laptopImage from '../assets/lap.jpg';

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#2196F3'}}>
              Smarter Food Safety <span style={{color: '#38C558'}}>for Everyone</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                AllergiMate is developing a powerful yet simple ecosystem — combining mobile and web platforms 
                to make allergy detection instant, intelligent, and reliable.
              </p>
              <div className="inline-block px-8 py-3 rounded-full" style={{backgroundColor: '#2196F3'}}>
                <p className="text-white font-semibold text-lg">🔬 AI-Powered • 🌍 Global • 🛡️ Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full mb-4" style={{backgroundColor: '#E3F2FD'}}>
                  <span className="text-sm font-semibold" style={{color: '#2196F3'}}>📱 FOR INDIVIDUALS</span>
                </div>
                <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
                  Your Pocket-Sized <span style={{color: '#38C558'}}>Food Safety Expert</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Every meal can be a risk for those with allergies. Our upcoming AllergiMate App will use AI 
                  to identify allergens through food photos, barcodes, or ingredient scans — helping users make safe choices anywhere.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xl">🤳</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">AI-powered food image recognition</h3>
                    <p className="text-gray-600 text-sm">Snap a photo and instantly identify potential allergens in your food</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xl">🧬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Personalized allergy profiles</h3>
                    <p className="text-gray-600 text-sm">Customized safety alerts based on your specific allergies and sensitivities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FF6B6B'}}>
                    <span className="text-white text-xl">📦</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Barcode & label scanner</h3>
                    <p className="text-gray-600 text-sm">Quick product scanning for instant ingredient and allergen information</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#9C27B0'}}>
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Food history & reaction tracker</h3>
                    <p className="text-gray-600 text-sm">Monitor your eating patterns and track any allergic reactions over time</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FF9800'}}>
                    <span className="text-white text-xl">🌎</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Multi-language support for global use</h3>
                    <p className="text-gray-600 text-sm">Access allergy information in your preferred language anywhere in the world</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: '#E8F5E8', borderLeft: `4px solid #38C558`}}>
                <p className="text-lg font-semibold text-gray-800 italic">
                  "We don't guess what's safe — we know."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition duration-300">
                <img 
                  src={mobileImage} 
                  alt="AllergiMate Mobile App Interface" 
                  className="w-full h-96 object-contain rounded-lg"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{backgroundColor: '#38C558'}}>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Platform Section - UPDATED BACKGROUND */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full mb-4" style={{backgroundColor: '#E8F5E8'}}>
                  <span className="text-sm font-semibold" style={{color: '#38C558'}}>🏨 FOR RESTAURANTS & HOTELS</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Transparency That Builds Trust
                </h2>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  AllergiMate Web helps hospitality businesses provide clear allergen information, build trust, and stay compliant.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xl">🧾</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Upload recipes & menus for instant allergen detection</h3>
                    <p className="text-blue-100 text-sm">Automatically identify and flag allergens in your menu items and recipes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FF6B6B'}}>
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">AI-powered ingredient parser</h3>
                    <p className="text-blue-100 text-sm">Smart analysis of complex ingredient lists and cross-contamination risks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FF9800'}}>
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">QR menus for guests with allergy profiles</h3>
                    <p className="text-blue-100 text-sm">Personalized digital menus that highlight safe options for each guest</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#9C27B0'}}>
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Dashboard with allergen analytics & compliance tracking</h3>
                    <p className="text-blue-100 text-sm">Monitor allergen incidents and maintain regulatory compliance effortlessly</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderLeft: `4px solid #38C558`}}>
                <p className="text-lg font-semibold text-white italic">
                  "Serve with confidence. Simplify compliance."
                </p>
              </div>
            </div>

            <div className="lg:order-1 relative">
              <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition duration-300">
                <img 
                  src={laptopImage} 
                  alt="AllergiMate Web Platform Dashboard" 
                  className="w-full h-96 object-contain rounded-lg"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{backgroundColor: '#38C558'}}>
                  In Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - UPDATED BACKGROUND */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              How It <span style={{color: '#38C558'}}>Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to safer dining for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <div className="mb-4">
                <span className="text-4xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Up</h3>
              <p className="text-gray-600 leading-relaxed">
                Create your personalized allergy profile or upload your restaurant menu to get started with AllergiMate.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <div className="mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scan or Upload</h3>
              <p className="text-gray-600 leading-relaxed">
                Let our advanced AI analyze ingredients and identify potential allergens in real-time with incredible accuracy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#9C27B0'}}>
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <div className="mb-4">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eat Confidently</h3>
              <p className="text-gray-600 leading-relaxed">
                Get real-time safety results and personalized recommendations for complete peace of mind with every meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20" style={{backgroundColor: '#38C558'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Ecosystem Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Whether you're an individual managing allergies or a business serving customers, we have you covered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mobile App</h3>
                <p className="text-gray-600">For Individuals</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Photo-based allergen detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Personal allergy profiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Barcode scanning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Reaction tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Offline mode support</span>
                </div>
              </div>
            </div>

            {/* Web Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Web Platform</h3>
                <p className="text-gray-600">For Restaurants & Hotels</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Menu allergen analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">QR code generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Compliance dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Analytics & reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Multi-location support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🛡️</span>
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              AllergiMate isn't just another app — it's your personal food guardian.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of users who trust AllergiMate to keep them safe, and restaurants that rely on us 
              to serve their customers with confidence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" 
              style={{backgroundColor: '#38C558'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}
              onClick={() => navigate('/about')}
            >
              🔬 Learn About Our Technology
            </button>
            <button 
              className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" 
              style={{borderColor: '#2196F3', color: '#2196F3'}}
              onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} 
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}
              onClick={() => navigate('/contact')}
            >
              📬 Get Early Access
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
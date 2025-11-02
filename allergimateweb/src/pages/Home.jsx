import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import familyEatImage from '../assets/familyeat.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#2196F3'}}>
                🌿 AllergiMate <br></br> Eat Freely. 
                <span style={{color: '#38C558'}}> Live Fearlessly.</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-600">
                AI-powered food allergy detection for safer dining — at home, on the go, or in restaurants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105 text-white" 
                  style={{backgroundColor: '#38C558'}} 
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} 
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}
                  onClick={() => navigate('/product')}
                >
                  📱 Discover Our Product
                </button>
                <button 
                  className="border-2 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200" 
                  style={{borderColor: '#2196F3', color: '#2196F3'}} 
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#2196F3'; e.target.style.color = 'white'}} 
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2196F3'}}
                  onClick={() => navigate('/about')}
                >
                  🧑‍🍳 Join the Movement
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-4 ">
                <img 
                  src={familyEatImage} 
                  alt="Family eating together safely" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Everyday <span style={{color: '#2196F3'}}>Allergy Companion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              AllergiMate is redefining how people with allergies interact with food. Using artificial intelligence and data-driven insights, we're building tools that detect allergens, recommend safe meals, and empower restaurants to serve with confidence.
            </p>
            <div className="inline-block px-8 py-3 rounded-full" style={{backgroundColor: '#38C558'}}>
              <p className="text-white font-semibold text-lg">"One Scan. Zero Doubt."</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#E3F2FD'}}>
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Detection</h3>
              <p className="text-gray-600">Advanced artificial intelligence identifies allergens in real-time with unmatched accuracy.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#E8F5E8'}}>
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Dining</h3>
              <p className="text-gray-600">Get personalized meal recommendations tailored to your specific allergies and dietary needs.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#F3E5F5'}}>
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Partnership</h3>
              <p className="text-gray-600">Empowering restaurants with tools to serve allergy-conscious customers with complete confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Updated with Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              A Global Problem That Demands Attention
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">220M Global Food Allergy Sufferers</h3>
                    <p className="text-gray-600">Over 220 million people around the world suffer from food allergies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#38C558'}}>
                    <span className="text-white text-2xl">🏨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">30% Restaurant Reactions</h3>
                    <p className="text-gray-600">Nearly 30% of allergic reactions happen in restaurants and hotels.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#FF6B6B'}}>
                    <span className="text-white text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Crisis</h3>
                    <p className="text-gray-600">Food safety isn't optional; it's essential for millions of lives.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-lg" style={{backgroundColor: '#F8F9FA', borderLeft: `4px solid #2196F3`}}>
                <p className="text-lg text-gray-700 italic">
                  "AllergiMate bridges the gap between those who eat and those who serve, ensuring confidence with every bite."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                    <span className="text-white text-4xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The AllergiMate Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced AI technology that creates a safer dining experience for everyone, everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision CTA Section */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🌍</span>
            <h2 className="text-4xl font-bold mb-6 text-white">
              We believe in a world where food brings people together — not fear.
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join us in making allergy-safe living effortless for everyone.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105" 
              style={{backgroundColor: '#38C558', color: 'white'}} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2E8B57'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#38C558'}
              onClick={() => navigate('/team')}
            >
              Learn More About Our Team
            </button>
            <button 
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-200 text-white hover:bg-white" 
              onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#2196F3'}} 
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}
              onClick={() => navigate('/contact')}
            >
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section - Updated with Icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Making a <span style={{color: '#2196F3'}}>Real Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">AI-powered detection accuracy</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Meals</h3>
              <p className="text-gray-600">Meals safely identified daily</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurant Partners</h3>
              <p className="text-gray-600">Trusted restaurant partnerships</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#9C27B0'}}>
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMember1 from '../assets/TeamMember1.jpg';
import TeamMember2 from '../assets/TeamMember2.png';
import TeamMember3 from '../assets/TeamMember3.jpg';
import TeamMember4 from '../assets/TeamMember4.jpg';
import TeamMember5 from '../assets/TeamMember5.jpg';

const Team = () => {
  const navigate = useNavigate();
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Oshadha Samarasinghe",
      role: "Co-Founder & Full Stack Developer",
      image: TeamMember1,
      email: "oshadakaveensamarasinghe@gmail.com",
      contact: "+94 766392356",
      socials: {
        facebook: "https://www.facebook.com/share/1FByDorFF5/",
        instagram: "https://www.instagram.com/oshadhaa_k?utm_source=qr&igsh=MXA0d2twaG82bXc2bQ==",
        linkedin: "https://www.linkedin.com/in/oshadha-samarasinghe",
        x: "https://x.com/oshadhaaa_k?t=rzR0sHJaBHRn2K90HfCIyQ&s=09"
      },
      speciality: "Full Stack Development"
    },
    {
      id: 2,
      name: "Yulani Alwis",
      role: "Co-Founder & Full Stack Developer",
      image: TeamMember2,
      email: "yulani.alwis0@gmail.com",
      contact: "+94 76 21 2199",
      socials: {
        facebook: "https://web.facebook.com/profile.php?id=61560083260779",
        linkedin: "https://www.linkedin.com/in/yulani-alwis",
        instagram: "https://www.instagram.com/_yula_a"
      },
      speciality: "Team Leadership"
    },
    {
      id: 3,
      name: "Liviru Navaratna",
      role: "Co-Founder & Full Stack Developer",
      image: TeamMember5,
      email: "livirunavaratna@gmail.com",
      contact: "+94 71 104 7585",
      socials: {
        linkedin: "https://www.linkedin.com/in/liviru-navaratna"
      },
      speciality: "Mobile App Development"
    },
    {
      id: 4,
      name: "Malmi Nayanaransi",
      role: "Co-Founder & Full Stack Developer",
      image: TeamMember3,
      email: "malmi.dja@gmail.com",
      contact: "+94 703793745",
      socials: {
        linkedin: "https://linkedin.com/in/malmioshadhi"
      },
      speciality: "Mobile App Development"
    },
    {
      id: 5,
      name: "Pubudu Perera",
      role: "Co-Founder & Full Stack Developer",
      image: TeamMember4,
      email: "pubupere32@gmail.com",
      contact: "+94 70 455 6426",
      socials: {
        linkedin: "https://www.linkedin.com/in/pubudu-perera-se",
        facebook: "https://www.facebook.com/profile.php?id=100072106973465"
      },
      speciality: "Reasearch & Data Analysis"
    }
  ];

  const getSocialIcon = (platform) => {
    const icons = {
      facebook: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.534l.002.001-.283-.342c-.315-.38-.506-.869-.506-1.401 0-.532.191-1.021.506-1.401l.283-.342c.757-.938 1.908-1.534 3.205-1.534s2.448.596 3.205 1.534l.283.342c.315.38.506.869.506 1.401 0 .532-.191 1.021-.506 1.401l-.283.342c-.757.938-1.908 1.534-3.207 1.534zm7.101 0c-1.297 0-2.448-.596-3.205-1.534l-.283-.342c-.315-.38-.506-.869-.506-1.401 0-.532.191-1.021.506-1.401l.283-.342c-.757-.938 1.908-1.534 3.205-1.534s2.448.596 3.205 1.534l.283.342c.315.38.506.869.506 1.401 0 .532-.191 1.021-.506 1.401l-.283.342c-.757.938-1.908 1.534-3.205 1.534z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      x: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    };
    return icons[platform] || null;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{color: '#2196F3'}}>
              Meet Our <span style={{color: '#38C558'}}>Expert Team</span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                We're a passionate group of co-founders and full-stack developers united by our mission to make 
                food allergy management safe, simple, and accessible for everyone around the world.
              </p>
              <div className="inline-block px-8 py-3 rounded-full" style={{backgroundColor: '#2196F3'}}>
                <p className="text-white font-semibold text-lg">🔰 One Team • ✅ One Vision • 🌍 Global Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives <span style={{color: '#2196F3'}}>Our Team</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#2196F3'}}>
                <span className="text-white text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push the boundaries of technology to create solutions that truly make a difference.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Our diverse backgrounds and skills combine to create something greater than the sum of our parts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#FF6B6B'}}>
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code we write is driven by our commitment to saving lives and improving experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              The <span style={{color: '#38C558'}}>AllergiMate</span> Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five talented developers who came together with a shared vision of making food allergies manageable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transition duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg">{member.speciality}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="font-semibold mb-3" style={{color: '#2196F3'}}>{member.role}</p>
                    <div className="w-16 h-1 rounded-full" style={{backgroundColor: '#38C558'}}></div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#E3F2FD'}}>
                        <svg className="w-4 h-4" style={{color: '#2196F3'}} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-blue-600 transition duration-200 text-sm">
                        {member.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#E8F5E8'}}>
                        <svg className="w-4 h-4" style={{color: '#38C558'}} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <a href={`tel:${member.contact}`} className="text-gray-600 hover:text-green-600 transition duration-200 text-sm">
                        {member.contact}
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition duration-200 transform hover:scale-110"
                        style={{
                          backgroundColor: hoveredMember === member.id ? '#2196F3' : '#F3F4F6',
                          color: hoveredMember === member.id ? 'white' : '#6B7280'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#2196F3';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          if (hoveredMember !== member.id) {
                            e.target.style.backgroundColor = '#F3F4F6';
                            e.target.style.color = '#6B7280';
                          }
                        }}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20" style={{backgroundColor: '#2196F3'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Team By Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The collective experience and expertise that drives AllergiMate forward
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl font-bold">5</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Co-Founders</h3>
              <p className="text-blue-100 text-sm">United by vision</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Technologies</h3>
              <p className="text-blue-100 text-sm">Mastered collectively</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dedication</h3>
              <p className="text-blue-100 text-sm">To our mission</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#38C558'}}>
                <span className="text-white text-2xl font-bold">∞</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Passion</h3>
              <p className="text-blue-100 text-sm">For making a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🚀</span>
            <h2 className="text-4xl font-bold mb-6" style={{color: '#2196F3'}}>
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're always looking for passionate individuals who share our vision of making food allergies manageable. 
              Whether you're a developer, designer, or simply believe in our cause, there's a place for you.
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
              🔍 Explore Our Work
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

export default Team;
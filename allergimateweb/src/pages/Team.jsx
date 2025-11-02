import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-8" style={{color: '#2196F3'}}>
            Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Team page content coming soon...
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
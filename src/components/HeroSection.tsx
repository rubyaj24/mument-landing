import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 "></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🚀 The Future of Project Building
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Build What 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future </span>
              Demands
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform your ideas into reality with µment&apos;s powerful platform. 
              Kickstart your project building journey with cutting-edge tools and seamless workflows.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Register Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              onClick={() => { window.open('https://youtu.be/nTIIhYkslxQ?si=RFk3EeGwgd134uT1', '_blank'); }}>
                Watch<Image src="/mument-black.png" alt="µment Icon" width={48} height={32} className="inline-block ml-2" /> 1.0 Recap
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">40+</div>
                <div className="text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10">
                <Image
                  src="/hero-image.jpg"
                  alt="µment Platform"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Collaboration</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Real-time Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
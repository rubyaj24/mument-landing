import React from 'react'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full opacity-3 animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-white bg-opacity-20 text-black rounded-full text-sm font-medium mb-6">
          🎯 Ready to Get Started?
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join Hundreds of
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Successful </span>
          Teams
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Start building amazing projects with µment today. Experience the future of project development with our all-in-one platform designed for developers and teams.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-10 py-5 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Free Trial
          </button>
          <button className="px-10 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
            Schedule Demo
          </button>
        </div>
        
        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>30-days timespan</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Exclusive dashboard for daily updates</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Weekly and daily checkpoints</span>
          </div>
        </div>
        
        {/* Trust Elements */}
        <div className="mt-16 pt-12 border-t border-white border-opacity-20">
          <p className="text-blue-200 mb-6">Join 10,000+ developers who trust µment</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <span className="text-blue-100">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Build and deploy your projects in minutes, not hours. Our optimized workflow ensures maximum productivity."
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Create stunning interfaces with our pre-built components and design system. No design experience required."
    },
    {
      icon: "🔧",
      title: "Powerful Tools",
      description: "Access a comprehensive suite of development tools, from code editors to deployment pipelines."
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description: "Deploy to multiple regions with automatic scaling. Handle millions of users without breaking a sweat."
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Enterprise-grade security built in. Your data and applications are protected with industry-leading standards."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Work seamlessly with your team. Real-time collaboration, version control, and project management included."
    }
  ]

  return (
    <section id="features-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            ✨ Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make µment the preferred choice for developers and teams worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
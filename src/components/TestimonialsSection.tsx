import React from 'react'
// import Image from 'next/image'
import TrueFocus from './TrueFocus';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "µment transformed our development process. We went from idea to production in just 2 weeks!",
      author: "Sarah Chen",
      role: "CTO at TechStartup",
      avatar: "/image-placeholder.jpg",
      rating: 5
    },
    {
      quote: "The collaboration features are game-changing. Our remote team has never been more productive.",
      author: "Marcus Rodriguez",
      role: "Lead Developer at InnovateCorp",
      avatar: "/image-placeholder.jpg",
      rating: 5
    },
    {
      quote: "Best investment we made this year. The ROI was visible within the first month of using µment.",
      author: "Emily Johnson",
      role: "Product Manager at ScaleUp",
      avatar: "/image-placeholder.jpg",
      rating: 5
    }
  ]

  const stats = [
    { number: "100+", label: "Students" },
    { number: "40+", label: "Projects Delivered" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            💬 Testimonials
          </div>
          <TrueFocus
            sentence="Loved by Students of CET"
            manualMode={true}
            blurAmount={1}
            borderColor="blue"
            animationDuration={1}
            pauseBetweenAnimations={1}
        />
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Students </span>
            of CET
          </h2> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our community of µlearners are saying about their experience with µment.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-gray-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700">
              Izha
            </div>
            <div className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700">
              Dhamani
            </div>
            <div className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700">
              Detectra
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
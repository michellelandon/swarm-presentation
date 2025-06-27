import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'São Paulo, Brazil',
      role: 'Micro-entrepreneur',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'AI Swarm changed my life. I built a delivery app for my neighborhood in just 10 minutes. Now I earn $800 monthly helping local businesses reach customers.',
      rating: 5,
      app: 'Local Delivery Network'
    },
    {
      name: 'James Ochieng',
      location: 'Nairobi, Kenya',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'Without any coding knowledge, I created a water point management system for our village. It tracks usage and payments, serving 2,000 people daily.',
      rating: 5,
      app: 'Water Point Manager'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      role: 'Street Vendor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'My food ordering app connects me directly with customers. No middleman fees, just pure profit. I\'ve expanded from one cart to three locations.',
      rating: 5,
      app: 'Street Food Express'
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Lima, Peru',
      role: 'Farmer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'The crop management app I built helps me track harvests and connect with buyers. My income increased by 200% in the first year.',
      rating: 5,
      app: 'Farm Connect'
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'Cairo, Egypt',
      role: 'Artisan',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'I showcase and sell my handmade crafts globally through my app. What seemed impossible is now my reality, reaching customers worldwide.',
      rating: 5,
      app: 'Artisan Marketplace'
    },
    {
      name: 'David Nguyen',
      location: 'Ho Chi Minh City, Vietnam',
      role: 'Motorcycle Taxi Driver',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      quote: 'My ride-sharing app for motorcycles serves areas big companies ignore. I built a thriving business serving my community\'s unique needs.',
      rating: 5,
      app: 'Moto Connect'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Stories,
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how entrepreneurs worldwide are building successful businesses and transforming their communities with AI Swarm.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* App Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-700 mb-6">
                {testimonial.app}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are building thriving businesses with AI Swarm. Your journey to financial independence starts here.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
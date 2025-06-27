import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  Wallet
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Development',
      description: 'Advanced AI agents collaborate to build sophisticated applications without requiring coding expertise.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Every app is optimized for mobile devices, ensuring accessibility for users with basic smartphones.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Decentralized Infrastructure',
      description: 'Built on blockchain technology for transparency, security, and global accessibility.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wallet,
      title: 'Crypto-Native Payments',
      description: 'Integrated cryptocurrency payments bypass traditional banking requirements.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols protect user data and financial transactions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy applications globally in minutes, not months, with our automated infrastructure.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Marketplace',
      description: 'Share, discover, and monetize applications within our thriving ecosystem.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Real-time analytics help optimize app performance and user engagement.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'No-Code Platform',
      description: 'Visual drag-and-drop interface makes app creation accessible to everyone.',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with user-friendly design to make app development accessible to the global unbanked population.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import Head from '../components/Head'

const CafeDeal = () => {
    const deliverables = [
        {
            icon: '🎥',
            title: '3 Reels',
            description: 'High-quality Instagram reels showcasing your cafe, food, and ambiance'
        },
        {
            icon: '📸',
            title: 'Instagram Revamp',
            description: 'Complete Instagram profile makeover with cohesive branding and aesthetic'
        },
        {
            icon: '🗺️',
            title: 'Google Maps Revamp',
            description: 'Optimized Google Maps listing with professional photos and information'
        },
        {
            icon: '🌐',
            title: 'Static Website',
            description: 'Beautiful, responsive website to showcase your menu, location, and story'
        },
        {
            icon: '🔧',
            title: '6 Months Maintenance',
            description: 'Basic website maintenance and updates for half a year'
        },
        {
            icon: '🤝',
            title: 'Volunteering',
            description: 'Additional help and support as needed during the collaboration'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <Head
                title={`Cafe Deal — Lohitaksh Bisen`}
                description={`Cafe barter deal — digital transformation in exchange for stay and meals.`}
            />
            {/* Back Button */}
            <div className="container-custom px-6 mb-8">
                <Link to="/">
                    <motion.button
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        Back to Home
                    </motion.button>
                </Link>
            </div>

            <div className="container-custom px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <span className="text-8xl">☕</span>
                        </motion.div>
                        <h1 className="gradient-text mb-6">Cafe Owner? Let's Make a Deal!</h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            Exchange 10 days of food and stay for a complete digital transformation
                        </p>
                    </div>
                </ScrollReveal>

                {/* The Deal */}
                <ScrollReveal delay={0.2}>
                    <FloatingElement duration={8} yOffset={20}>
                        <div className="card bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 max-w-4xl mx-auto mb-20">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">The Barter Deal</h2>
                                <p className="text-xl text-gray-700">
                                    In exchange for <span className="font-bold text-orange-600">10 days of food and stay</span>, you get:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {deliverables.map((item, index) => (
                                    <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                                        <FloatingElement duration={6 + (index % 3)} yOffset={15} delay={index * 0.2}>
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="bg-white rounded-xl p-6 shadow-md"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="text-4xl">{item.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                            {item.title}
                                                            <HiCheckCircle className="text-green-500 w-5 h-5" />
                                                        </h3>
                                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </FloatingElement>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </FloatingElement>
                </ScrollReveal>

                {/* Why This Works */}
                <section className="mb-20">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why This Works</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                emoji: '💰',
                                title: 'Budget-Friendly',
                                description: 'Perfect for new cafes or those with limited marketing budgets'
                            },
                            {
                                emoji: '🤝',
                                title: 'Win-Win',
                                description: 'You get professional marketing, I get workspace and meals'
                            }
                        ].map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <FloatingElement duration={7 + index} yOffset={20}>
                                    <div className="card text-center">
                                        <div className="text-6xl mb-4">{item.emoji}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Requirements */}
                <section className="mb-20">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">What I Need</h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <FloatingElement duration={7} yOffset={15}>
                            <div className="card max-w-3xl mx-auto">
                                <ul className="space-y-4">
                                    {[
                                        'A comfortable place to stay for 10 days',
                                        'Daily meals (breakfast, lunch, and dinner)',
                                        'WiFi access for work',
                                        'Permission to photograph and film your cafe',
                                        'Collaboration on content strategy and branding'
                                    ].map((requirement, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <HiCheckCircle className="text-primary-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-lg">{requirement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </FloatingElement>
                    </ScrollReveal>
                </section>

                {/* CTA */}
                <ScrollReveal>
                    <div className="text-center">
                        <FloatingElement duration={8} yOffset={20}>
                            <div className="card bg-gradient-to-br from-primary-50 to-purple-50 border-2 border-primary-200 max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested?</h2>
                                <p className="text-gray-700 mb-6">
                                    Let's discuss how we can work together to grow your cafe's digital presence!
                                </p>
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary"
                                    >
                                        Get In Touch
                                    </motion.button>
                                </Link>
                            </div>
                        </FloatingElement>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default CafeDeal;

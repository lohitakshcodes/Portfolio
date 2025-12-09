import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import FloatingElement from '../components/FloatingElement';
import MouseParallax from '../components/MouseParallax';
import ScrollReveal from '../components/ScrollReveal';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <FloatingElement duration={8} yOffset={30} delay={0}>
                        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-300/30 to-purple-300/30 rounded-full blur-3xl" />
                    </FloatingElement>
                    <FloatingElement duration={10} yOffset={40} delay={1}>
                        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl" />
                    </FloatingElement>
                    <FloatingElement duration={12} yOffset={25} delay={2}>
                        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl" />
                    </FloatingElement>
                </div>

                <div className="container-custom px-6 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        {/* Greeting */}
                        <motion.div variants={fadeInUp} className="mb-4">
                            <span className="text-primary-600 font-semibold text-lg md:text-xl">
                                Hello, I'm
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={fadeInUp}
                            className="mb-6"
                        >
                            <FloatingElement duration={6} yOffset={15}>
                                <span className="gradient-text font-display font-bold">
                                    Lohitaksh Bisen
                                </span>
                            </FloatingElement>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.div variants={fadeInUp} className="mb-8">
                            <MouseParallax strength={10}>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium max-w-3xl mx-auto">
                                    I build websites!
                                </h2>
                            </MouseParallax>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
                        >
                            I am a tech student who likes making websites and solving algorithmic problems.
                        </motion.p>

                        {/* Available for Work Section */}
                        <motion.div variants={fadeInUp} className="mb-6">
                            <FloatingElement duration={8} yOffset={20}>
                                <div className="card bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 max-w-2xl mx-auto text-center">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-4 h-4 bg-green-500 rounded-full"
                                        />
                                        <h2 className="text-2xl font-bold text-gray-800">Available for Work</h2>
                                    </div>
                                    <p className="text-base text-gray-700 mb-4">
                                        Open to internships, freelance projects, and exciting opportunities!
                                    </p>
                                    <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-lg mb-4">
                                        <p className="text-gray-800 font-semibold mb-2">
                                            🏖️ Are you a cafe/hostel owner?
                                        </p>
                                        <p className="text-gray-700 text-sm mb-3">
                                            I have a special barter deal for you!
                                        </p>
                                        <Link to="/cafe-deal">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="btn-primary"
                                            >
                                                Click Here to Learn More
                                            </motion.button>
                                        </Link>
                                    </div>
                                    <Link to="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn-secondary"
                                        >
                                            Get In Touch
                                        </motion.button>
                                    </Link>
                                </div>
                            </FloatingElement>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Highlights Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-center mb-16 gradient-text">What I Do</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '💻',
                                title: 'Web Development',
                                description: 'Building responsive and performant web applications with modern technologies.'
                            },
                            {
                                icon: '🏆',
                                title: 'Competitive Programming',
                                description: 'Solving algorithmic challenges and participating in coding competitions.'
                            },
                            {
                                icon: '🚀',
                                title: 'Performance',
                                description: 'Optimizing applications for speed, accessibility, and user experience.'
                            }
                        ].map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <FloatingElement duration={6 + index} yOffset={15} delay={index * 0.5}>
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="card card-hover text-center"
                                    >
                                        <div className="text-6xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </motion.div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

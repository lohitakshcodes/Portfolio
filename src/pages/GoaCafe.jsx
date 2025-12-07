import { motion } from 'framer-motion';
import { HiArrowLeft, HiPlay } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
import Head from '../components/Head'

const GoaCafe = () => {
    const challenges = [
        {
            title: 'Limited Budget',
            description: 'Working with startup constraints while delivering professional quality content.',
            solution: 'Negotiated a creative barter deal: services in exchange for unlimited cafe access and meals.'
        },
        {
            title: 'Brand Identity',
            description: 'Creating a cohesive visual identity that captures the beachside vibe.',
            solution: 'Developed a warm, tropical color palette and consistent photography style.'
        },
        {
            title: 'Content Strategy',
            description: 'Building engagement from zero followers on social media.',
            solution: 'Created a content calendar with daily posts, stories, and reels showcasing the cafe experience.'
        }
    ];

    const testimonials = [
        {
            name: 'Cafe Owner',
            role: 'Founder, Goa Cafe',
            text: 'The branding and content strategy transformed our social media presence. We went from zero to thousands of engaged followers in just a few months!',
            avatar: '👨‍💼'
        },
        {
            name: 'Customer',
            role: 'Regular Visitor',
            text: 'I discovered this cafe through their Instagram. The photos and videos perfectly capture the amazing atmosphere and delicious food.',
            avatar: '👩'
        }
    ];

    const projectDetails = {
        duration: '6 months',
        role: 'Brand Designer & Content Creator',
        deliverables: ['Logo Design', 'Photography', 'Video Production', 'Social Media Management'],
        results: ['5000+ Instagram followers', '300% increase in foot traffic', 'Featured in local publications']
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <Head
                title={`Goa Cafe — Lohitaksh Bisen`}
                description={`Goa Cafe case study — branding, content and social growth.`}
            />
            {/* Back Button */}
            <div className="container-custom px-6 mb-8">
                <Link to="/projects">
                    <motion.button
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        Back to Projects
                    </motion.button>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container-custom px-6 mb-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-full mb-6"
                        >
                            Featured Case Study
                        </motion.div>
                        <h1 className="gradient-text mb-6">Goa Cafe</h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                            Complete branding and social media transformation for a beachside cafe
                        </p>
                    </div>
                </ScrollReveal>

                {/* Hero Image */}
                <ScrollReveal delay={0.2}>
                    <FloatingElement duration={8} yOffset={20}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
                            <div className="aspect-video bg-gradient-to-br from-orange-300 via-yellow-200 to-pink-300 flex items-center justify-center">
                                <span className="text-9xl">🏖️</span>
                            </div>
                            {/* Play button overlay for video */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer group"
                            >
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                    <HiPlay className="w-10 h-10 text-primary-600 ml-1" />
                                </div>
                            </motion.div>
                        </div>
                    </FloatingElement>
                </ScrollReveal>
            </section>

            {/* Project Overview */}
            <section className="container-custom px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal variant={slideInLeft}>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 gradient-text">The Project</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Goa Cafe is a vibrant beachside cafe that needed to establish its brand identity
                                and build a social media presence from scratch. The project involved creating a
                                complete visual identity, producing high-quality content, and developing a
                                strategic social media approach.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                What started as a simple photography project evolved into a comprehensive branding
                                and marketing partnership. The unique barter arrangement allowed for creative
                                freedom while building a mutually beneficial relationship.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Through consistent content creation and strategic posting, we successfully built
                                a strong online presence that translated into real-world foot traffic and customer
                                engagement.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant={slideInRight}>
                        <FloatingElement duration={7} yOffset={15}>
                            <div className="card">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Project Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                                        <p className="font-semibold text-gray-800">{projectDetails.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Role</p>
                                        <p className="font-semibold text-gray-800">{projectDetails.role}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Deliverables</p>
                                        <div className="flex flex-wrap gap-2">
                                            {projectDetails.deliverables.map((item) => (
                                                <span key={item} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Results</p>
                                        <ul className="space-y-2">
                                            {projectDetails.results.map((result) => (
                                                <li key={result} className="flex items-start gap-2">
                                                    <span className="text-green-500 mt-1">✓</span>
                                                    <span className="text-gray-700">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FloatingElement>
                    </ScrollReveal>
                </div>
            </section>

            {/* The Barter Deal Story */}
            <section className="container-custom px-6 mb-32">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <FloatingElement duration={8} yOffset={20}>
                            <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
                                <div className="text-center mb-6">
                                    <span className="text-6xl">🤝</span>
                                </div>
                                <h2 className="text-3xl font-bold text-center mb-6 gradient-text">The Barter Deal</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        When I first approached Goa Cafe, they were a new establishment with limited
                                        marketing budget but unlimited potential. Instead of a traditional client
                                        relationship, we created something unique.
                                    </p>
                                    <p>
                                        The deal was simple: I would provide comprehensive branding, photography,
                                        videography, and social media management services in exchange for unlimited
                                        access to the cafe and complimentary meals during my work sessions.
                                    </p>
                                    <p>
                                        This arrangement benefited both parties - they received professional marketing
                                        services they couldn't otherwise afford, and I gained a beautiful workspace,
                                        delicious food, and the freedom to create content without budget constraints.
                                    </p>
                                    <p className="font-semibold text-primary-700">
                                        The partnership lasted 6 months and resulted in a thriving social media presence
                                        and a significant increase in customer traffic.
                                    </p>
                                </div>
                            </div>
                        </FloatingElement>
                    </div>
                </ScrollReveal>
            </section>

            {/* Challenges & Solutions */}
            <section className="container-custom px-6 mb-32">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Challenges & Solutions</h2>
                </ScrollReveal>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {challenges.map((challenge, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <FloatingElement duration={7 + index} yOffset={15} delay={index * 0.3}>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="card border-l-4 border-primary-500"
                                >
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{challenge.title}</h3>
                                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                        <p className="text-sm font-semibold text-green-800 mb-1">Solution</p>
                                        <p className="text-gray-700">{challenge.solution}</p>
                                    </div>
                                </motion.div>
                            </FloatingElement>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="container-custom px-6 mb-32">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Gallery</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <ScrollReveal key={item} delay={index * 0.1}>
                            <FloatingElement duration={6 + (index % 3)} yOffset={15} delay={index * 0.15}>
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 flex items-center justify-center">
                                        <span className="text-6xl">
                                            {['☕', '🍰', '🥗', '🌅', '📸', '🎥'][index]}
                                        </span>
                                    </div>
                                </motion.div>
                            </FloatingElement>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="container-custom px-6 mb-32">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Testimonials</h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <FloatingElement duration={7 + index} yOffset={20}>
                                <div className="card">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-purple-400 flex items-center justify-center text-3xl">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                                </div>
                            </FloatingElement>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container-custom px-6">
                <ScrollReveal>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Interested in working together?</h2>
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
                </ScrollReveal>
            </section>
        </div>
    );
};

export default GoaCafe;

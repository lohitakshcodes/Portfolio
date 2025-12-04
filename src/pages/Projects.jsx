import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import { scaleIn } from '../utils/animations';

const Projects = () => {
    const projects = [
        {
            id: 'erp-system',
            title: 'College ERP System',
            description: 'Comprehensive ERP website for Maharashtra Institute of Technology, managing student records, faculty information, and administrative tasks.',
            image: '🏫',
            tags: ['React', 'Node.js', 'Database', 'ERP'],
            featured: true
        },
        {
            id: 'portfolio',
            title: 'Portfolio Website',
            description: 'Modern portfolio website with anti-gravity animations and smooth user experience.',
            image: '💼',
            tags: ['React', 'Framer Motion', 'Tailwind CSS'],
            featured: false
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-custom px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="gradient-text mb-6">My Projects</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A collection of my recent work and creative endeavors
                        </p>
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.1} variant={scaleIn}>
                            <FloatingElement duration={6 + (index % 3)} yOffset={15} delay={index * 0.2}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover="hover"
                                    className="card card-hover group cursor-pointer h-full relative overflow-hidden"
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Project Image/Icon */}
                                    <motion.div
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.1 }
                                        }}
                                        className="text-8xl mb-6 text-center"
                                    >
                                        {project.image}
                                    </motion.div>

                                    {/* Category */}
                                    <div className="text-primary-600 text-sm font-semibold mb-2">
                                        {project.category}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <motion.div
                                        variants={{
                                            rest: { opacity: 0 },
                                            hover: { opacity: 1 }
                                        }}
                                        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 pointer-events-none"
                                    />
                                </motion.div>
                            </FloatingElement>
                        </ScrollReveal>
                    ))}
                </motion.div>


            </div>
        </div>
    );
};

// Add React import for useState
import React from 'react';

export default Projects;

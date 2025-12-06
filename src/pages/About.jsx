import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import { slideInLeft, slideInRight } from '../utils/animations';
import {
    FaReact, FaNodeJs, FaPython, FaFigma, FaGitAlt,
    FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs
} from 'react-icons/si';

import profileImage from '../assets/profile.jpeg';

const About = () => {
    const skills = [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    ];

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science',
            institution: 'Maharashtra Institute of Technology',
            year: '2024-2028',
            description: 'Focused on software engineering, algorithms, and web development.'
        },
    ];

    const interests = [
        { emoji: '✈️', title: 'Travelling', description: 'Exploring new places' },
        { emoji: '🏔️', title: 'Trekking', description: 'Adventure in the mountains' },
        { emoji: '💻', title: 'Coding', description: 'Building cool stuff' },
        { emoji: '⚽', title: 'Football', description: 'Playing and watching' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-custom px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <h1 className="gradient-text mb-6">About Me</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A passionate developer dedicated to creating meaningful digital experiences
                        </p>
                    </div>
                </ScrollReveal>

                {/* Bio Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                    <ScrollReveal variant={slideInLeft}>
                        <FloatingElement duration={8} yOffset={20}>
                            <div className="relative">
                                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-400 via-purple-400 to-pink-400 p-1 shadow-2xl overflow-hidden">
                                    <img
                                        src={profileImage}
                                        alt="Lohitaksh Bisen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating accent */}
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-xl opacity-60"
                                />
                            </div>
                        </FloatingElement>
                    </ScrollReveal>

                    <ScrollReveal variant={slideInRight}>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Hi, I'm <span className="gradient-text">Lohitaksh Bisen</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                I’m Lohitaksh Bisen, a computer science student and web developer who loves turning ideas into clean, fast websites and small web apps. I enjoy working with React, Tailwind CSS, and modern tooling to build interfaces that feel simple for users and satisfying for developers.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Outside of classes, most of my learning happens through real projects—personal experiments, hackathons, and now a Goa cafe barter project where I help local businesses with websites, Instagram, and Google Maps in exchange for stay and experiences. I’m especially interested in working with small teams, cafes, and early-stage startups that want a developer who can think about both design and logic.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Skills Section */}
                <section className="mb-32">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Skills & Technologies</h2>
                        <p className="text-center text-gray-600 mb-12">
                            Tools and technologies I work with
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <ScrollReveal key={skill.name} delay={index * 0.05}>
                                <FloatingElement duration={5 + (index % 3)} yOffset={15} delay={index * 0.1}>
                                    <motion.div
                                        whileHover={{
                                            y: -10,
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0]
                                        }}
                                        className="card text-center group cursor-pointer"
                                    >
                                        <skill.icon className={`w-12 h-12 mx-auto mb-3 ${skill.color} transition-transform group-hover:scale-110`} />
                                        <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                                    </motion.div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-32">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {education.map((edu, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <FloatingElement duration={7 + index} yOffset={15}>
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="card border-l-4 border-primary-500"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                            <span className="text-primary-600 font-semibold">{edu.year}</span>
                                        </div>
                                        <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-gray-600">{edu.description}</p>
                                    </motion.div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Interests Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Interests & Hobbies</h2>
                        <p className="text-center text-gray-600 mb-12">
                            What I enjoy outside of coding
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {interests.map((interest, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <FloatingElement duration={6 + (index % 4)} yOffset={20} delay={index * 0.15}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -10, 10, 0]
                                        }}
                                        className="card text-center cursor-pointer"
                                    >
                                        <div className="text-5xl mb-3">{interest.emoji}</div>
                                        <h4 className="font-bold text-gray-800 mb-1">{interest.title}</h4>
                                        <p className="text-xs text-gray-600">{interest.description}</p>
                                    </motion.div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;

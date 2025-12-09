import { motion } from 'framer-motion';
import { HiDownload, HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import { fadeInUp } from '../utils/animations';

const Resume = () => {
    const experience = [];

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science',
            institution: 'Maharashtra Institute of Technology',
            period: '2024 - 2028',
            description: 'Pursuing undergraduate degree with a focus on core computer science concepts and modern web technologies.',
            gpa: 'Current Student'
        }
    ];

    const skills = {
        'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        'Backend': ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
        'Database': ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
        'Tools': ['Git', 'Docker', 'AWS', 'Figma', 'VS Code']
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-custom px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="gradient-text mb-6">Resume</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            My professional journey and qualifications
                        </p>

                        {/* Download Button */}
                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <HiDownload className="w-5 h-5" />
                            Download PDF
                        </motion.a>
                    </div>
                </ScrollReveal>

                {/* Experience Section */}
                <section className="mb-32">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-12">
                            <HiBriefcase className="w-8 h-8 text-primary-600" />
                            <h2 className="text-4xl font-bold gradient-text">Experience</h2>
                        </div>
                    </ScrollReveal>

                    {experience.length === 0 ? (
                        <ScrollReveal>
                            <FloatingElement duration={7} yOffset={20}>
                                <div className="card text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 max-w-2xl mx-auto">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">This is empty...</h3>
                                    <p className="text-lg text-gray-700">
                                        You can help in changing that haha 😄
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        (Looking for internships and opportunities!)
                                    </p>
                                </div>
                            </FloatingElement>
                        </ScrollReveal>
                    ) : (
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />

                            <div className="space-y-12">
                                {experience.map((job, index) => (
                                    <ScrollReveal key={index} delay={index * 0.2}>
                                        <FloatingElement duration={7 + index} yOffset={15} delay={index * 0.3}>
                                            <div className="relative pl-8 md:pl-20">
                                                {/* Timeline Dot */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    className="absolute left-0 md:left-6 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg"
                                                />

                                                <motion.div
                                                    whileHover={{ x: 10 }}
                                                    className="card"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                                                            <p className="text-primary-600 font-semibold">{job.company}</p>
                                                        </div>
                                                        <span className="text-gray-600 font-medium mt-2 md:mt-0">{job.period}</span>
                                                    </div>

                                                    <p className="text-gray-600 mb-4">{job.description}</p>

                                                    <div className="space-y-2">
                                                        <p className="text-sm font-semibold text-gray-700">Key Achievements:</p>
                                                        <ul className="space-y-1">
                                                            {job.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                                    <span className="text-green-500 mt-1">✓</span>
                                                                    <span>{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </FloatingElement>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Education Section */}
                <section className="mb-32">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-12">
                            <HiAcademicCap className="w-8 h-8 text-primary-600" />
                            <h2 className="text-4xl font-bold gradient-text">Education</h2>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-8 max-w-4xl">
                        {education.map((edu, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <FloatingElement duration={7 + index} yOffset={15}>
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="card border-l-4 border-purple-500"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                                                <p className="text-purple-600 font-semibold">{edu.institution}</p>
                                            </div>
                                            <span className="text-gray-600 font-medium mt-2 md:mt-0">{edu.period}</span>
                                        </div>

                                        <p className="text-gray-600 mb-3">{edu.description}</p>

                                        {edu.gpa && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">GPA:</span> {edu.gpa}
                                            </p>
                                        )}

                                        {edu.certifications && (
                                            <div className="mt-3">
                                                <p className="text-sm font-semibold text-gray-700 mb-2">Certifications:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.certifications.map((cert) => (
                                                        <span key={cert} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                                                            {cert}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </FloatingElement>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <ScrollReveal key={category} delay={index * 0.1}>
                                <FloatingElement duration={6 + index} yOffset={15} delay={index * 0.2}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="card"
                                    >
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillList.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-gray-800 rounded-lg font-medium cursor-default"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
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

export default Resume;

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import FloatingElement from '../components/FloatingElement';
import Head from '../components/Head'

const Contact = () => {
    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'lohitakshbisen@gmail.com',
            link: 'mailto:lohitakshbisen@gmail.com'
        },
        {
            icon: HiLocationMarker,
            label: 'Location',
            value: 'Pune, Maharashtra, India',
            link: null
        }
    ];

    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', url: 'https://github.com/lohitakshcodes', color: 'hover:text-gray-900' },
        { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/lohitakshbisen', color: 'hover:text-blue-600' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <Head
                title={`Contact — Lohitaksh Bisen`}
                description={`Get in touch with Lohitaksh Bisen — contact, email and socials.`}
                />
            <div className="container-custom px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="gradient-text mb-6">Get In Touch</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have a project in mind or just want to say hello? I'd love to hear from you!
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <ScrollReveal delay={0.2}>
                            <FloatingElement duration={7} yOffset={15}>
                                <div className="card">
                                    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Information</h2>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {contactInfo.map((info, index) => (
                                            <motion.div
                                                key={info.label}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className="flex flex-col items-center text-center"
                                            >
                                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                                                    {info.link ? (
                                                        <a
                                                            href={info.link}
                                                            className="text-gray-800 font-medium hover:text-primary-600 transition-colors"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-800 font-medium">{info.value}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </FloatingElement>
                        </ScrollReveal>

                        {/* Social Links */}
                        <ScrollReveal delay={0.4}>
                            <FloatingElement duration={7} yOffset={15} delay={1}>
                                <div className="card text-center">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect With Me</h3>

                                    <div className="flex justify-center gap-6">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-colors shadow-sm`}
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-8 h-8" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </FloatingElement>
                        </ScrollReveal>

                        {/* Availability */}
                        <ScrollReveal delay={0.6}>
                            <FloatingElement duration={7} yOffset={15} delay={2}>
                                <div className="card bg-gradient-to-br from-primary-50 to-purple-50 border-2 border-primary-200 text-center">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-3 h-3 bg-green-500 rounded-full"
                                        />
                                        <h3 className="text-xl font-bold text-gray-800">Available for Work</h3>
                                    </div>
                                    <p className="text-gray-600 max-w-xl mx-auto">
                                        I'm currently available for freelance projects and full-time opportunities.
                                        Let's create something amazing together!
                                    </p>
                                </div>
                            </FloatingElement>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

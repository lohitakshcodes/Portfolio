import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/lohitakshcodes',
            color: 'hover:text-gray-900'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/lohitakshbisen',
            color: 'hover:text-blue-600'
        },

        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:lohitakshbisen@gmail.com',
            color: 'hover:text-red-500'
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 glass-effect">
            <div className="container-custom px-6 py-12">
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -8,
                                scale: 1.2,
                            }}
                            whileTap={{ scale: 0.9 }}
                            className={`text-gray-600 ${social.color} transition-colors duration-300`}
                            aria-label={social.name}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                            >
                                <social.icon className="w-6 h-6" />
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
                />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                >
                    <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                        <span>© {currentYear} Portfolio. Made with</span>
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaHeart className="text-red-500 inline" />
                        </motion.span>
                        <span>by Lohitaksh</span>
                    </p>
                </motion.div>
            </div>

            {/* Floating background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-4 left-10 w-20 h-20 bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-4 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-xl"
                />
            </div>
        </footer>
    );
};

export default Footer;

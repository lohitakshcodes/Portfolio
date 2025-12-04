import { motion } from 'framer-motion';
import { floatAnimation } from '../utils/animations';

const FloatingElement = ({
    children,
    duration = 6,
    yOffset = 20,
    delay = 0,
    className = ''
}) => {
    const customFloat = {
        y: [0, -yOffset, 0],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }
    };

    return (
        <motion.div
            animate={customFloat}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;

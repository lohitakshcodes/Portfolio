import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '../utils/animations';

const ScrollReveal = ({
    children,
    variant = fadeInUp,
    delay = 0,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px"
    });

    const customVariant = {
        ...variant,
        visible: {
            ...variant.visible,
            transition: {
                ...variant.visible.transition,
                delay: delay
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariant}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;

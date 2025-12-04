import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MouseParallax = ({
    children,
    strength = 20,
    className = ''
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate normalized position (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            setMousePosition({ x, y });
        };

        // Throttle mouse move events
        let timeoutId;
        const throttledMouseMove = (e) => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    handleMouseMove(e);
                    timeoutId = null;
                }, 50);
            }
        };

        window.addEventListener('mousemove', throttledMouseMove);

        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: mousePosition.x * strength,
                y: mousePosition.y * strength,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MouseParallax;

// Reusable Framer Motion animation variants

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const slideInLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const slideInRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const floatAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export const hoverLift = {
    rest: {
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Easing functions
export const easing = {
    easeInOut: [0.6, -0.05, 0.01, 0.99],
    easeOut: [0.6, 0.04, 0.98, 0.335],
    easeIn: [0.6, 0.04, 0.98, 0.335],
    smooth: [0.43, 0.13, 0.23, 0.96]
};

// Page transition variants
export const pageTransition = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easing.easeOut
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3
        }
    }
};

export const DURATIONS = {
    enterFast: 0.3,
    enter: 0.6,
    enterSlow: 0.9,
    hover: 0.18,
};

export const EASE_PRIMARY = [0.22, 1, 0.36, 1];
export const EASE_EXIT = [0.4, 0, 0.2, 1];

export const STAGGER = {
    tight: 0.06,
    base: 0.12,
};

export const fadeOnly = (delay = 0, duration = DURATIONS.enter) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay, duration, ease: EASE_PRIMARY },
    },
    exit: {
        opacity: 0,
        transition: { duration: DURATIONS.enterFast, ease: EASE_EXIT },
    },
});

export const clipReveal = (delay = 0, duration = DURATIONS.enter) => ({
    hidden: {
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
    },
    visible: {
        opacity: 1,
        clipPath: 'inset(0 0 0% 0)',
        transition: { delay, duration, ease: EASE_PRIMARY },
    },
    exit: {
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
        transition: { duration: DURATIONS.enterFast, ease: EASE_EXIT },
    },
});

export const staggerContainer = (delay = 0.1, stagger = STAGGER.base) => ({
    hidden: {},
    visible: {
        transition: {
            delayChildren: delay,
            staggerChildren: stagger,
            ease: EASE_PRIMARY,
        },
    },
});

"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { SpotlightCard } from "./AnimatedSection";
import styles from "./Features.module.css";

const features = [
    {
        color: "red",
        title: "Instant Portfolio Expansion",
        description:
            "Immediately pitch and deliver new workshops on Agility, Trust, and Leadership — turning one launch into four new revenue streams.",
        icon: (
            <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
                <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
            </svg>
        ),
    },
    {
        color: "purple",
        title: "Unmatched Versatility (High ROI)",
        description:
            "A one-time purchase for life-long application. Use the same set to deliver impactful training across diverse industries and client types.",
        icon: (
            <svg viewBox="0 0 512 512" fill="currentColor" width="28" height="28">
                <path d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.39-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160z" />
            </svg>
        ),
    },
    {
        color: "green",
        title: "Logistics Made Simple",
        description:
            "Lightweight, portable, and minimal setup — focus on facilitating the session, not moving the furniture.",
        icon: (
            <svg viewBox="0 0 640 512" fill="currentColor" width="28" height="28">
                <path d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" />
            </svg>
        ),
    },
    {
        color: "yellow",
        title: "Expert Support Included",
        description:
            "Comes with comprehensive Facilitation Guides covering multiple learning outcomes, giving you the confidence to handle diverse client briefs instantly.",
        icon: (
            <svg viewBox="0 0 448 512" fill="currentColor" width="28" height="28">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
            </svg>
        ),
    },
    {
        color: "red",
        title: "Attractive Bundling and Pricing",
        description:
            "Number of sets can be configured as per your needs. Flexible kits designed to scale with your business.",
        icon: (
            <svg viewBox="0 0 320 512" fill="currentColor" width="28" height="28">
                <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z" />
            </svg>
        ),
    },
];

const colorMap: Record<string, { accent: string; bg: string; glow: string; spotlight: string }> = {
    red: { accent: "var(--red)", bg: "rgba(239, 64, 96, 0.07)", glow: "rgba(239, 64, 96, 0.15)", spotlight: "rgba(239, 64, 96, 0.05)" },
    purple: { accent: "var(--purple)", bg: "rgba(124, 58, 237, 0.07)", glow: "rgba(124, 58, 237, 0.15)", spotlight: "rgba(124, 58, 237, 0.05)" },
    green: { accent: "var(--green)", bg: "rgba(5, 150, 105, 0.07)", glow: "rgba(5, 150, 105, 0.15)", spotlight: "rgba(5, 150, 105, 0.05)" },
    yellow: { accent: "var(--yellow)", bg: "rgba(217, 119, 6, 0.07)", glow: "rgba(217, 119, 6, 0.15)", spotlight: "rgba(217, 119, 6, 0.05)" },
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const colors = colorMap[feature.color];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className={styles.cardWrapper}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <SpotlightCard spotlightColor={colors.spotlight}>
                <div className={styles.card}>
                    {/* Colored top accent line */}
                    <motion.div
                        className={styles.accentLine}
                        style={{ background: colors.accent }}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.7, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <motion.div
                        className={styles.cardIcon}
                        style={{ background: colors.bg, color: colors.accent }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {feature.icon}
                    </motion.div>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <p className={styles.cardDesc}>{feature.description}</p>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}

export default function Features() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section className={styles.section} id="features" ref={sectionRef}>
            {/* Subtle background decoration */}
            <motion.div className={styles.bgDeco} style={{ y: bgY }}>
                <div className={styles.bgCircle1} />
                <div className={styles.bgCircle2} />
            </motion.div>

            <div className="container">
                <motion.div className={styles.header}>
                    {/* Gradient heading — colors match logo */}
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        What&rsquo;s Different about{" "}
                        <span className={styles.headingGradient}>this Collection</span>?
                    </motion.h2>



                    <motion.p
                        className={styles.subHeadingPink}
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        Expand Your Business, Lighten Your Load
                    </motion.p>

                    <motion.p
                        className={styles.bodyText}
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Four games, one purchase — designed to <strong>multiply your workshop offerings</strong>,
                        simplify your logistics, and give your clients fresh, high-impact experiences from day one.
                    </motion.p>
                </motion.div>

                {/* 3-col top row */}
                <div className={styles.grid}>
                    {features.slice(0, 3).map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </div>

                {/* 2-col bottom row */}
                <div className={styles.gridBottom}>
                    {features.slice(3).map((feature, i) => (
                        <FeatureCard key={i + 3} feature={feature} index={i + 3} />
                    ))}
                </div>
            </div>
        </section>
    );
}

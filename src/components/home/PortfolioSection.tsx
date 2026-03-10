import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import { portfolioProjects } from "@/data/portfolioData";

const PortfolioCard = ({ project, index }: { project: typeof portfolioProjects[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
            onClick={() => window.location.href = `/portfolio/${project.id}`}
        >
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col flex-grow">
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wide">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {project.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                </p>
            </div>
        </motion.div>
    );
};

/* ─── AI Grid Background (faint abstract grid) ─── */
const AIGridBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="portfolio-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolio-grid)" className="text-primary" />
        </svg>
    </div>
);

/* ─── Main Section ─── */
const PortfolioSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    /* Parallax transforms — disabled on mobile */
    const featuredY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -30]);
    const sideY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 25]);
    const bottomY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 15]);

    /* Background typography parallax */
    const bgX1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -80]);
    const bgX2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 60]);
    const bgX3 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -40]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.35, 0.35, 0.15]);

    return (
        <section
            ref={sectionRef}
            className="relative py-12 md:py-14 overflow-hidden"
            style={{ background: "linear-gradient(180deg, hsl(210 40% 98%) 0%, hsl(210 30% 96%) 50%, hsl(210 40% 98%) 100%)" }}
        >
            {/* AI Grid */}
            <AIGridBackground />

            {/* Background Typography */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    style={{ x: bgX1, opacity: bgOpacity }}
                    className="absolute top-16 -left-10 text-[8rem] md:text-[14rem] leading-none font-bold text-slate-300/25 whitespace-nowrap blur-[1px]"
                >
                    PORTFOLIO
                </motion.div>
                <motion.div
                    style={{ x: bgX2, opacity: bgOpacity }}
                    className="absolute top-1/2 -translate-y-1/2 -right-20 text-[7rem] md:text-[12rem] leading-none font-bold text-slate-300/20 whitespace-nowrap blur-[3px]"
                >
                    CASE STUDIES
                </motion.div>
                <motion.div
                    style={{ x: bgX3, opacity: bgOpacity }}
                    className="absolute bottom-16 left-10 text-[6rem] md:text-[10rem] leading-none font-bold text-slate-300/15 whitespace-nowrap blur-[2px]"
                >
                    AI PRODUCTS
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                {/* ─── Section Header ─── */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-5"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide">
                            MnT PROJECTS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.2] tracking-tight"
                    >
                        Take a look at the latest <br className="hidden md:block" />
                        <span className="text-[#2095F1]">Projects from MnT</span>
                    </motion.h2>
                </div>

                {/* ─── Projects Grid — Refactored to Horizontal Scroll ─── */}
                <div className="relative group/scroll">
                    <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth px-4 md:px-0">
                        {portfolioProjects.map((project, index) => (
                            <div key={project.id} className="flex-none w-[85vw] md:w-[400px] lg:w-[450px] snap-center">
                                <PortfolioCard project={project} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Add visual indicator for scroll on desktop */}
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-pulse">
                            <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                </div>

                {/* ─── Bottom CTA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-14 md:mt-20"
                >
                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#2095F1] text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group"
                    >
                        See All Our Projects
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;

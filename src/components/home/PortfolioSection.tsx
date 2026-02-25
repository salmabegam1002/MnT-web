import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ─── Portfolio Data ─── */
const projects = [
    {
        title: "AI Sales Workforce Platform",
        description: "Autonomous digital employees managing CRM pipelines.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Enterprise Knowledge AI",
        description: "Secure RAG-powered internal intelligence system.",
        category: "Enterprise",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Vision AI Quality Control",
        description: "Computer vision automation for manufacturing.",
        category: "Vision AI",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Smart Workflow Automation",
        description: "End-to-end business process orchestration.",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Generative AI Marketing Engine",
        description: "Brand-aligned content automation platform.",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    },
];

const PortfolioCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
        >
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <img
                    src={project.image}
                    alt={project.title}
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
                    {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
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
            className="relative py-20 md:py-28 overflow-hidden"
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
                        className="inline-block mb-6"
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects from MnT</span>
                    </motion.h2>
                </div>

                {/* ─── Projects Grid ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.slice(0, 3).map((project, index) => (
                        <PortfolioCard key={index} project={project} index={index} />
                    ))}
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
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 group"
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

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, useInView } from "framer-motion";
import {
    ArrowUpRight, ArrowRight, Zap, Shield, BarChart3,
    HeartPulse, Landmark, ShoppingCart, GraduationCap,
    Factory, Globe2, Briefcase, Activity, Rocket,
    MessageSquare, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// --- Components ---

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        const numericMatch = value.match(/(\d+)/);
        if (!numericMatch) return;
        const target = parseInt(numericMatch[0], 10);
        let startTime: number;
        let animationFrame: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplayValue(Math.floor(easedProgress * target));
            if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [value, duration, isInView]);

    return (
        <span ref={nodeRef}>
            {displayValue === 0 && !isInView ? "0" : displayValue}
            {value.replace(value.match(/(\d+)/)?.[0] || "", "")}
        </span>
    );
};

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

const PortfolioCard = ({ project, index }: { project: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
        >
            <div className="relative overflow-hidden aspect-[4/3] w-full">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black bg-primary/10 text-primary uppercase tracking-widest">
                        {project.category || project.industry}
                    </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {project.impact || project.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    VIEW CASE STUDY <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

const PortfolioHero = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent_70%)]" />

                {/* Floating Keywords */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <div className="grid grid-cols-2 gap-x-64 gap-y-32 text-6xl font-display font-bold">
                        <motion.span animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>ROI</motion.span>
                        <motion.span animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>SCALE</motion.span>
                        <motion.span animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }}>IMPACT</motion.span>
                        <motion.span animate={{ y: [0, 25, 0] }} transition={{ duration: 8, repeat: Infinity }}>RESULTS</motion.span>
                    </div>
                </div>
            </div>

            <div className="container-custom relative z-10 text-center">
                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center w-full"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                            PORTFOLIO
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Intelligence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Engineered.</span> Results Delivered.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl leading-relaxed mx-auto">
                            Explore how MnT is transforming enterprises through surgical AI implementations, high-stakes automation, and next-generation architectural protocols.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-2">
                            <button
                                onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-10 py-5 bg-enterprise-gradient text-white rounded-full font-bold text-sm tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                            >
                                VIEW CASE STUDIES
                            </button>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-5 border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                            >
                                SCHEDULE CONSULTATION <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-3xl"
                    >
                        {/* Light Sweep */}
                        <motion.div
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const PortfolioProjectsListing = () => {
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
    const bgX1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -80]);
    const bgX2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 60]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.35, 0.35, 0.15]);

    const allProjects = [
        {
            title: "Global Fintech Neural Core",
            industry: "Finance",
            impact: "Replaced 40 legacy processes with a unified AI orchestration engine.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "HealthConnect AI",
            industry: "Healthcare",
            impact: "Autonomous patient engagement platform handling 1M+ queries monthly.",
            image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "LogiSmart Ecosystem",
            industry: "Logistics",
            impact: "End-to-end supply chain optimization reducing last-mile friction.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Intelligent Supply Chain Logic",
            industry: "Logistics",
            impact: "100% elimination of human-error leakage within 60 days.",
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Enterprise Knowledge Brain",
            industry: "Enterprise",
            impact: "Decision speed increased by 400% across all departments.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Vision AI Quality Control",
            industry: "Manufacturing",
            impact: "Computer vision automation for manufacturing processes.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
        }
    ];

    return (
        <section id="featured-work" ref={sectionRef} className="py-12 bg-slate-50/50 relative overflow-hidden">
            {/* AI Grid */}
            <AIGridBackground />

            {/* Background Typography */}
            <div className="absolute inset-0 opacity-[0.03]">
                <motion.div
                    style={{ x: bgX1, opacity: bgOpacity }}
                    className="text-[10vw] font-display font-bold whitespace-nowrap"
                >
                    PORTFOLIO
                </motion.div>
                <motion.div
                    style={{ x: bgX2, opacity: bgOpacity }}
                    className="absolute bottom-10 -right-20 text-[7rem] md:text-[12rem] leading-none font-bold text-slate-300/20 whitespace-nowrap blur-[3px]"
                >
                    SUCCESS
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-2"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
                            SUCCESS STORIES
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Implementations</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {allProjects.map((project, i) => (
                        <PortfolioCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// const PortfolioMetrics = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const isInView = useInView(containerRef, { once: true, margin: "-100px" });

//     return (
//         <section ref={containerRef} className="py-24 bg-white relative">
//             <div className="container-custom relative z-10">
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//                     {[
//                         { value: "85%", label: "Efficiency Gain", icon: Zap },
//                         { value: "60%", label: "Cost Reduction", icon: Shield },
//                         { value: "10X", label: "ROI Growth", icon: BarChart3 },
//                         { value: "3ms", label: "Logic Latency", icon: Activity }
//                     ].map((stat, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                             transition={{ delay: i * 0.1 }}
//                             className="text-center group"
//                         >
//                             <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
//                                 <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
//                             </div>
//                             <div className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-2">
//                                 <Counter value={stat.value} />
//                             </div>
//                             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">
//                                 {stat.label}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             Decorative Glow
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-primary/5 blur-3xl opacity-50 pointer-events-none" />
//         </section>
//     );
// };

// const IndustryMarquee = () => {
//     const industries = [
//         { name: "Healthcare", icon: HeartPulse },
//         { name: "Finance", icon: Landmark },
//         { name: "Retail", icon: ShoppingCart },
//         { name: "Education", icon: GraduationCap },
//         { name: "Manufacturing", icon: Factory },
//         { name: "Enterprise SaaS", icon: Globe2 }
//     ];

//     return (
//         <div className="py-12 border-y border-slate-100 overflow-hidden bg-white/50 backdrop-blur-sm">
//             <motion.div
//                 animate={{ x: [0, -1000] }}
//                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                 className="flex whitespace-nowrap gap-20 items-center px-10"
//             >
//                 {[...industries, ...industries, ...industries].map((item, i) => (
//                     <div key={i} className="flex items-center gap-6 group">
//                         <item.icon className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" strokeWidth={1.5} />
//                         <span className="text-2xl font-display font-bold text-slate-200 group-hover:text-slate-900 transition-colors tracking-tight">
//                             {item.name}
//                         </span>
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// Consolidated into PortfolioProjectsListing

const PortfolioTestimonials = () => {
    const testimonials = [
        {
            quote: "The MnT neural core didn't just automate our sales; it redefined how we interact with global prospects with a level of intelligence we didn't think was possible yet.",
            author: "Sarah J. Chen",
            role: "CTO, Fintech Solutions",
            rating: 5
        },
        {
            quote: "Deploying MnT's health protocols reduced patient wait times by 40% while simultaneously increasing diagnostic accuracy across our provider network.",
            author: "Dr. Marcus Vane",
            role: "Operations Director, HealthConnect",
            rating: 5
        }
    ];

    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="text-center"
                        >
                            <div className="flex justify-center gap-1 mb-8">
                                {[...Array(testimonials[active].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                                ))}
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-display font-medium text-slate-900 mb-12 italic leading-relaxed">
                                "{testimonials[active].quote}"
                            </blockquote>
                            <div className="flex flex-col items-center">
                                <div className="font-bold text-slate-900">{testimonials[active].author}</div>
                                <div className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-bold">{testimonials[active].role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-4 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-12 h-1.5 rounded-full transition-all duration-500 ${active === i ? 'bg-primary w-20' : 'bg-slate-200'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const PortfolioCTA = () => {
    return (
        <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full opacity-40" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                        Ready to Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Success Story?</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
                        Let's architect the future of your enterprise operations with custom-engineered intelligence solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 bg-enterprise-gradient text-white rounded-full font-bold text-sm tracking-widest shadow-2xl shadow-primary/40 flex items-center gap-4 group"
                        >
                            START YOUR PROJECT
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-sm tracking-widest transition-colors flex items-center gap-4"
                        >
                            DOWNLOAD PORTFOLIO PDF
                            <Shield className="w-5 h-5 text-primary" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- Page Component ---

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative bg-white selection:bg-primary/10 overflow-hidden">
            <Navigation />

            <PortfolioHero />

            {/* <IndustryMarquee /> */}

            {/* <PortfolioMetrics /> */}

            <PortfolioProjectsListing />

            {/* <PortfolioTestimonials /> */}

            <PortfolioCTA />

            <Footer />
        </main>
    );
};

export default PortfolioPage;

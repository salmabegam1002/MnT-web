import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const products = [
    {
        id: "core",
        title: "iSuite AI",
        desc: "Centralized intelligence layer for process automation and decision support. Configurable workflows that adapt to your business rules.",
        image: "public/isuiteai.png",
        tags: ["Core", "AI", "Automation"]
    },
    {
        id: "analytics",
        title: "iSuite CRM",
        desc: "Predictive modeling and real-time visualization for high-stakes business data. Turn raw streams into actionable strategic insights.",
        image: "public/isuiteio.png",
        tags: ["Data", "Insight", "Predictive"]
    },
    {
        id: "connect",
        title: "iSuite HealthCare",
        desc: "Seamless integration framework for modern digital infrastructures. Bridge legacy systems with next-gen AI capabilities effortlessly.",
        image: "public/isuitehealth.png",
        tags: ["Integration", "Cloud", "Scalable"]
    },
    {
        id: "vision",
        title: "iSuite Education",
        desc: "Advanced computer vision models for quality control and security. Automated visual inspection with human-level accuracy at scale.",
        image: "public/isuiteedu.png",
        tags: ["Computer Vision", "Security", "ML"]
    }
];

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate tabs if user hasn't interacted recently
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setIsAutoPlaying(false);
    };

    return (
        <section id="products" className="relative py-4 md:py-8 bg-slate-80 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Header */}
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                        Our Suite
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
                        Tailored Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Business Need</span>
                    </h2>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-16 overflow-x-auto pb-2 no-scrollbar justify-center px-4">
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => handleTabClick(index)}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border whitespace-nowrap ${index === activeTab
                                ? "bg-enterprise-gradient text-white border-transparent shadow-md shadow-blue-500/10 scale-105"
                                : "bg-white text-slate-500 border-slate-200 hover:border-primary/30 hover:text-primary hover:bg-slate-50"
                                }`}
                        >
                            {product.title}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="min-h-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Left Content */}
                            <div className="order-2 lg:order-1 space-y-10 text-center lg:text-left">
                                <div className="relative">
                                    <div className="text-[100px] md:text-[120px] font-bold text-slate-200 leading-none absolute -top-16 lg:-top-20 left-1/2 lg:-left-6 -translate-x-1/2 lg:translate-x-0 -z-10 select-none opacity-50 blur-[0px]">
                                        {String(activeTab + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                        {products[activeTab].title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                        {products[activeTab].desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    {products[activeTab].tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest hover:bg-white hover:border-primary/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <a href="/products" className="group relative px-5 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                        Explore Solutions
                                        {/* <div className="px-5 py-3 bg-transparent border border-slate-300 text-slate-600 font-bold rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4 transition-transform" />
                                        </div> */}
                                    </a>
                                </div>
                            </div>

                            {/* Right Visual */}
                            <div className="order-1 lg:order-2">
                                <div className="relative aspect-[4/3] md:aspect-[16/10] group">
                                    <div className="h-full w-full rounded-3xl overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 z-10" />
                                        <img
                                            src={products[activeTab].image}
                                            alt={products[activeTab].title}
                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>

                                    {/* Subtle ambient glow behind image */}
                                    <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16 md:mt-24">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${activeTab === index ? "w-10 bg-primary" : "w-2 bg-slate-300 hover:bg-primary/50"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;

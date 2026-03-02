import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// --- Review Data ---
const reviewsRow1 = [
    {
        id: 1,
        name: "Saman Malik",
        role: "Customer Support Lead",
        company: "HealthTech Solutions",
        rating: 5,
        text: "The patient diagnostics AI developed by MnT has brought a level of precision that was previously unattainable. It's a fundamental shift in how we deliver care, ensuring our satisfaction.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Briana Patton",
        role: "Operations Manager",
        company: "Precision Systems",
        rating: 5,
        text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely. Incredible partnership overall.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Omar Raza",
        role: "CEO",
        company: "Smart Manufacturing",
        rating: 5,
        text: "The intuitive interface and powerful analytics have transformed how we make decisions. Real-time insights right at our fingertips.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Zainab Hussain",
        role: "Project Manager",
        company: "EduTech Innovations",
        rating: 5,
        text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient in deploying new features to our regional clients.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Farhan Siddiqui",
        role: "Marketing Director",
        company: "Retail Analytics",
        rating: 5,
        text: "Our business functions improved with a user-friendly design and positive customer feedback. MnT's approach to automation is simply unparalleled.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
];

const reviewsRow2 = [
    {
        id: 6,
        name: "Arjun Kannan",
        role: "Founder & CEO",
        company: "Kovai Precision",
        rating: 5,
        text: "MnT didn't just automate our manufacturing floor; they synchronized our entire production ecosystem with intelligence that thinks ahead of the curve.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Meena Lakshmi",
        role: "Operations Director",
        company: "Chennai HealthTech",
        rating: 5,
        text: "The healthcare diagnostics platform they built has scaled our operations significantly. Their team understands the nuances of enterprise healthcare in India.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Praveen Rajendran",
        role: "CTO",
        company: "Madurai Smart Mfg",
        rating: 5,
        text: "Implementing edge intelligence across our factory floors was a complex task. MnT delivered on time and exceeded our performance benchmarks.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "Divya Subramaniam",
        role: "Head of Strategy",
        company: "Trichy EduTech",
        rating: 5,
        text: "Bespoke intelligence at its best. MnT helped us modernize our digital infrastructure, making us the leaders in the regional EduTech space.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Santhosh Kumar",
        role: "Managing Partner",
        company: "Salem Retail Analytics",
        rating: 5,
        text: "Their retail analytics engine transformed how we view customer data. The efficiency gains in our Salem operations have been remarkable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const ClutchLogo = () => (
    <img src="src/assets/clutch.png" alt="Clutch" className="w-24 h-auto object-contain" />
);

const ScrollStyles = () => (
    <style>
        {`
            @keyframes scroll-left {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
            }
            .animate-scroll-left {
                animation: scroll-left var(--duration, 40s) linear infinite;
            }
            .animate-scroll-right {
                animation: scroll-right var(--duration, 40s) linear infinite;
            }
            .hover-pause:hover .animate-scroll-left,
            .hover-pause:hover .animate-scroll-right {
                animation-play-state: paused;
            }
        `}
    </style>
);

const RatingCard = ({ platform, rating, count, supportText }: { platform: 'google' | 'clutch', rating: string, count: string, supportText: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        className="flex-1 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 group overflow-hidden relative"
    >
        <div className="relative z-10 space-y-8">
            {/* Platform Logo */}
            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center p-4 shadow-sm group-hover:scale-105 transition-transform duration-500">
                {platform === 'google' ? <GoogleLogo /> : <ClutchLogo />}
            </div>

            <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-slate-800">{rating}</span>
                </div>

                {/* Reviews Count */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#111111] tracking-tight">
                    {count}
                </div>

                {/* Supporting Text */}
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                    {supportText}
                </p>
            </div>

            {/* Bottom Section: Avatars & Verification */}
            <div className="pt-8 border-t border-slate-100 flex items-center gap-6">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100 shadow-sm relative z-[i]">
                            <img src={`https://i.pravatar.cc/100?img=${platform === 'google' ? i + 10 : i + 20}`} alt="avatar" />
                        </div>
                    ))}
                </div>
                <div className="text-[12px] font-black text-primary/80 uppercase tracking-[0.2em]">
                    VERIFIED PARTNERS
                </div>
            </div>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 opacity-0 group-hover:opacity-40 transition-opacity rounded-full blur-3xl -mr-20 -mt-20" />
    </motion.div>
);

const TestimonialCard = ({ review }: { review: typeof reviewsRow1[0] }) => (
    <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100/60 shadow-[0_4px_24px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6 items-start h-full">
        <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
            ))}
        </div>
        <p className="text-[17px] md:text-[18px] text-slate-700 leading-relaxed font-medium">
            {review.text}
        </p>
        <div className="flex items-center gap-4 mt-auto pt-6">
            <img src={review.image} className="w-14 h-14 rounded-full object-cover shadow-sm border border-slate-50" alt={review.name} />
            <div>
                <div className="text-base md:text-[17px] font-bold text-slate-900 leading-tight">{review.name}</div>
                <div className="text-[13px] md:text-sm font-medium text-slate-500 mt-1">{review.role}</div>
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof reviewsRow1, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full group py-3 md:py-4 items-stretch hover-pause">
            <div
                className={`flex gap-6 md:gap-8 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} items-stretch`}
                style={{ '--duration': `${speed}s` } as React.CSSProperties}
            >
                <div className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-stretch">
                    {items.map((review, i) => (
                        <TestimonialCard key={`orig-${review.id}-${i}`} review={review} />
                    ))}
                </div>
                <div className="flex gap-6 md:gap-8 pr-6 md:pr-8 items-stretch">
                    {items.map((review, i) => (
                        <TestimonialCard key={`dup-${review.id}-${i}`} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TestimonialsPage = () => {
    return (
        <main className="bg-[#fafafa] selection:bg-primary/10 min-h-screen font-sans">
            <Navigation />
            <ScrollStyles />

            {/* Header Section */}
            <section className="pt-40 md:pt-48 pb-16 md:pb-12 overflow-hidden text-center flex flex-col items-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                >
                    Testimonials
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-display font-bold text-[#111111] mb-6 tracking-tight leading-[1.1]"
                >
                    What our <span className="text-[#2095F1]">users say</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-[21px] text-slate-500 max-w-2xl mx-auto font-medium"
                >
                    See what our customers have to say about us
                </motion.p>
            </section>

            {/* Rating Summary Section */}
            <section className="pb-24 px-4 container-custom">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <RatingCard
                        platform="google"
                        rating="4.9 / 5"
                        count="512+ Reviews"
                        supportText="Trusted by leading enterprise partners across the Tamil Nadu manufacturing, tech, and healthcare corridors."
                    />
                    <RatingCard
                        platform="clutch"
                        rating="4.8 / 5"
                        count="200+ Reviews"
                        supportText="Recognized for excellence in AI implementation and digital transformation for high-growth industrial sectors."
                    />
                </div>
            </section>

            {/* Carousel Section */}
            <section className="pb-32 md:pb-40 relative overflow-hidden">
                <div className="relative w-full overflow-hidden flex flex-col gap-2 md:gap-4 px-0">
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

                    {/* <div className="absolute inset-y-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 flex items-center justify-between z-20 pointer-events-none px-2 md:px-8 opacity-0 md:opacity-100">
                        <button className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#111111] text-white rounded-2xl flex items-center justify-center pointer-events-auto hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        <button className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#111111] text-white rounded-2xl flex items-center justify-center pointer-events-auto hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div> */}

                    <MarqueeRow items={reviewsRow1} direction="left" speed={70} />
                    <MarqueeRow items={reviewsRow2} direction="right" speed={80} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-28 md:py-32 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/10 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-[1.1] tracking-tight">
                            Let Your Success <br />
                            Story <span className="text-[#2095F1]">Begin Here</span>
                        </h2>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Join the ranks of the most innovative regional leaders scaling with bespoke intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                            <Link to="/contact" className="px-12 py-6 bg-[#2095F1] text-white rounded-full font-bold text-sm tracking-widest shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto">
                                SCHEDULE CONSULTATION
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TestimonialsPage;

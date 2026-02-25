import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
    Play, ArrowUpRight, Globe2, Activity, Shield,
    Star, ArrowRight, MousePointer2, Check
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// --- Data ---

// const testimonials = [
//     {
//         id: "arjun",
//         name: "Arjun Kannan",
//         role: "Founder & CEO",
//         company: "Kovai Precision Systems",
//         location: "Coimbatore, Tamil Nadu",
//         quote: "MnT didn't just automate our manufacturing floor; they synchronized our entire production ecosystem with intelligence that thinks ahead of the curve.",
//         impact: "68%",
//         impactLabel: "Manual Ops Reduction",
//         metric: "Reduced manual ops by 68%",
//         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
//         theme: "from-blue-600/20 to-teal-500/20"
//     },
//     {
//         id: "meena",
//         name: "Meena Lakshmi",
//         role: "Director of Operations",
//         company: "Chennai HealthTech Solutions",
//         location: "Chennai, Tamil Nadu",
//         quote: "The patient diagnostics AI developed by MnT has brought a level of precision that was previously unattainable. It's a fundamental shift in how we deliver care.",
//         impact: "4X",
//         impactLabel: "Operational Scale",
//         metric: "Scaled operations 4X",
//         image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
//         theme: "from-purple-600/20 to-blue-500/20"
//     },
//     {
//         id: "praveen",
//         name: "Praveen Rajendran",
//         role: "CTO",
//         company: "Madurai Smart Manufacturing Pvt Ltd",
//         location: "Madurai, Tamil Nadu",
//         quote: "Implementing MnT's edge intelligence transformed our legacy Madurai facility into a world-class smart factory. The real-time decision speed is incredible.",
//         impact: "60%",
//         impactLabel: "Decision Speed Gain",
//         metric: "Improved decision speed by 60%",
//         image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//         theme: "from-emerald-600/20 to-blue-500/20"
//     },
//     {
//         id: "divya",
//         name: "Divya Subramaniam",
//         role: "Head of Digital Strategy",
//         company: "Trichy EduTech Innovations",
//         location: "Tiruchirappalli, Tamil Nadu",
//         quote: "Our engagement rates across rural Tamil Nadu soared after integrating MnT's personalized learning algorithms. They truly understand regional digital needs.",
//         impact: "250%",
//         impactLabel: "Engagement Growth",
//         metric: "Engagement increased 2.5X",
//         image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
//         theme: "from-orange-600/10 to-red-500/10"
//     }
// ];

// // --- Components ---

// const MeshBackground = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Core Radial Glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.12),transparent_70%)]" />

//         {/* Animated Orbs */}
//         <motion.div
//             animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.3, 0.5, 0.3],
//                 x: [-30, 30, -30],
//                 y: [-20, 20, -20]
//             }}
//             transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//             className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[100px] rounded-full"
//         />
//         <motion.div
//             animate={{
//                 scale: [1.2, 1, 1.2],
//                 opacity: [0.2, 0.4, 0.2],
//                 x: [30, -30, 30],
//                 y: [20, -20, 20]
//             }}
//             transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-secondary/5 blur-[100px] rounded-full"
//         />

//         {/* Floating Particles */}
//         <div className="absolute inset-0 z-0">
//             {[...Array(20)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     className="absolute bg-primary/20 rounded-full blur-[1px]"
//                     animate={{
//                         y: [0, -120, 0],
//                         opacity: [0, 0.6, 0]
//                     }}
//                     transition={{
//                         duration: 6 + Math.random() * 6,
//                         repeat: Infinity,
//                         delay: Math.random() * 5
//                     }}
//                     style={{
//                         width: Math.random() * 3 + 1,
//                         height: Math.random() * 3 + 1,
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`
//                     }}
//                 />
//             ))}
//         </div>
//     </div>
// );

// const StorySection = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
//     const sectionRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"]
//     });

//     const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
//     const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
//     const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//     return (
//         <section ref={sectionRef} className="relative min-h-screen flex items-center py-32 overflow-hidden bg-white">
//             {/* Background Metric Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] pointer-events-none select-none">
//                 <motion.span
//                     style={{ y: textY }}
//                     className="text-[40vw] font-black tracking-tighter text-slate-900 whitespace-nowrap"
//                 >
//                     {testimonial.impact}
//                 </motion.span>
//             </div>

//             <div className="container-custom relative z-10">
//                 <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
//                     {/* Image Area */}
//                     <motion.div
//                         style={{ opacity }}
//                         className={`relative flex justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
//                     >
//                         <motion.div
//                             style={{ y: imageY }}
//                             className="relative w-full max-w-lg aspect-square"
//                         >
//                             <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.theme} rounded-[4rem] blur-[60px] opacity-50`} />
//                             <div className="relative h-full w-full rounded-[4rem] overflow-hidden border border-slate-100 shadow-premium">
//                                 <img
//                                     src={testimonial.image}
//                                     alt={testimonial.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-slate-900/10" />
//                             </div>

//                             {/* Decorative Map Highlight (Abstract) */}
//                             <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20">
//                                 <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
//                                     <path d="M50 0 L100 50 L50 100 L0 50 Z" />
//                                 </svg>
//                             </div>
//                         </motion.div>
//                     </motion.div>

//                     {/* Content Area */}
//                     <motion.div
//                         style={{ y: textY, opacity }}
//                         className={`space-y-12 ${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}
//                     >
//                         <div className="space-y-4">
//                             <motion.div className={`h-1 w-20 bg-primary ${index % 2 !== 0 ? 'ml-auto' : ''}`} />
//                             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{testimonial.company}</span>
//                         </div>

//                         <motion.blockquote className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-slate-900 leading-[1.1] tracking-tight italic">
//                             "{testimonial.quote}"
//                         </motion.blockquote>

//                         <div className="space-y-2">
//                             <h4 className="text-2xl font-display font-bold text-slate-900">{testimonial.name}</h4>
//                             <p className="text-slate-500 font-medium tracking-wide">
//                                 {testimonial.role} <br />
//                                 <span className="text-primary/70">{testimonial.location}</span>
//                             </p>
//                         </div>

//                         <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
//                             <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
//                                 <div className="text-3xl font-display font-bold text-primary">{testimonial.impact}</div>
//                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonial.impactLabel}</div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const VideoThumb = ({ image, title, client }: { image: string, title: string, client: string }) => (
//     <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="relative group cursor-pointer"
//     >
//         <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all p-1">
//             <div className="w-full h-full rounded-full overflow-hidden relative">
//                 <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={title} />
//                 <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                     <Play className="w-8 h-8 text-white fill-white" />
//                 </div>
//             </div>
//         </div>
//         <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-all">
//             <div className="text-[9px] font-bold text-primary uppercase tracking-widest">{client}</div>
//             <div className="text-xs font-bold text-slate-900">{title}</div>
//         </div>
//     </motion.div>
// );

// const Counter = ({ value, label }: { value: string, label: string }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     return (
//         <div ref={ref} className="text-center space-y-2">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 className="text-4xl md:text-6xl font-display font-bold text-slate-900"
//             >
//                 {value}
//             </motion.div>
//             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{label}</div>
//         </div>
//     );
// };

// --- Review Data ---
const reviews = [
    {
        id: 1,
        name: "Arjun Kannan",
        role: "Founder & CEO",
        company: "Kovai Precision Systems",
        location: "Coimbatore, Tamil Nadu",
        rating: 5,
        text: "MnT's approach to industrial automation is unparalleled. They didn't just give us a tool; they redefined our entire workflow with AI. Exceptional partnership.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Meena Lakshmi",
        role: "Operations Director",
        company: "Chennai HealthTech Solutions",
        location: "Chennai, Tamil Nadu",
        rating: 5,
        text: "The healthcare diagnostics platform they built has scaled our operations significantly. Their team understands the nuances of enterprise healthcare in India.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Praveen Rajendran",
        role: "CTO",
        company: "Madurai Smart Manufacturing Pvt Ltd",
        location: "Madurai, Tamil Nadu",
        rating: 5,
        text: "Implementing edge intelligence across our factory floors was a complex task. MnT delivered on time and exceeded our performance benchmarks.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Divya Subramaniam",
        role: "Head of Digital Strategy",
        company: "Trichy EduTech Innovations",
        location: "Tiruchirappalli, Tamil Nadu",
        rating: 5,
        text: "Bespoke intelligence at its best. MnT helped us modernize our digital infrastructure, making us the leaders in the regional EduTech space.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Santhosh Kumar",
        role: "Managing Partner",
        company: "Salem Retail Analytics",
        location: "Salem, Tamil Nadu",
        rating: 5,
        text: "Their retail analytics engine transformed how we view customer data. The efficiency gains in our Salem operations have been remarkable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Karthik Raja",
        role: "Director",
        company: "Erode Agro-Tech Solutions",
        location: "Erode, Tamil Nadu",
        rating: 5,
        text: "Modernizing our supply chain with AI-powered forecasting has been a game changer for our agricultural distribution network across TN.",
        image: "https://images.unsplash.com/photo-1519085184658-7ad51bbf71c6?q=80&w=200&auto=format&fit=crop"
    }
];

const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-premium transition-all duration-500 group">
        <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                    <img src={review.image} className="w-full h-full object-cover" alt={review.name} />
                </div>
                <div>
                    <div className="text-base font-bold text-slate-900 leading-none mb-1.5">{review.name}</div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{review.company}</div>
                </div>
            </div>
            <div className="flex gap-0.5 pt-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-[#EFAB26] text-[#EFAB26]' : 'text-slate-200'}`} />
                ))}
            </div>
        </div>
        <p className="text-base text-slate-600 leading-relaxed italic group-hover:text-slate-900 transition-colors">
            "{review.text}"
        </p>
        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
            <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em]">{review.location}</span>
            <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400">Verified Partner</span>
            </span>
        </div>
    </div>
);

const TrustPanel = () => (
    <div className="lg:sticky lg:top-40 h-fit space-y-10 p-12 rounded-[3.5rem] bg-slate-50/50 border border-white backdrop-blur-sm shadow-premium">
        <div className="space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-white shadow-premium flex items-center justify-center border border-slate-100 mb-8 overflow-hidden group">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <GoogleLogo />
                </motion.div>
            </div>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-[#EFAB26] text-[#EFAB26]" />
                        ))}
                    </div>
                    <span className="text-xl font-bold text-slate-900">4.9 / 5</span>
                </div>
                <div className="text-5xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">512+ Reviews</div>
            </div>
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed text-lg">
                Trusted by leading enterprise partners across the Tamil Nadu manufacturing, tech, and healthcare corridors.
            </p>
        </div>

        <div className="pt-10 border-t border-slate-200/50">
            <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden bg-slate-100 shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="avatar" />
                        </div>
                    ))}
                </div>
                <div className="text-[12px] font-black text-primary uppercase tracking-[0.25em]">Verified Partners</div>
            </div>
        </div>
    </div>
);

// --- Page Component ---

const ControlledReviewScroller = ({ isPaused }: { isPaused: boolean }) => {
    return (
        <motion.div
            animate={isPaused ? {} : { y: [0, -1800] }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
            className="space-y-8 pt-20"
        >
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <ReviewCard key={`${review.id}-${i}`} review={review} />
            ))}
        </motion.div>
    );
};

const TestimonialsPage = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <main className="bg-white selection:bg-primary/10">
            <Navigation />

            {/* Hero Section */}
            {/* <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 overflow-hidden bg-white"> */}
            {/* <MeshBackground /> */}
            {/* <div className="container-custom relative z-10 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-[1px] bg-primary"
                            />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Voices of Transformation</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight"
                            >
                                <span className="block">Real Stories.</span>
                                <span className="text-enterprise-gradient bg-clip-text text-transparent italic animate-pulse">Real Impact.</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed font-medium"
                        >
                            Orchestrating architectural shifts and intelligent automation for Tamil Nadu's leading industrial and healthcare enterprises.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                        >
                            <Link to="/contact" className="px-10 py-5 bg-enterprise-gradient text-white rounded-full font-bold text-sm tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40 transition-all w-full sm:w-auto">
                                START YOUR AI JOURNEY
                            </Link>
                            <button className="px-10 py-5 border border-slate-200 text-slate-600 rounded-full font-bold text-sm tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 w-full sm:w-auto">
                                VIEW CASE STUDIES <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* Story Sections */}
            {/* <div className="relative">
                {testimonials.map((t, i) => (
                    <StorySection key={t.id} testimonial={t} index={i} />
                ))}
            </div> */}

            {/* Video Strip */}
            {/* <section className="py-32 bg-slate-50/50 overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Immersive Dialogues</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Direct From Our Partners</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                        <VideoThumb
                            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
                            client="Kovai Systems"
                            title="Precision Automation"
                        />
                        <VideoThumb
                            image="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=400&auto=format&fit=crop"
                            client="Chennai HealthTech"
                            title="AI Diagnostics"
                        />
                        <VideoThumb
                            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
                            client="Madurai Smart Mfg"
                            title="Edge Intelligence"
                        />
                    </div>
                </div>
            </section> */}

            {/* Wall of Proof - Scrolling Reviews Section */}
            <section className="py-40 bg-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />

                <div className="container-custom relative z-10">
                    {/* Section Heading */}
                    <div className="text-center mb-6 md:mb-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block"
                        >
                            Client Testimonials
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
                        >
                            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry Leaders</span>
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        {/* Left Side - Static Trust Panel */}
                        <div className="lg:col-span-5">
                            <TrustPanel />
                        </div>

                        {/* Right Side - Controlled Scrolling Testimonials */}
                        <div
                            className="lg:col-span-7 relative h-[700px] md:h-[800px] overflow-hidden px-4"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Gradient Masks for fade effects */}
                            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                            <ControlledReviewScroller isPaused={isPaused} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Metrics */}
            {/* <section className="py-32 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-24 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                            Tamil Nadu Enterprises <br /> Trust <span className="text-primary">MnT</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 max-w-6xl mx-auto">
                        <Counter value="120+" label="TN Clients" />
                        <Counter value="95%" label="Retention Rate" />
                        <Counter value="4.8/5" label="Satisfaction" />
                        <Counter value="60%" label="Efficiency Gain" />
                    </div>
                </div>
            </section> */}

            {/* Logo Marquee */}
            {/* <section className="py-24 border-y border-slate-100 bg-white overflow-hidden">
                <div className="flex space-x-20 items-center opacity-30 grayscale hover:grayscale-0 transition-all pr-20 animate-marquee">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex-shrink-0 flex items-center gap-20">
                            <span className="text-3xl md:text-4xl font-display font-black text-slate-300 hover:text-primary transition-colors cursor-pointer">KOVAI PRECISION</span>
                            <span className="text-3xl md:text-4xl font-display font-black text-slate-300 hover:text-primary transition-colors cursor-pointer">CHENNAI HEALTH</span>
                            <span className="text-3xl md:text-4xl font-display font-black text-slate-300 hover:text-primary transition-colors cursor-pointer">MADURAI SMART</span>
                            <span className="text-3xl md:text-4xl font-display font-black text-slate-300 hover:text-primary transition-colors cursor-pointer">TRICHY EDUTECH</span>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Final CTA */}
            <section className="relative py-28 md:py-28 bg-slate-950 overflow-hidden">
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
                            Story <span className="text-enterprise-gradient bg-clip-text text-transparent">Begin Here</span>
                        </h2>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                            Join the ranks of the most innovative regional leaders scaling with bespoke intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                            <Link to="/contact" className="px-12 py-6 bg-enterprise-gradient text-white rounded-full font-bold text-sm tracking-widest shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto">
                                SCHEDULE CONSULTATION
                            </Link>
                            {/* <Link to="/contact" className="px-12 py-6 border border-white/10 text-white rounded-full font-bold text-sm tracking-widest hover:bg-white/5 transition-all w-full sm:w-auto">
                                CONTACT OUR TEAM
                            </Link> */}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TestimonialsPage;

import { Bot, LineChart, Stethoscope, GraduationCap, Zap, Shield, Network, BarChart3, Globe2, Brain, MessageSquare, Database, ArrowRight, CheckCircle2, Workflow, Smartphone } from "lucide-react";
import React from 'react';

export interface ProductDetail {
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    features: {
        title: string;
        icon: any;
        description: string;
    }[];
    capabilities: {
        title: string;
        icon: any;
        description: string;
    }[];
    metrics: {
        metric: string;
        label: string;
        description: string;
    }[];
    useCases: {
        industry: string;
        scenario: string;
    }[];
    whyMnT: {
        title: string;
        description: string;
    }[];
}

export const productsData: Record<string, ProductDetail> = {
    "isuite-ai": {
        id: "isuite-ai",
        name: "iSuite AI",
        tagline: "Centralized Intelligence Layer",
        description: "A unified AI core designed to orchestrate enterprise-wide intelligence. iSuite AI acts as the brain of your digital infrastructure, coordinating autonomous agents and complex workflows with surgical precision.",
        image: "public/isuiteai.png",
        features: [
            { title: "Neural Orchestration", icon: Brain, description: "Coalesce multiple AI models into a single, high-performance decision engine." },
            { title: "Autonomous Workflows", icon: Zap, description: "Self-managing processes that adapt to real-time data shifts without human intervention." },
            { title: "Secure Data Mesh", icon: Shield, description: "Privately hosted intelligence that keeps your proprietary data within enterprise bounds." },
            { title: "Unified API Gateway", icon: Network, description: "Seamlessly connect iSuite AI to any legacy or modern application stack." }
        ],
        capabilities: [
            { title: "Predictive Decisioning", icon: BarChart3, description: "Anticipate market shifts and operational bottlenecks before they occur." },
            { title: "Natural Language Core", icon: MessageSquare, description: "Communicate with your enterprise data using sophisticated LLM protocols." },
            { title: "Automated Optimization", icon: Zap, description: "Continuously refines business logic based on performance feedback loops." }
        ],
        metrics: [
            { metric: "80%", label: "Manual Reduction", description: "Automated processing of routine operational decisions." },
            { metric: "4X", label: "Productivity Boost", description: "Increased output capacity with existing resources." },
            { metric: "60%", label: "Decision Speed", description: "Reduction in latency for critical business approvals." },
            { metric: "99.9%", label: "Uptime", description: "Mission-critical reliability for enterprise-grade deployments." }
        ],
        useCases: [
            { industry: "FINANCE", scenario: "Automated risk assessment and fraud detection in real-time transaction streams." },
            { industry: "MANUFACTURING", scenario: "Predictive maintenance orchestration across global factory assets." },
            { industry: "RETAIL", scenario: "Hyper-personalized customer journey mapping using real-time behavioral data." }
        ],
        whyMnT: [
            { title: "Architecture First", description: "We build systems, not just features. iSuite AI is engineered for long-term scalability." },
            { title: "Data Sovereignty", description: "Unlike public AI platforms, your data remains yours, fully protected and isolated." },
            { title: "Seamless Integration", description: "Designed to 'plug and play' with your existing enterprise infrastructure effortlessly." }
        ]
    },
    "isuite-crm": {
        id: "isuite-crm",
        name: "iSuite CRM",
        tagline: "Predictive Customer Intelligence",
        description: "Transform your customer relationships with AI-driven insights. iSuite CRM goes beyond traditional tracking, predicting customer needs and automating the entire sales funnel.",
        image: "public/isuiteio.png",
        features: [
            { title: "Lead Scoring AI", icon: BarChart3, description: "Rank leads based on their likelihood to convert using historical behavioral patterns." },
            { title: "Automated Outreach", icon: MessageSquare, description: "Autonomous agents that handle initial engagement and qualification 24/7." },
            { title: "Sentiment Analytics", icon: Brain, description: "Analyze customer communications to detect mood, urgency, and intent." },
            { title: "Dynamic Forecasting", icon: LineChart, description: "Real-time revenue predictions based on current pipeline velocity." }
        ],
        capabilities: [
            { title: "Persona Mapping", icon: Bot, description: "Automatically categorize customers into high-value personas for targeted marketing." },
            { title: "Churn Prediction", icon: Shield, description: "Identify at-risk accounts before they leave and trigger retention workflows." },
            { title: "Omnichannel Sync", icon: Globe2, description: "Unify customer data from email, chat, social, and phone into one brain." }
        ],
        metrics: [
            { metric: "45%", label: "Conversion Lift", description: "Higher win rates through intelligent lead prioritization." },
            { metric: "70%", label: "Auto-Qualification", description: "Leads qualified by AI agents before human handover." },
            { metric: "30%", label: "Churn Reduction", description: "Proactive identification of at-risk customer relationships." },
            { metric: "5X", label: "Pipeline Velocity", description: "Faster movement from initial contact to closed contract." }
        ],
        useCases: [
            { industry: "SaaS", scenario: "Automated onboarding and expansion identification for growing user bases." },
            { industry: "B2B SALES", scenario: "Intelligent account-based marketing orchestration for high-value targets." },
            { industry: "E-COMMERCE", scenario: "Personalized product recommendations that drive significant upsell revenue." }
        ],
        whyMnT: [
            { title: "Predictive Power", description: "We don't just show the past; we show you the future of your customer base." },
            { title: "Agentic Integration", description: "Directly uses MnT AI agents to handle the grunt work of sales and support." },
            { title: "Enterprise Scalability", description: "Proven to handle millions of customer records without performance degradation." }
        ]
    },
    "isuite-healthcare": {
        id: "isuite-healthcare",
        name: "iSuite Healthcare",
        tagline: "Intelligent Patient Outcomes",
        description: "Bridging the gap between clinical data and patient care. iSuite Healthcare uses specialized AI to streamline hospital management and enhance diagnostic accuracy.",
        image: "public/isuitehealth.png",
        features: [
            { title: "Diagnostic Support", icon: Stethoscope, description: "AI-assisted analysis of clinical reports and imaging for faster triage." },
            { title: "Patient Flow IQ", icon: Workflow, description: "Optimize bed management and staff allocation in real-time." },
            { title: "Secure EHR Bridge", icon: Shield, description: "HIPAA-compliant integration with existing electronic health records." },
            { title: "Remote Care Sync", icon: Smartphone, description: "Monitor patient vitals via connected devices with automated alerts." }
        ],
        capabilities: [
            { title: "Risk Stratification", icon: BarChart3, description: "Identify high-risk patients for proactive intervention and care management." },
            { title: "Automated Billing", icon: Database, description: "Reduce administrative overhead with AI-powered coding and claims processing." },
            { title: "clinical Research AI", icon: Brain, description: "Synthesize vast amounts of medical literature for evidence-based care." }
        ],
        metrics: [
            { metric: "25%", label: "Reduced Readmission", description: "Better post-discharge care melalui predictive monitoring." },
            { metric: "40%", label: "Admin Savings", description: "Reduction in manual documentation and billing cycles." },
            { metric: "15%", label: "Diagnostic Speed", description: "Faster initial triage with AI-assisted report screening." },
            { metric: "Zero", label: "Compliance Gaps", description: "Automated auditing to ensure 100% adherence to health regulations." }
        ],
        useCases: [
            { industry: "HOSPITALS", scenario: "Optimized emergency room triage and resource allocation during peak hours." },
            { industry: "TELEMEDICINE", scenario: "AI-driven symptom checkers that prepare doctors before the call starts." },
            { industry: "PHARMACEUTICALS", scenario: "Accelerated clinical trial recruitment through intelligent patient matching." }
        ],
        whyMnT: [
            { title: "Safety First", description: "Engineered with strict clinical guardrails to ensure patient safety always comes first." },
            { title: "Interoperability", description: "Speaks the language of legacy healthcare systems (HL7/FHIR) natively." },
            { title: "Privacy-Centric", description: "On-premise deployment options for the most sensitive medical data." }
        ]
    },
    "isuite-education": {
        id: "isuite-education",
        name: "iSuite Education",
        tagline: "Adaptive Learning Infrastructure",
        description: "The future of personalized education. iSuite Education uses AI to create custom learning paths and automate institutional administration at scale.",
        image: "public/isuiteedu.png",
        features: [
            { title: "Adaptive Curriculum", icon: GraduationCap, description: "Content that adjusts its complexity based on individual student performance." },
            { title: "AI Teaching Assistant", icon: Bot, description: "24/7 tutor that answers student queries and provides instant feedback." },
            { title: "Skill Gap Analysis", icon: BarChart3, description: "Identify precisely where students are struggling within a modular course." },
            { title: "Auto-Grading Core", icon: CheckCircle2, description: "Intelligent assessment engine for everything from simple quizzes to complex essays." }
        ],
        capabilities: [
            { title: "Engagement Tracking", icon: Zap, description: "Monitor student focus and participation levels to prevent dropout." },
            { title: "Library Intelligence", icon: GraduationCap, description: "Turn decades of academic archives into an interactive, queriable brain." },
            { title: "Institutional ROI", icon: LineChart, description: "Optimize administrative costs while improving overall student outcomes." }
        ],
        metrics: [
            { metric: "35%", label: "Score Improvement", description: "Higher average test results through personalized study paths." },
            { metric: "60%", label: "Dropout Reduction", description: "Proactive identification of at-risk students for early intervention." },
            { metric: "2X", label: "Staff Capacity", description: "Educators spend more time teaching and less time grading." },
            { metric: "90%", label: "Query Resolution", description: "Student questions answered instantly by AI teaching assistants." }
        ],
        useCases: [
            { industry: "UNIVERSITIES", scenario: "Automated administrative enrollment and personalized student support bots." },
            { industry: "EDTECH", scenario: "Hyper-personalized learning apps that adapt to global student demographics." },
            { industry: "CORP TRAINING", scenario: "Rapid upskilling of employees with AI-curated professional courses." }
        ],
        whyMnT: [
            { title: "Pedagogy Led", description: "Our AI is built on proven educational frameworks, not just tech trends." },
            { title: "Universal Access", description: "Supports multi-modal learning (voice, text, visual) for all student types." },
            { title: "Scalable Reach", description: "Deploy localized learning experiences to millions of students simultaneously." }
        ]
    }
};

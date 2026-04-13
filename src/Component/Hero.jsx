import React, { useState, useEffect } from "react";
import img2 from "../assets/191dd62a0da18955d808a8a8c771a3b6cd219d03.jpg";
import { MousePointerClick, Code2, Cloud, Smartphone, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router";

// Floating Particle Component
const FloatingParticle = ({ delay, duration, x, y, size }) => (
    <motion.div
        className="absolute rounded-full bg-indigo-400/20"
        style={{ width: size, height: size }}
        initial={{ x, y, opacity: 0 }}
        animate={{
            y: [y, y - 100, y],
            x: [x, x + 30, x - 30, x],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Animated Icon Card Component
const AnimatedIconCard = ({ icon: Icon, label, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, type: "spring" }}
        whileHover={{
            scale: 1.1,
            rotateY: 15,
            rotateX: -10,
            z: 50,
        }}
        whileTap={{ scale: 0.95 }}
        className={`relative bg-white/90 backdrop-blur-sm border-2 ${color} rounded-xl p-4 shadow-lg cursor-pointer transform-gpu`}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
        <div className="flex flex-col items-center gap-2">
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <Icon className="w-6 h-6 text-indigo-600" />
            </motion.div>
            <span className="font-semibold text-gray-800 capitalize">{label}</span>
        </div>
    </motion.div>
);

export default function Hero() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const yBackground = useTransform(scrollY, [0, 500], [0, -150]);
    const yContent = useTransform(scrollY, [0, 500], [0, -80]);
    const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 10 + 8,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section 
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0f172a]"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Gradient Orbs */}
            <motion.div 
                className="absolute top-20 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-3xl"
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    x: [0, -60, 0],
                    y: [0, -40, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <FloatingParticle key={particle.id} {...particle} />
            ))}

            {/* Background Image with Parallax */}
            <motion.div 
                className="absolute inset-0"
                style={{ y: yBackground }}
            >
                <img
                    src={img2}
                    alt="background"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1e1b4b]/70 to-[#312e81]/60" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20"
                style={{ y: yContent, opacity: opacityContent }}
            >
                <div className="grid lg:grid-cols-5 gap-12 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-3 text-white space-y-8 text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mt-10 bg-indigo-500/20 border border-indigo-400/30 rounded-full backdrop-blur-sm"
                        >
                            <motion.span 
                                className="w-2 h-2 bg-green-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className=" text-sm font-medium text-indigo-200">Transforming Ideas into Digital Excellence</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
                                <ReactTyped
                                    strings={[
                                        "Leverage next-generation digital solutions to stay ahead."
                                    ]}
                                    typeSpeed={40}
                                    showCursor={true}
                                    cursorChar="|"
                                />
                            </h1>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="text-lg md:text-xl text-gray-300 max-w-2xl"
                            >
                                We craft innovative web, mobile, and cloud solutions that drive growth and deliver exceptional user experiences.
                            </motion.p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate("/service")}
                                className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 rounded-xl font-semibold shadow-lg shadow-indigo-900/50 overflow-hidden group"
                            >
                                <span className="relative z-10">Explore Our Services</span>
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.2, duration: 0.6 }}
                            className="flex gap-8 justify-center lg:justify-start pt-4"
                        >
                            {[
                                { value: "100+", label: "Projects" },
                                { value: "50+", label: "Clients" },
                                { value: "99%", label: "Satisfaction" }
                            ].map((stat, index) => (
                                <motion.div 
                                    key={stat.label}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-center"
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div> */}
                    </motion.div>

                    {/* Right Side Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-2 relative flex justify-center lg:justify-end"
                        style={{ perspective: 1000 }}
                    >
                        {/* Floating glow effect behind card */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl blur-2xl"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <div className="relative w-80">
                            {/* Stacked background cards */}
                            <motion.div 
                                className="absolute top-6 left-6 w-full h-72 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 border border-indigo-300/50 rounded-2xl"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div 
                                className="absolute top-3 left-3 w-full h-72 bg-gradient-to-br from-indigo-300/50 to-purple-300/50 border border-indigo-400/50 rounded-2xl"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            />

                            {/* Main Card */}
                            <motion.div
                                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                                className="relative bg-gradient-to-br from-white/95 to-indigo-50/95 backdrop-blur-xl border-2 border-indigo-300/50 rounded-2xl p-6 shadow-2xl"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="space-y-4">
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-center mb-4"
                                    >
                                        <h3 className="text-lg font-bold text-gray-800">Our Services</h3>
                                        <p className="text-sm text-gray-500">What we offer</p>
                                    </motion.div>

                                    {/* Service Cards */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <AnimatedIconCard
                                            icon={Code2}
                                            label="Web Dev"
                                            delay={0.7}
                                            color="border-blue-400"
                                        />
                                        <AnimatedIconCard
                                            icon={Smartphone}
                                            label="Mobile"
                                            delay={0.9}
                                            color="border-purple-400"
                                        />
                                        <AnimatedIconCard
                                            icon={Cloud}
                                            label="Cloud"
                                            delay={1.1}
                                            color="border-cyan-400"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 1.3, type: "spring" }}
                                            whileHover={{ scale: 1.1, rotateY: 15 }}
                                            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-4 shadow-lg cursor-pointer flex flex-col items-center gap-2 text-white"
                                        >
                                            <MousePointerClick className="w-6 h-6" />
                                            <span className="font-semibold text-sm">& More</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
                        animate={{ borderColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.4)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-white rounded-full"
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mouse Follower Effect */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl z-0"
                style={{
                    x: mouseX - 160,
                    y: mouseY - 160,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 100 }}
            />
        </section>
    );
}
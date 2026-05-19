"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-300px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-8 border-b border-white/10 backdrop-blur-xl">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-black tracking-[0.3em]"
        >
          2LLSOFT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex items-center gap-10 text-sm text-zinc-400"
        >
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Services
          </a>

          <a href="#" className="hover:text-white transition">
            Projects
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[88vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs md:text-sm mb-8">
            Modern Software Company
          </p>

          <h1 className="text-6xl md:text-[170px] leading-none font-black tracking-[0.15em]">
            2LLSOFT
          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-zinc-400 text-lg md:text-2xl leading-relaxed">
            We create scalable, premium and high-performance digital
            experiences for modern businesses.
          </p>

          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-5">
            <button className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-white/10">
              Start Project
            </button>

            <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-full hover:bg-white/10 transition duration-300">
              Explore Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* Bottom Stats */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 pb-20">
        <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-5xl font-black">10+</h2>
          <p className="text-zinc-400 mt-3">
            Modern technologies integrated
          </p>
        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-5xl font-black">24/7</h2>
          <p className="text-zinc-400 mt-3">
            Stable infrastructure & support
          </p>
        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-5xl font-black">100%</h2>
          <p className="text-zinc-400 mt-3">
            Performance focused architecture
          </p>
        </div>
      </section>
    </main>
  );
}
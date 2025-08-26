import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Nisarga 👋
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Data Analyst • Researcher • Tutor
      </motion.p>
    </section>
  );
}

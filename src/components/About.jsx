import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 py-20 container mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I am a passionate Data Analyst and Researcher with experience in machine
        learning, code analysis, and tutoring students in programming. I love
        solving problems and building impactful projects.
      </motion.p>
    </section>
  );
}

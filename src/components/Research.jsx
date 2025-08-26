import { motion } from "framer-motion";

export default function Research() {
  const works = [
    "Code Clone Detection using LLMs",
    "Bengali Plagiarism Detection",
    "Retail Demand Forecasting",
  ];

  return (
    <section id="research" className="min-h-screen px-6 py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Research</h2>
      <ul className="space-y-4">
        {works.map((work, i) => (
          <motion.li
            key={i}
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {work}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

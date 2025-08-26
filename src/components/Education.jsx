import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    { year: "2021 - Present", degree: "B.Sc. in Computer Science", place: "XYZ University" },
    { year: "2018 - 2020", degree: "Higher Secondary", place: "ABC College" },
  ];

  return (
    <section id="education" className="min-h-screen px-6 py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {edu.map((e, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="text-gray-400">{e.place}</p>
            <span className="text-sm text-blue-400">{e.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Python", level: "90%" },
    { name: "React", level: "80%" },
    { name: "Machine Learning", level: "75%" },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="space-y-6">
        {skills.map((s, i) => (
          <div key={i}>
            <h3 className="font-medium">{s.name}</h3>
            <motion.div
              className="w-full bg-gray-700 rounded-full h-4"
              initial={{ width: 0 }}
              whileInView={{ width: s.level }}
              transition={{ duration: 1 }}
            >
              <div className="h-4 bg-blue-500 rounded-full"></div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

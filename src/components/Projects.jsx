import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Demand Prediction", img: "/project1.png", link: "#" },
    { title: "Plagiarism Detector", img: "/project2.png", link: "#" },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={p.img} alt={p.title} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <a href={p.link} className="text-blue-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

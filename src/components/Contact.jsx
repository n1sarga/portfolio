import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <motion.form
        className="max-w-xl mx-auto space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
        <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">Send</button>
      </motion.form>
    </section>
  );
}

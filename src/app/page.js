"use client"; // Required for Framer Motion and interactivity
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      
      {/* Navigation */}
      <nav className="flex justify-end space-x-6 mb-16 font-semibold">
        <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-600 transition-colors">About US</a>
        <a href="#events" className="hover:text-blue-600 transition-colors">Events</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact US</a>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="flex flex-col items-center text-center mb-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 bg-gray-200 border-2 border-gray-400 flex items-center justify-center mb-4 transform rotate-45">
          {/* Placeholder for the shield logo */}
          <span className="transform -rotate-45 font-bold">UU-CSC</span>
        </div>
        <h1 className="text-2xl font-bold mt-4 border-b-2 border-gray-300 pb-2">Line / Slogans Slogans</h1>
      </motion.section>

      {/* Events Placeholder */}
      <section id="events" className="mb-24 flex flex-col items-center">
        <div className="w-full max-w-4xl border-2 border-gray-800 p-6 rounded-lg h-64 flex items-center justify-center text-gray-500">
          Events Area Placeholder
        </div>
      </section>

      {/* Skills Placeholder */}
      <section id="skills" className="mb-24">
        <h2 className="text-xl font-bold mb-4">SKILL (we are providing)</h2>
        <div className="h-32 border-2 border-gray-400 border-dashed rounded flex items-center justify-center text-gray-500">
          Skills List Placeholder
        </div>
      </section>

      {/* About Placeholder */}
      <section id="about" className="mb-24">
        <h2 className="text-xl font-bold mb-4">About US</h2>
        <div className="h-32 border-2 border-gray-400 border-dashed rounded flex items-center justify-center text-gray-500">
          Short Paragraph Placeholder
        </div>
      </section>

      {/* Contact Placeholder */}
      <section id="contact" className="mb-24">
        <h2 className="text-xl font-bold mb-4">GET IN TOUCH</h2>
        <div className="h-64 border-2 border-gray-400 border-dashed rounded flex items-center justify-center text-gray-500">
          Contact Form Placeholder
        </div>
      </section>

    </div>
  );
}
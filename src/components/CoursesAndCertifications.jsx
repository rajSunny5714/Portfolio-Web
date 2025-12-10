import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
};

const CoursesAndCertifications = () => {
  const items = [
     {
      title: "ISC2 Certified Information Systems Security Professional (CISSP)",
      issuer: "Linkedin",
      year: "2025",
    },
    {
      title: "AWS Solution Architect",
      issuer: "Udemy",
      year: "2025",
    },
    {
      title: "Full Stack Java Development",
      issuer: "Udemy",
      year: "2025",
    },
    {
      title: "Geo Data Security and Cyber Security ",
      issuer: "IIRS/ISRO",
      year: "2025",
    },
    {
      title: "Java 8+ and Syntax",
      issuer: "Linkedin",
      year: "2025",
    },
    {
      title: "SQL & Database Management",
      issuer: "Udemy",
      year: "2025",
    },
    {
      title: "GIT (Version Control System)",
      issuer: "Linkedin",
      year: "2025",
    },
    {
      title: "Generative AI",
      issuer: "Linkedin",
      year: "2025",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl"
      >
        Courses & Certifications
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="border border-neutral-700 rounded-xl p-5 flex gap-4 items-start hover:bg-neutral-900 transition"
          >
            <FaCertificate className="text-4xl text-yellow-400" />
            <div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-neutral-400">{item.issuer}</p>
              <p className="text-neutral-500 text-sm">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesAndCertifications;
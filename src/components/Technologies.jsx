import React from 'react'
import { FaJava, FaShieldAlt, FaDocker } from "react-icons/fa";
import { RiReactjsLine } from 'react-icons/ri';
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { SiGoland, SiPython } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className='text-7xl text-red-500' />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoSpringBoot className='text-7xl text-green-500' />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-500' />
        </motion.div>

        <motion.div variants={iconVariants(2)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrMysql className='text-7xl text-blue-500' />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className='text-7xl text-yellow-500' />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className='text-7xl text-teal-500' />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className='text-7xl text-sky-500' />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaShieldAlt className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGoland className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
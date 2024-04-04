import { motion } from "framer-motion";
import React from "react";

type Props = {};
// https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg

const About = (props: Props) => {
  return (
    //@ts-ignore
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[350px] xl:w-[300px]"
        src="https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background.
        </h4>
        <p className="text-base">
          Hi, I am Aditya Sharma. I am a Full stack Web Developer. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const Projects = [
    {
      imgSrc: "",
      name: "Tripp Match",
      description:
        "This project is create using Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque id eligendi nesciunt quia. Obcaecati inventore perferendis error magni at aliquid non voluptatum, tenetur incidunt dolor quo. Accusamus, commodi minus?",
      link: "",
    },
    {
      imgSrc: "",
      name: "E-commerce Clone",
      description:
        "This E-commerce clone is create using Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque id eligendi nesciunt quia. Obcaecati inventore perferendis error magni at aliquid non voluptatum, tenetur incidunt dolor quo. Accusamus, commodi minus?",
      link: "",
    },
    {
      imgSrc: "",
      name: "Netflix",
      description:
        "This Netflix application is create using Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque id eligendi nesciunt quia. Obcaecati inventore perferendis error magni at aliquid non voluptatum, tenetur incidunt dolor quo. Accusamus, commodi minus?",
      link: "",
    },
    {
      imgSrc: "",
      name: "Voice Assistant Basde News Reading App",
      description:
        "This Voice Assistant Basde News Reading App is create using Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque id eligendi nesciunt quia. Obcaecati inventore perferendis error magni at aliquid non voluptatum, tenetur incidunt dolor quo. Accusamus, commodi minus?",
      link: "",
    },
    {
      imgSrc: "",
      name: "Tinder",
      description:
        "This Tinder application is create using Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque id eligendi nesciunt quia. Obcaecati inventore perferendis error magni at aliquid non voluptatum, tenetur incidunt dolor quo. Accusamus, commodi minus?",
      link: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="absolute top-14  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {Projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={
                "https://s3-alpha.figma.com/hub/file/2347704102/3637cce4-2243-4e80-8e1a-bee460f26784-cover.png"
              }
              alt=""
              height={500}
              width={500}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {Projects.length}: Netflix Clone
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                This Netflix clone is crated using Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cum cumque id eligendi nesciunt
                quia. Obcaecati inventore perferendis error magni at aliquid non
                voluptatum, tenetur incidunt dolor quo. Accusamus, commodi
                minus?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

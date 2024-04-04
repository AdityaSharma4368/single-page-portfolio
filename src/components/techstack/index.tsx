import React from "react";
import { motion } from "framer-motion";
import TechStackCard from "./techStackCard";

type Props = {};

const TechStack = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-ful px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
                TechStack
            </h3>

            <div className='w-full absolute top-32 flex space-x-5  overflow-x-scroll p-10 snap-x snap-mandatory'>
                <TechStackCard image='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' tech="React.js" />
                <TechStackCard image='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' tech="Next.js" />
                <TechStackCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" tech='Graphql'/>
                <TechStackCard image='https://hasura.io/brand-assets/hasura-icon-primary.png' tech="Hasura"/>
                <TechStackCard tech="FIREBASE" image="https://www.gstatic.com/devrel-devsite/prod/vab219352c525c8fb05bd0fd3ca06d9eb1d0a150a1bba4081d8880459dfe83504/firebase/images/touchicon-180.png"/>
            </div>


        </motion.div>
    )
}

export default TechStack
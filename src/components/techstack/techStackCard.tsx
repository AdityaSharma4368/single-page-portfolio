import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    image?:string;
    tech?:string;

}

const TechStackCard = ({image, tech}: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-40 h-32 xl:w-[200px] xl:h-[200px] object-contain'
                src={image}
                alt=""
            />
            <div className='px-0 md:px-10'>
                {/* <h4 className='text-4xl font-light'>NEXT.JS</h4> */}
                <p className='font-bold text-2xl mt-1'>{tech}</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" />
                    <img className='h-10 w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5G7RYV39P2_LmqRdA6u5m3gAIOstgjM56dbTmtLdfw&s" />
                    {/* <img className='h-10 w-10' src="" />
                    <img className='h-10 w-10' src="" />
                    <img className='h-10 w-10' src="" /> */}
                
                </div>
                {/* <p>
                    started... Ended
                </p> */}
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>
                    <li>Summary</li>

                </ul>
            </div>
        </article>
    )
}

export default TechStackCard
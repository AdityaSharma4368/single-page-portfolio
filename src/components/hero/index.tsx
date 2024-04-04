"use client"
import Link from 'next/link'
import React, { FC } from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './backgroundCircles'


type Props = {}

const Hero:FC = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["Hi, My Name is Aditya Sharma", "I am a Full Stack Developer", "<Loves to React />"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-40 w-40 mx-auto object-cover' src="https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>

                    <Link href="#about"><button className='heroButton'>About</button></Link>
                    <Link href="#technologies"><button className='heroButton'>Technologies</button></Link>
                    <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                    <Link href="#projects"><button className='heroButton'>Projects</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Hero
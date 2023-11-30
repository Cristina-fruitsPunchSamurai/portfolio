'use client'
import { useRef } from 'react';
import { useScroll } from "framer-motion"
import {motion} from 'framer-motion';
import Divider from './Divider';

export default function About() {
    const ref = useRef(null);
    const {scrollYProgress } = useScroll({
        target:ref,
        offset: ["0 1", "1.33 1"]
    });
    return (
        <>
        <motion.section
        style={{
            scale:scrollYProgress,
            opacity:scrollYProgress
        }}
        ref={ref}
        id='about'
        className='bg-zinc-900 md:px-20 px-8 py-10 mt-10 rounded mx-auto max-w-screen-sm'>
            <h3 className='text-3xl font-bold flex items-center justify-center mb-5'>About</h3>
            <p className='text-base md:text-base text-justify'>
                After 7 years working on digital marketing for innovative companies, I decided to change my career path and become a web developer 💪🏼
                <span className='font-bold'> ... But why?... </span>Because I want to always have something to learn, plus I really like solving problems and bring projects to life.
                Currently, my tech stack is based on JavaScript but I started learning Java and I open to learning new programming languages.
                Also, I&apos;m a big fan of React and I&apos;m currently learning Next.js and TypeScript. 🤓 <br/><br/>
                Something random about me, I&apos;m fluent in French, Spanish, English and I&apos;m a Japanese intermediate. I&apos;m fascinated by Japanese Edo period, mangas, animes and Japanese culture.
            </p>
        </motion.section>
        <Divider/>
        {/* <motion.section
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{delay: 0.125}}
        id='about'
        className='bg-zinc-900 md:px-20 px-8 py-10 mt-10 rounded mx-auto max-w-screen-sm'>
            <h3 className='text-3xl font-bold flex items-center justify-center mb-5'>About</h3>
            <p className='text-base md:text-base text-justify'>
                After 7 years working on digital marketing for innovative companies, I decided to change my career path and become a web developer 💪🏼
                <span className='font-bold'> ... But why?... </span>Because I want to always have something to learn, plus I really like solving problems and bring projects to life.
                Currently, my tech stack is based on JavaScript but I started learning Java and I open to learning new programming languages.
                Also, I&apos;m a big fan of React and I&apos;m currently learning Next.js and TypeScript. 🤓 <br/><br/>
                Something random about me, I&apos;m fluent in French, Spanish, English and I&apos;m a Japanese intermediate. I&apos;m fascinated by Japanese Edo period, mangas, animes and Japanese culture.
            </p>
        </motion.section>
        <Divider/> */}
        </>
    )
}

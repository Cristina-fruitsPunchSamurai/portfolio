
'use client'

import {useContext, useEffect} from 'react';
//my context
import { ActiveSectionContext } from '@/context/section-context';
//Scroll Nav with react-intersection-observer
import { useInView } from "react-intersection-observer";
import {skills} from '@/data/skills';
import { motion } from "framer-motion";
import { scrollActiveSection } from '@/utils/activeScrollContext';

export default function Skills() {
        //const{setIsActive} = useContext(ActiveSectionContext);

        const {ref,inView} = useInView({
        threshold: 0.75,
    });
    scrollActiveSection("Skills", ref, inView)
        // useEffect(() => {
        //     if (inView) {
        //         setIsActive("Skills");
        //     }
        // }, [inView, setIsActive])

    return (
        <>
        <section
        ref={ref}
        id="skills"
        className='mb-28 scroll-mt-28 md:w-[80%] mx-auto' >
            <h3 className='text-2xl font-bold flex items-center justify-center mb-8 uppercase'>Skills</h3>
            <p className='text-base flex items-center justify-center text-justify w-[90%] mx-auto leading-relaxed mb-8 px-5'>
            Currently my traning is based on JavaScript but I enjoy learning. That is why I'm always open to learn new technologies, I want to improve and become a better developer.
            I have an interest in front-end technologies like React, but thanks to my training this year I discovered the back-end through Node.js and I was really amazed by how much we can make dynamic web applications, for example, thanks to API REST.
            This year I will upgrade my learning by learning a new back-end programming language.
            </p>
            <div className='grid grid-cols-3 md:flex md:gap-8 gap-4 items-center justify-center w-[90%] mx-auto'>
                {skills.map((skill) => (
                    <motion.div
                    key={skill.id}
                    whileHover={{
                    scale: 1.3,
                    transition: { type: "spring", stiffness: 300 },
                    }}>
                    {skill.icon}
                </motion.div>
                ))}
            </div>
        </section>
        </>

    )
}

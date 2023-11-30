'use client'
import {skills} from '@/data/skills';
import { motion } from "framer-motion";
import Divider from './Divider';


export default function Skills() {
    return (
        <>
        <section id="skills" className='mt-20' >
            <h3 className='text-3xl font-bold flex mx-auto items-center justify-center mb-5'>Skills</h3>
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
        <Divider/>
        </>

    )
}

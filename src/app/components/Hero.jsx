
'use client'

import { useContext} from 'react';
//my context
import { ActiveSectionContext } from '@/context/section-context';
import { useScrollActiveSection } from '@/utils/activeScrollContext';
//Scroll Nav with react-intersection-observer
import {useInView} from 'react-intersection-observer';
import { TypeAnimation } from "react-type-animation";
import cris from "/public/photo-red.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {
    const{setIsActive} = useContext(ActiveSectionContext);

    const {ref} = useScrollActiveSection("Welcome", 0.2, setIsActive)

    return (
        <motion.section
        id="welcome"
        ref={ref}
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        className="md:py-16 md:px-20 px-10 mt-28 md:mt-16 scroll-mt-[100rem] mb-28">
            <div className="grid grid-cols-1 md:grid-cols-6 auto-cols-fr md:mt-10">
                <div className="md:col-start-1 md:col-end-4">
                    <div className="h-40 mt-5">
                    <h2 className="text-4xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r  from-primary-gradient via-secondary-gradient to-third-gradient bg-clip-text text-transparent">
                        Welcome I&apos;m {" "}
                    </span>
                    <br/>
                    <TypeAnimation
                    sequence={[
                    'Cristina',
                    1500,
                    'a Junior Web developer',
                    1500,
                    'a Fullstack JavaScript developer',
                    1500,
                    'looking for a apprenticeship',
                    1500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '0.7em'}}
                    repeat={Infinity}
                    />
                    </h2>
                    </div>
                    <p className="text-[#ADB7BE] text-base mb-6 lg:text-md w-full md:mt-8 leading-relaxed">
                        Hello 👋🏼 I&apos;m Cristina, a fulllstack JavaScript developer.
                        My goal is to continue learning more frameworks and langugages and become a better developer.
                        I&apos;m attracted to front-end libraries like React but I also enjoy working with Node.js.
                        I&apos;m currently looking for a apprenticeship in a company where I can learn and grow as a developer.
                    </p>
                </div>
                <div className="md:col-start-5 md:col-end-6 md:place-self-center md:self-center">
                    <Image
                    src={cris}
                    alt='Cristina profile picture'
                    width={300}
                    height={300}
                    className="hidden md:block rounded-full"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <a href="/CV-CristinaM.pdf" download>
                    <motion.button
                    className="flex justify-center rounded-full px-5 py-2 bg-gradient-to-r from-primary-gradient via-secondary-gradient to-third-gradient min-w-full"
                    whileHover={{
                        scale: 1.1,
                        boxShadow : "0px 0px 8px rgb(255, 255, 255)",
                        transition: { type: "spring", stiffness: 300 },
                        }}>
                        Download CV
                    </motion.button>
                </a>
                <Link href={"#contact"}>
                    <motion.button
                    className="flex justify-center rounded-full px-5 py-2 bg-gradient-to-r from-primary-gradient via-secondary-gradient to-third-gradient min-w-full"
                    whileHover={{
                        scale: 1.1,
                        boxShadow : "0px 0px 8px rgb(255, 255, 255)",
                        transition: { type: "spring", stiffness: 300 },
                        }}>
                    Contact me
                    </motion.button>
                </Link>
            </div>
        </motion.section>
    )
}

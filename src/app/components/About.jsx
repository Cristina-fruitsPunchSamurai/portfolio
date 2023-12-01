
'use client'

import { useContext, useEffect} from 'react';
//my context
import { ActiveSectionContext } from '@/context/section-context';
import Image from 'next/image';
import {motion} from 'framer-motion';
import woman from '/public/woman-code.png';
//Scroll Nav with react-intersection-observer
import { useInView } from 'react-intersection-observer';
import { scrollActiveSection } from '@/utils/activeScrollContext';

export default function About() {

    const {ref,inView} = useInView({
        threshold: 0.75,
    });

    scrollActiveSection("About", ref, inView)

    // const{setIsActive} = useContext(ActiveSectionContext);
    // const {ref,inView} = useInView({
    //     threshold: 0.75,
    // });

    // useEffect(() => {
    //     if (inView) {
    //         setIsActive("About");
    //     }
    // }, [inView, setIsActive])

    return (
        <>
        <motion.section
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{delay: 0.125}}
        ref={ref}
        id='about'
        className='bg-zinc-900 py-10 rounded mx-auto mb-28 scroll-mt-28'>
            <div className='md:w-[80%] mx-auto'>
                <h3 className='text-2xl font-bold flex items-center justify-center mb-8 uppercase'>About</h3>
                <div className='flex flex-col md:flex-row place-items-center justify-around w-full'>
                    <motion.div
                    initial={{y: 0}}
                    animate={{y: [-20, 20, -20]}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className='hidden md:block'>
                        <Image src={woman} width={320} alt="woman with a computer" />
                    </motion.div>
                    <p className='text-base md:text-base text-justify px-8 md:w-[50%] w-full'>
                        After 7 years working on digital marketing for innovative companies, I decided to change my career path and become a web developer. 💪🏼
                        And you may ask, <span className='font-bold'> "But why ?"...</span> well because I want to always have something to learn, plus I really like solving problems and bring projects to life.
                        Currently, my tech stack is based on JavaScript but I am open to learning new programming languages.
                        Also, I&apos;m a big fan of React and I&apos;m currently learning Next.js and TypeScript. 🤓 <br/><br/>
                        Something random about me, I&apos;m fluent in French, Spanish, English and I&apos;m a Japanese intermediate. I&apos;m fascinated by Japanese Edo period, mangas, animes and Japanese culture.
                    </p>
                </div>
            </div>
        </motion.section>
        </>
    )
}

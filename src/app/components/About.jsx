import React from 'react'

export default function About() {
    return (
        <section id='about' className='bg-zinc-900 px-10 py-10 rounded-xl flex flex-col mx-auto w-[90%] mb-10'>
            <h3 className='text-3xl font-bold flex mx-auto items-center justify-center mb-5'>About</h3>
            <p className='text-xs md:text-base text-justify'>
                After 7 years working on digital marketing for innovative companies, I decided to change my career path and become a web developer 💪🏼
                <span className='font-bold'> ... But why?... </span>Because I want to always have something to learn, plus I really like solving problems and bring projects to life. <br/><br/>
                Currently, my tech stack is based on JavaScript but I started learning Java and I open to learning new programming languages.
                Also, I&apos;m a big fan of React and I&apos;m currently learning Next.js and TypeScript. 🤓 <br/><br/>
                Something random about me, I&apos;m fluent in French, Spanish, English and I&apos;m a Japanese intermediate. I&apos;m fascinated by Japanese Edo period, mangas, animes and Japanese culture.
            </p>
        </section>
    )
}

'use client'
import { TypeAnimation } from "react-type-animation";
import cris from "/public/photo-red.jpg";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-16 px-5">
            <div className="grid grid-cols-1 md:grid-cols-6 auto-cols-fr md:mt-10">
                <div className="md:col-start-1 md:col-end-4">
                    <div className="h-40 mt-5">
                    <h2
                    className="text-4xl lg:text-6xl font-bold">
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
                    <p className="text-[#ADB7BE] text-sm mb-6 lg:text-md w-full text-justify md:mt-8">
                        Hello I&apos;m Cristina, a fulllstack JavaScript developer.
                        My goal is to continue learning more frameworks and langugages to become a better developer.
                        I&apos;m attracted to front-end libraries like React but I also enjoy working with Node.js.
                        I&apos;m currently looking for a apprenticeship in a company where I can learn and grow as a developer.
                    </p>
                </div>
                <div
                className="md:col-start-5 md:col-end-6 md:place-self-center md:self-center">
                    <Image src={cris} alt='' width={300} height={300} className="hidden md:block rounded-full"/>
                </div>
            </div>
            <button className="flex rounded-full px-5 py-2 bg-gradient-to-r from-primary-gradient via-secondary-gradient to-third-gradient"> Download CV </button>
        </section>
    )
}

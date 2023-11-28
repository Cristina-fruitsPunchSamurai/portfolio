'use client'
import { TypeAnimation } from "react-type-animation";
import cris from "/public/photo-red.jpg";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-16 px-5 mt-10 z-8888">
            <div className="grid grid-cols-1 md:grid-cols-6 auto-cols-fr">
                <div className="md:col-start-1 md:col-end-4">
                    <h2
                    className="text-4xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Welcome I&apos;m {" "}</span>
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
                    <br/>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p>
                </div>
                <div
                className="md:col-start-5 md:col-end-6 md:place-self-center md:self-center">
                    <Image src={cris} alt='' width={300} height={300} className="hidden md:block rounded-full"/>
                </div>
            </div>
            <button className="flex rounded-full px-5 py-2 bg-gradient-to-r from-primary to-secondary "> Download CV </button>
        </section>
    )
}

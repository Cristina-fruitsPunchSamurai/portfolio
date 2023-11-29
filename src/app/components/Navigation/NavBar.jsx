'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import NavLink from './NavLink';
import { navLinks } from '@/data';
import { useState } from "react";
import Navmobile from "./Navmobile";

export default function NavBar() {

    return (
        <header className="z-[999] relative">
        <nav className="mx-auto w-full fixed top-0 bg-[#121212] opacity-100">
            <div className="navbar flex container justify-between items-center md:py-4 mx-auto px-2 py-2">
                <div className="flex justify-center items-center">
                    <Link href="/">
                    <Image src={logo} width={60} height={60} alt='logo'/>
                    </Link>
                    <h1 className="ml-5 font-bold text-sm md:text-md">Cristina | Web Developer</h1>
                </div>
                <Navmobile/>
                <div className="flex-none hidden md:block">
                    <ul className="flex gap-10 list-none menu menu-horizontal">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink href={link.hash} title={link.name}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    )
}

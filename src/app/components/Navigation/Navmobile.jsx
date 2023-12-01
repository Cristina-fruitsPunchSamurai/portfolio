'use client'

import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { navLinks } from '@/data';
import NavLink from './NavLink';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navmobile() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => {
        if (isOpen) {
            setOpen(false);
        }
    });

    return (
        <div ref={ref} className="md:hidden h-[50%]">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} direction='right' />
            {isOpen && (
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
                    <ul className="grid gap-2  py-6 px-3">
                        {navLinks.map((link) => (
                            <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 100,
                            }}
                            onClick={() => setOpen((prev) => !prev)}
                            key={link.id}
                            className="w-full mb-3">
                                <NavLink href={link.hash} title={link.name}/>
                            </motion.li>
                        ))}
                    </ul>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}

'use client'

import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useClickAway } from "react-use";
import { useRef } from "react";
import { navLinks } from '@/data';
import NavLink from './NavLink';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

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
                    className="fixed left-0 shadow-4xl right-0 top-[3.5rem] bg-neutral-950 p-5 pt-0 border-b-2 border-b-primary-gradient">
                    <ul className="grid gap-2 py-6 px-3 bg-opacity-90">
                        {navLinks.map((link) => (
                            <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 100,
                            }}
                            onClick={() => setOpen((prev) => !prev)}
                            key={link.id}
                            className="w-full mb-3">
                                <NavLink href={link.hash} title={link.name}/>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="social px-3 flex gap-5">
                        <motion.div
                    whileHover={{
                        scale: 1.1,
                        boxShadow : "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    className="cursor-pointer hover:ease-in-out hover:bg-blue-700 inline-block rounded-full">
                        <Link href="https://www.linkedin.com/in/cmendozacampos/" target="_blank">
                            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z" fill="white"/>
                            </svg>
                        </Link>
                    </motion.div>
                    <motion.div
                    whileHover={{
                        scale: 1.1,
                        boxShadow : "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    className="hover:ease-in-out hover:bg-orange-600 inline-block rounded-full">
                        <Link href="https://github.com/Cristina-fruitsPunchSamurai" target="_blank">
                            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6671 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.16084 35.1623C9.10808 35.2837 8.92084 35.3196 8.75026 35.2365C8.57651 35.157 8.47892 34.992 8.53525 34.8706C8.58682 34.7459 8.77446 34.7116 8.94781 34.7943C9.12196 34.8742 9.22113 35.0408 9.16084 35.1623Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1312 36.263C10.0169 36.3707 9.79356 36.3207 9.64203 36.1504C9.48533 35.9805 9.45598 35.7534 9.57181 35.644C9.68963 35.5363 9.90622 35.5867 10.0633 35.7566C10.22 35.9285 10.2506 36.154 10.1312 36.263Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0757 37.6662C10.9289 37.7699 10.6889 37.6727 10.5405 37.456C10.3938 37.2394 10.3938 36.9795 10.5437 36.8754C10.6925 36.7713 10.9289 36.8649 11.0793 37.08C11.2256 37.2999 11.2256 37.5601 11.0757 37.6662Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3697 39.0219C12.2384 39.1692 11.9587 39.1296 11.754 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2 12.2384 38.3994C12.4463 38.5954 12.5097 38.8763 12.3697 39.0219Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.1548 39.8091C14.0969 39.9999 13.8275 40.0867 13.5562 40.0056C13.2853 39.9221 13.1079 39.6985 13.1627 39.5057C13.219 39.3136 13.4896 39.2232 13.7629 39.31C14.0334 39.3931 14.2112 39.615 14.1548 39.8091Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.1153 39.9552C16.122 40.1561 15.8919 40.3227 15.6071 40.3259C15.3207 40.3328 15.089 40.1702 15.0859 39.9725C15.0859 39.7696 15.3108 39.6045 15.5972 39.5997C15.882 39.594 16.1153 39.7554 16.1153 39.9552Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9397 39.6392C17.9738 39.8353 17.7758 40.0367 17.493 40.0899C17.2149 40.142 16.9575 40.0209 16.9222 39.8264C16.8876 39.6255 17.0892 39.4242 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z" fill="white"/>
                            </svg>
                        </Link>
                    </motion.div>
                </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}

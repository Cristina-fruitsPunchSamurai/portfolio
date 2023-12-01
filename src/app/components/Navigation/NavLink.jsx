'use client'

import Link from "next/link";
import clsx from 'clsx';

export default function NavLink({href,title, isActive, onClick}) {

    return (
        <Link
        href={href}
        scrollsmooth={"true"}
        className={clsx(
            'link w-full hover:font-bold transition cursor-pointer',
            isActive === `${title}` ? 'text-secondary-link bg-zinc-800 bg-opacity-60 rounded-2xl font-extrabold py-2 px-4' : 'font-normal'
            )}
        onClick={onClick}
        >
            {title}
        </Link>
    )
    }

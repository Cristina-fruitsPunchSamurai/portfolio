'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavLink({href,title}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    const className = isActive ? "secondary-link" : "primary-link"
    return (
        <Link href={href}
        className={`link w-full hover:font-bold transition cursor-pointer text-${className}`}>
            {title}
        </Link>
    )
    }

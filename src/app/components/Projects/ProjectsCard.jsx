
'use client';

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoConstruct } from "react-icons/io5";

export default function ProjectsCard({image, title, description,tagsData, version, link, alt,linkText}) {
    return (
        <div className="max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-900 bg-opacity-75 md:pb-5">
            <div className="group relative">
                <div style={{ position: "relative", width: "100%", height: "200px" }}>
                    <Image
                    src={image}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt={alt} />
                </div>
                {version === "In progress" && (
                    <div className="absolute top-1 right-2">
                        <IoConstruct size={40} color="#FF5E33"/>
                    </div>
                )}
                <Link href={link} target="_blank" aria-label={linkText}>
                    <div className="overlay absolute left-50 top-0 w-full h-full bg-zinc-900 opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
                    <FaGithub size={30} className="m-auto"/>
                    </div>
                </Link>
            </div>
            <div className="px-6 py-5 bg-zinc-900 bg-opacity-100 text-slate-300 md:h-[50%]">
                <h4 className="font-bold text-md mb-2 text-center">{title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed px-1">
                    {description}
                </p>
            </div>
            <div
                className="px-6 pt-4 pb-2 flex flex-wrap gap-3">
            {tagsData.map((tag, index) => (
                    <span  key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">{tag}</span>
            ))}
            </div>
        </div>
    )
}

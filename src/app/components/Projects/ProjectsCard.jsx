
'use client';

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectsCard({image, title, description,tagsData}) {
    return (
        <div className="max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg">
            <div className="group relative">
                <div style={{ position: "relative", width: "100%", height: "200px" }}>
                    <Image
                    src={image}
                    fill={true}
                    style={{objectFit: "cover"}}
                    alt="" />
                </div>
                <div className="overlay absolute left-50 top-0 w-full h-full bg-zinc-900 opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
                <FaGithub size={30} className="m-auto"/>
                </div>
            </div>
            <div className="px-6 py-4 bg-zinc-900">
                <h5 className="font-bold text-md mb-2">{title}</h5>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    {description}
                </p>
            </div>
            <div
                className="px-6 pt-4 pb-2 flex flex-wrap gap-5">
            {tagsData.map((tag, index) => (
                    <span  key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-5 text-sm font-semibold text-gray-700">{tag}</span>
            ))}
            </div>
        </div>
    )
}





// 'AnimalConnect helps making the animal adoption process easier. Through this web application, the future adopter can filter, choose and send an adoption application. Shelters and particular givers accept or refuse the applications',rf

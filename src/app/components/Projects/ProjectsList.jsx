
'use client'

import { IoConstruct } from "react-icons/io5";
import ProjectsCard from "./ProjectsCard";
import { projects } from "@/data/projects";
import { useContext, useState } from "react";
//my context
import { ActiveSectionContext } from '@/context/section-context';
//Scroll Nav with react-intersection-observer
import { useInView } from 'react-intersection-observer';
import { useScrollActiveSection } from '@/utils/activeScrollContext';


export default function ProjectsList() {
    const {setIsActive} = useContext(ActiveSectionContext);
    const {ref} =  useScrollActiveSection("Projects", 0.40, setIsActive)

    return (
        <section
        ref={ref}
        id="projects"
        className="flex flex-col items-center justify-center mb-28 scroll-mt-28 md:w-[80%] mx-auto">
            <h3 className="text-2xl font-bold flex items-center justify-center mb-8 uppercase">Projects</h3>
                <p className='text-base flex items-center justify-center text-justify w-[90%] mx-auto leading-relaxed mb-8 px-5'>
                I would like to show you my progress throughout my training to become a web developer and in this section you can take a look at some of the projects I created.
                Therefore, for each new project, in order to improve I try to add some challenges, or for example a new framework, a new discovery or a new technique. Don&apos;t hesitate to visit my Github page 😉.
                </p>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projects.map((project) => (
                        <ProjectsCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tagsData={project.technologies}
                        version={project.version}
                        />
                )
                )}
                </div>
        </section>
    )
}

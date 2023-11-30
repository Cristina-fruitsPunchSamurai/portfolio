
import Divider from "../Divider";
import ProjectsCard from "./ProjectsCard";
import { projects } from "@/data/projects";

export default function ProjectsList() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold flex mx-auto items-center justify-center mb-5">Projects</h3>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projects.map((project) => (
                    <ProjectsCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tagsData={project.technologies}
                    />
                )
                )}
                </div>
            <Divider/>
        </section>
    )
}


import animalconnect from "/public/animal-connect.png";
import hqh from "/public/hqh.png";
import githubrepo from "/public/github-repo.png";
import mangatek from "/public/mangatek.png";
import invaders from "/public/invaders.png";
import ghibliotheque from "/public/ghibliotheque.png";

export const projects = [
        {
        id: "1",
        title: "Hoy Que Hiciste",
        description: "Web application that connects school - teacher - student - family. Teachers can publish the activities done in class along with the skills that were worked on, they can update the class attendance of each student. The family can see the activities, and the attendance status of their chlildren as well as the time when they left school and with whom. This application has three roles : school admin, teacher and family.",
        image : hqh,
        technologies: ["NextJS", "React", "TypeScript", "Docker", "PostgreSQL"],
        version: "In progress"
    },
    {
        id: "2",
        title: "Animal Connect",
        description: "Web application that allows you to find a pet to adopt or put your pet up for adoption. The candidate adopters can send a request of adoption to the owner of the pet. An then, the owner can accept or refuse the request.",
        image : animalconnect,
        technologies: ["NodeJS", "React", "Redux", "Tailwind", "PostgreSQL", "Axios"],
        version: "MVP"
    },
    {
        id: "3",
        title: "Mangatek",
        description: "My first fullstack project and my dream project. A mangashelf where we can keep record of all the books read or currently reading. We can filter by genre, we can signup and login. I will update this project with new features and better technologies.",
        image : mangatek,
        technologies: ["EJS","NodeJS", "JavaScript","Bulma", "PostgreSQL", "MVC"],
        version: "MVP"
    },
    {
        id: "4",
        title: "Github repo finder",
        description: "Using the GitHub API, this app allows you to search for a repo depending on a search term. This is one of my frist React challenges.",
        image : githubrepo,
        technologies: ["React", "Axios", "MUI"],
        version: "MVP"
    },
        {
        id: "5",
        title: "Ghibliothèque",
        description: "A project inspired by Ghibli. The user can see the list and details of all the movies. It is possible to filter by an specific term, we can also sign up and login. This is a SSR project where I used the templating langugage EJS. This project allowed me to learn Node.js and in addition I was able to learn more about the MVC pattern.",
        image : ghibliotheque,
        technologies: ["EJS","NodeJS", "JSON", "MVC"],
        version: "MVP"
    },
    {
        id: "6",
        title: "Invaders",
        description: "JavaScript purely front-end application inspired by the space invader theme, the game generates a grid on which we can do pixel art. The user can choose the size of the grid and the color of the pixels.",
        image : invaders,
        technologies: ["JavaScript", "HTML", "CSS"],
        version: "MVP"
    }

]




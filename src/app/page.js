
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/Navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsList from './components/Projects/ProjectsList';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main className='flex flex-col min-h-screen text-gray-200 bg-gradient-to-b from-black via-[#360033] to-[#0b8793]'>
      <NavBar />
      <div className='mx-auto'>
        <Hero />
        <About />
        <Skills />
        <ProjectsList />
        <Experience/>
        {/* <Contact /> */}
      </div>


    </main>
  )
}

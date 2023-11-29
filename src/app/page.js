
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/Navigation/NavBar';
import About from './components/About';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen text-gray-200 bg-gradient-to-b from-black via-[#360033] to-[#0b8793]'>
      <NavBar />
      <div className='mx-auto py-4 px-10'>
        <Hero />
        <About />
        <Skills />
        <Experience/>
      </div>


    </main>
  )
}

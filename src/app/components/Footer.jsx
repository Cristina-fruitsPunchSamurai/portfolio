
import Image from 'next/image';
import logo from '/public/logo.png';

export default function Footer() {
    return (
        <footer className='bg-[#121212] opacity-90'>
            <div className='flex flex-col mx-auto pt-6 text-center text-slate-300'>
                <small> Made with ❤️ by Cristina_fruitsPunchSamurai </small>
                <p className='text-sm'> Built with Next.js, Tailwind &  Framer Motion </p>
            </div>
            <div className='flex items-center justify-center p-3'>
            <Image
                    priority={true}
                    src={logo}
                    width={50}
                    height={50}
                    alt='logo portfolio'/>
            </div>
        </footer>
    )
}

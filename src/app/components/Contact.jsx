
import { IoIosSend } from "react-icons/io";

export default function Contact() {
    return (
        <section id="contact" className='mb-20 md:px-10 px-6 text-center mx-auto w-full'>
            <h3 className='text-2xl font-bold flex items-center justify-center mb-5'>Let's keep in touch</h3>
            <p className='text-base flex items-center justify-center mb-5 md:w-2/3 mx-auto w-full text-justify'>I&apos;m currently looking for new oportunities.
            If you want to contact me, you can send me a message through this form. I&apos;ll also be glad to have some feedback or advice.</p>
        <form>
            <div className='flex flex-col items-center justify-center'>
                <div className="md:w-1/3 mb-5">
                <label class="block uppercase tracking-wide text-sm font-bold mb-2 text-left" for="email">
                    Email
                </label>
                <input className="w-full h-full rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400" id="email" type="email" placeholder="your email"/>
                </div>
                <div className="md:w-1/3 mb-5">
                <label class="block uppercase tracking-wide text-sm font-bold mb-2 text-left" for="subject">
                    Subject
                </label>
                <input className="w-full h-full rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400" id="subject" type="text" placeholder="subject"/>
                </div>
                <div className="md:w-1/3 mb-5">
                <label class="block uppercase tracking-wide text-sm font-bold mb-2 text-left" for="message">
                    Your message
                </label>
                <textarea className="w-full h-40 rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400" id="message" type="text" placeholder="content of the message"/>
                </div>
                    <button className="flex items-center font-extrabold  text-gray-900 justify-center gap-3 bg-yellow-500 h-[3rem] md:w-[8rem] w-[10rem] px-5 py-3 rounded-full">
                        Send ! <IoIosSend size={20}/>
                    </button>
            </div>
        </form>
        </section>

    )
}

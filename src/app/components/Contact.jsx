'use client'

import { sendData } from "@/actions/serverAction";
import { IoIosSend } from "react-icons/io";
import { useFormStatus } from "react-dom"


export default function Contact() {
    //const ref = useRef(null);
    const { pending } = useFormStatus();

    return (
        <section
        id="contact"
        className='md:px-10 px-6 text-center mx-auto w-full mb-28 scroll-mt-28'>
            <h3 className='text-2xl font-bold flex items-center justify-center mb-8 uppercase'>Let&apos;s keep in touch !</h3>
            <p className='text-base flex items-center justify-center mb-5 md:w-2/3 mx-auto w-full text-justify'>I&apos;m currently looking for new oportunities.
            If you want to contact me, you can send me a message through this form. I&apos;ll also be glad to have some feedback or advice.</p>
        <form action={async(formData)=> {
            await sendData(formData);
        }}
            >
            <div className='flex flex-col items-center justify-center'>
                <div className="md:w-1/3 mb-5">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2 text-left" htmlFor="email">
                    Email
                </label>
                <input
                className="w-full h-full rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400"
                maxLength={256}
                id="email"
                type="email"
                placeholder="your email"
                name="sender"/>
                </div>
                <div className="md:w-1/3 mb-5">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2 text-left" htmlFor="subject">
                    Subject
                </label>
                <input
                className="w-full h-full rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400"
                required
                maxLength={100}
                name="subject"
                id="subject"
                type="text"
                placeholder="subject"/>
                </div>
                <div className="md:w-1/3 mb-5">
                <label className="block uppercase tracking-wide text-sm font-bold mb-2 text-left" htmlFor="message">
                    Your message
                </label>
                <textarea
                className="w-full h-40 rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400"
                id="message"
                maxLength={500}
                required
                type="text"
                placeholder="content of the message"
                name="message"/>
                </div>
                    <button
                    type="submit"
                    className="flex items-center font-extrabold  text-gray-900 justify-center gap-3 bg-yellow-500 disabled:bg-opacity-65 h-[3rem] md:w-[8rem] w-[10rem] px-5 py-3 rounded-full"
                    disabled={pending}>
                        {pending ? (
                            <div
                            class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-slate-600 align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                            role="status">
                            </div>
                        ) : (
                            <>
                                Submit ! <IoIosSend size={20}/>
                            </>
                        )}

                    </button>
            </div>
        </form>
        </section>

    )
}

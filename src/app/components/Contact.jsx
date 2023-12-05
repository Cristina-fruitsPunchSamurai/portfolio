'use client'

import { sendData } from "@/actions/serverAction";
import SubmitButton from "./SubmitButton";
import Toast from "./Toast";

export default function Contact() {

    return (
        <section
        id="contact"
        className='md:px-10 px-6 text-center mx-auto w-full mb-28 scroll-mt-28 md:w-[80%]'>
            <h3 className='text-2xl font-bold flex items-center justify-center mb-8 uppercase text-center'>Let&apos;s keep in touch !</h3>
            <p className='text-base flex items-center justify-center mb-8 px-5 mx-auto w-full text-justify'>I&apos;m currently looking for new opportunities 🤩
            I&apos;ll be glad to receive some feedback or advice. Don&apos;t hesitate to contact me, through this form and I&apos;ll make sure to answer you ASAP. </p>
            <form action={async(formData)=> {
                const {data, error} = await sendData(formData);
                if(error) {
                    return <Toast message={error} error={true}/>
                } else {
                    return <Toast message={'Your email was sent !'} error={false}/>
                }
            }}
            >
            <div className='flex flex-col items-center justify-center'>
                <div className="md:w-[50%] mb-5 w-full">
                    <label className="block uppercase tracking-wide text-sm font-bold mb-2 text-left" htmlFor="email">
                        Email
                    </label>
                    <input
                    className="w-full h-full rounded-md bg-gray-200 border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary-link placeholder-gray-400"
                    maxLength={256}
                    id="email"
                    type="email"
                    required
                    placeholder="your email"
                    name="sender"/>
                </div>
                <div className="md:w-[50%]  mb-5 w-full">
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
                <div className="md:w-[50%]  mb-5 w-full">
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
            </div>
            <SubmitButton/>
        </form>
        </section>

    )
}

'use client'

import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { IoIosSend } from "react-icons/io";


export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
            <motion.button
            whileHover={{
                        scale: 1.2,
                        boxShadow : "0px 0px 8px rgb(255, 255, 255)",
                        transition: { type: "spring", stiffness: 300 },
                        }}
                type="submit"
                className={`flex items-center font-extrabold text-gray-900 justify-center gap-3 mx-auto ${pending ? ` bg-slate-300` : `bg-yellow-500`}  h-[3rem] md:w-[8rem] w-[10rem] px-5 py-3 rounded-full`}
                disabled={pending}>
                    {pending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black">
                        </div>
                        ) : (
                        <div className="flex items-center justify-center">
                        Submit! <IoIosSend size={20}/>
                        </div>
                        )}
            </motion.button>
    )
}

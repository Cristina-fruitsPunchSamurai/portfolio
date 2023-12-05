'use server'

import { Resend } from "resend";
import { validateInput } from "@/validation/validateInput";
import ContactEmail from "@/email/email-contact";
import { renderAsync } from "@react-email/render"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendData = async (formData) => {
    const sender = formData.get('sender');
    const subject = formData.get('subject');
    const message = formData.get('message');

//Validation
    if (validateInput(sender, 256))  {
        return { error: 'Please verify the email' };
    }

    if (validateInput(subject, 100))  {
        return { error: 'Please verify the subject'};
    }

    if (validateInput(message, 500))  {
        return { error: 'Please verify the message' };
    }
//Errors
const errorMessage = (error) => {
    let message;
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && "message" in error) {
        message = error.error;
    } else if ( typeof error === 'string') {
        message = error;
    } else {
        message = 'Something went wrong';
    }

    return message;
}
//On utilise renderAsync afin de passer mon React Email component car en le passant directement à l'intérieur de la fonction, ça throw un error en prod
    const html = await renderAsync(ContactEmail({ message, sender}),
        {
            pretty: true,
        }
    );
        let data;
        try {
                data = await resend.emails.send({
                from: 'Nouveau contact <onboarding@resend.dev>',
                to: 'crissou.mc@gmail.com',
                subject : subject,
                reply_to: sender,
                html: html,
            })
            }catch (error) {
                return { error: errorMessage(error) };
            }
        return data;
        };



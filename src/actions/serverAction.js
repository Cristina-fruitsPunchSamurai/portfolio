'use server'
import { Resend } from "resend";
import { validateInput } from "@/validation/validateInput";
import ContactEmail from "@/email/ContactEmail";
import { renderAsync } from "@react-email/render"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendData = async (formData) => {
    let data;
    const sender = formData.get('sender');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (validateInput(sender, 256))  {
        return { error: 'Please verify the email' };
    }

    if (validateInput(subject, 100))  {
        return { error: 'Please verify the subject'};
    }

    if (validateInput(message, 500))  {
        return { error: 'Please verify the message' };
    }

    const html = await renderAsync(
        React.createElement(ContactEmail, {
                    message : {message},
                    sender : {sender}
        })
    );

        try {
                data = await resend.emails.send({
                from: 'Nouveau contact <onboarding@resend.dev>',
                to: 'crissou.mc@gmail.com',
                subject: 'Hello World',
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
                reply_to: sender,
                react: html,
            })
            console.log(data);
            }catch (error) {

                console.error(`Error ${error.message}`);
            }};



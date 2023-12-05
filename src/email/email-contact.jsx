
import {Html, Body, Head, Heading, Hr, Container, Preview, Section, Text} from "@react-email/components";
import { Tailwind, Button } from "@react-email/components";

export default function ContactEmail({message, sender}) {
    return (
        <Html>
            <Head />
            <Preview> Nouveau message depuis le Portfolio</Preview>
            <Tailwind>
                <Body className="bg-slate-300">
                    <Container>
                        <Section className="my-10 px-10 py-5 rounded-md bg-white">
                        <Heading className="text-sky-800">Tu as un nouveau message depuis le Portfolio ✨</Heading>
                            <Text className="text-zinc-900"> Message de la part de : {sender}</Text>
                            <Text className="text-center">{message}</Text>
                        <Hr />
                            </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

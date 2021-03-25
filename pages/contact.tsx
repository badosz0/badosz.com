import {
    faDiscord,
    faGithub,
    faItchIo,
    faSteam,
    faTwitch,
    faTwitter,
    IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import Link from "next/link";

interface ContactLinkProps {
    name: string;
    link: string;
    icon: IconDefinition;
}

function ContactLink({ name, link, icon }: ContactLinkProps) {
    return (
        <Link href={link}>
            <a target="_blank">
                <div className="text-base w-72 relative border-b border-gray-300 py-1.5 cursor-pointer">
                    <div className="inline-block">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className="inline-block absolute right-0">{name}</div>
                </div>
            </a>
        </Link>
    );
}

export default function Contact() {
    return (
        <>
            <Layout section="contact">
                <div className="mt-16 space-y-2">
                    <ContactLink name="Discord" link="/discord" icon={faDiscord} />
                    <ContactLink name="Github" link="/github" icon={faGithub} />
                    <ContactLink name="Twitter" link="/twitter" icon={faTwitter} />
                    <ContactLink name="Itch.io" link="/itch" icon={faItchIo} />
                    <ContactLink name="Twitch" link="/twitch" icon={faTwitch} />
                    <ContactLink name="Steam" link="/steam" icon={faSteam} />
                    <ContactLink name="E-Mail" link="mailto:m@badosz.com" icon={faEnvelope} />
                </div>
            </Layout>
        </>
    );
}

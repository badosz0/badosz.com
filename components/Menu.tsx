import clsx from "clsx";
import Link from "next/link";

interface OptionProps {
    name: string;
    active: boolean;
    link: string;
}

interface MenuProps {
    section: string;
}

function Option({ name, active, link }: OptionProps) {
    return (
        <div className={clsx("mx-3 md:mx-6 text-sm", active ? "text-gray-600" : "text-gray-400")}>
            <Link href={`/${link}`}>
                <a>{name}</a>
            </Link>
        </div>
    );
}

export default function Menu({ section }: MenuProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap content-center mt-10 border-t border-b border-gray-300 py-2 w-max">
                <Option name="HOME" link="" active={section == "home"} />
                <Option name="PROJECTS" link="projects" active={section == "projects"} />
                <Option name="CONTACT" link="contact" active={section == "contact"} />
                <Option name="BLOG" link="blog" active={section == "blog"} />
            </div>
        </div>
    );
}

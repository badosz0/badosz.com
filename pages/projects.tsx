import Layout from "../components/Layout"
import Link from 'next/link'

interface ProjectProps {
    name: string
    links: [string, string][]
    description: string
    image: string
}

function Project({name, links, description, image}: ProjectProps) {
    return (
        <>
            <div className="w-8/12 md:w-6/12 lg:w-4/12">
                <div className="text-2xl font-bold">{name}</div>
                {links.map((link, i) => {
                    return (
                        <>
                        <Link href={link[1]}>
                            <a target="_blank">
                                <div className="inline-block text-gray-400 my-2.5">{link[0]}</div>
                            </a>
                        </Link>
                            {i != links.length - 1 && <div className="inline-block mx-2">|</div>}
                        </>
                    )
                })}
                <div className="text-justify leading-snug mb-5">{description}</div>
                <img className="w-full" src={image}/>
            </div>
            <hr className="w-32 border-gray-400 border-solid border-1 my-20"/>
        </>
    )
}

export default function Projects() {
    return (
        <>
            <Layout section="projects">
                <div className="flex justify-center items-center flex-col mt-20">
                    <Project
                        name="MilkScript"
                        links={[["Website", "/discord"], ["Github", "/discord"]]}
                        description="A dynamic programming language that compiles into Lua. It provides things that are not normally possible in Lua like default parameters, switches, classes and much more. MilkScript also catches many errors like undeclared identifier. Unlike lua, arrays are zero-based. Currently this language is still in development."
                        image="/images/projects/milkscript.png"
                    />
                    <Project
                        name="Obrazium"
                        links={[["Website", "https://obrazium.com"]]}
                        description="An api for image generation and text manipulation. Mostly used in discord bots. Obrazium contains 50+ different endpoints."
                        image="/images/projects/obrazium.png"
                    />
                    <Project
                        name="Salio"
                        links={[["Steam", "https://store.steampowered.com/app/875810/Salio/"], ["Discord", "/discord"]]}
                        description="A small and minimalistic, but still super hard platformer game about getting a tiny fellow through numerous rooms filled with various obstacles. Developed only in free time. This game was released on Steam and programmed in Lua."
                        image="/images/projects/salio.png"
                    />
                    <Project
                        name="Dear President,"
                        links={[["Itch", "https://badosz.itch.io/dear-president"], ["Discord", "/discord"]]}
                        description="A skill point & click game."
                        image="/images/projects/dear-president.png"
                    />
                    <Project
                        name="Curfe"
                        links={[["Itch", "https://badosz.itch.io/curfe"], ["Discord", "/discord"]]}
                        description="A skill and luck based game about being a currency."
                        image="/images/projects/curfe.png"
                    />
                    <Project
                        name="Satan's Island"
                        links={[["Itch", "https://badosz.itch.io/satans-island"], ["Discord", "/discord"]]}
                        description="A point & click game about expanding island by sacrificing the civilians."
                        image="/images/projects/satans-island.png"
                    />
                </div>
            </Layout>
        </>
    )
}

import clsx from "clsx"
import Link from "next/link"

interface Props {
    name: string
    active: boolean
    link: string
}

export default function Layout({name, active, link}: Props) {
    return (
        <div className={clsx("mx-6 text-sm", active ? "text-gray-600" : "text-gray-400")}>
            <Link href={`/${link}`}>
                <a>{name}</a>
            </Link>
        </div>
    )
}
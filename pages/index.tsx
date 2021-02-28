import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    return (
        <>
            {/* <div className="text-green-500 hover:text-red-500">Hello World</div>
            <Link href="/test">
                <a>test</a>
            </Link> */}

            <div className="text-base p-4"> 
                Coffee <FontAwesomeIcon icon={faCoffee}/>
            </div>
        </>
    )
}

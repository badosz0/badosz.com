import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/Layout"

const config = require("../config.json")

interface EventProps {
    date: number
    name: string
}

function Event({date, name}: EventProps) {
    return (
        <div className="text-base">
            <div className="inline-block text-gray-400 font-date border-r pr-3 border-gray-500">{date}</div>
            <div className="inline-block pl-3">{name}</div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            {/* <div className="text-base p-4"> 
                Coffee <FontAwesomeIcon icon={faCoffee}/>
            </div> */}
            <Layout section="home">
                <div className="mt-16 space-y-2">
                    {config.events.map(event => {
                        return (<Event
                            date={event.date}
                            name={event.name}
                        />)
                    })}
                </div>
            </Layout>
        </>
    )
}

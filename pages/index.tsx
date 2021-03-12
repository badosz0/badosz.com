import Layout from "../components/Layout"


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
            <Layout section="home">
                <div className="mt-16 space-y-2">
                    <Event
                        date={2021}
                        name={"Released \"Obrazium\""}
                    />
                    <Event
                        date={2020}
                        name={"Released \"Dear President,\""}
                    />
                    <Event
                        date={2019}
                        name={"Showcased a game at PGA 2019"}
                    />
                    <Event
                        date={2019}
                        name={"Released \"Salio\""}
                    />
                    <Event
                        date={2019}
                        name={"Released \"Curfe\""}
                    />
                    <Event
                        date={2019}
                        name={"Published \"api.badosz.com\""}
                    />
                    <Event
                        date={2019}
                        name={"Showcased \"Salio\" at PGA 2018"}
                    />
                    <Event
                        date={2018}
                        name={"Released \"Mr. Moustache\""}
                    />
                    <Event
                        date={2017}
                        name={"Released \"The Fall\""}
                    />
                    <Event
                        date={2002}
                        name={"Was born"}
                    />
                </div>
            </Layout>
        </>
    )
}

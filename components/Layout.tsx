import { ReactNode } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"

interface Props {
    children: ReactNode
    section: string
}

export default function Layout({children, section}: Props) {
    return (
        <>
            <div className="flex justify-center items-center mt-28">
                <div>
                    <Header />
                    <Menu section={section}/>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
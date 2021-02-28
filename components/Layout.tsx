import { ReactNode } from "react"
import Header from "../components/Header"

interface Props {
    children: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <>
            <div className="flex justify-center items-center mt-28">
                <div>
                    <Header />
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
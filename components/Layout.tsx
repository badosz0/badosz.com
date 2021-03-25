import { ReactNode } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

interface Props {
    children: ReactNode;
    section: string;
}

export default function Layout({ children, section }: Props) {
    return (
        <main className="mt-28">
            <div>
                <Header />
                <Menu section={section} />
                <div className="flex justify-center items-center">{children}</div>
            </div>
        </main>
    );
}

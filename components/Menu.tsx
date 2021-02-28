import Option from "../components/Option"

interface Props {
    section: string
}

export default function Menu({section}: Props) {
    return (
        <div className="flex flex-wrap content-center mt-10 border-t border-b border-gray-500 py-2">
            <Option 
                name="HOME"
                link=""
                active={section == "home"}
            />
            <Option 
                name="PROJECTS"
                link="projects"
                active={section == "projects"}
            />
            <Option 
                name="CONTACT"
                link="contact"
                active={section == "contact"}
            />
        </div>
    )
}
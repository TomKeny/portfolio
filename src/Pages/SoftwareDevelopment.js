import { use, useState } from "react"
import SideBar from "../sideBar"
import {Home, Journal, Keycode, Piano, NodeGame, ToDo, Pallete, Restaurant, Portfolio} from "./softwareDevProjects"

function SoftwareDevelopment() {
    const [project, setProject] = useState(contents[0])


    return (
        <div className="withNavBar">
            <SideBar names={names} contents={contents} project={project} setProject={setProject} />
            <div className="content">
                {project}
            </div>
        </div>
    )
}

const names = ["Home","Journal","Keycode","Piano","nodeJS Game","TODO List","Colour Pallete", "Restaurant Full Stack", "Portfolio"]
const contents = [Home(),Journal(),Keycode(),Piano(),NodeGame(),ToDo(),Pallete(),Restaurant(), Portfolio()]

export default SoftwareDevelopment
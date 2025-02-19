import { use, useState } from "react"
import SideBar from "../sideBar"

function GameDevelopment() {
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

const names = ["Home","Game Jam", "VR Factory", "Slime Adventure", "Procedural Animation"]
const contents = [Home(), GameJam(), VRFactory(), SlimeAdventure(), ProceduralAnimation()]

function Home () {
    return (
        <p>home</p>
    )
}

function GameJam () {
    return (
        <p>Game jam</p>
    )
}

function VRFactory () {
    return (
        <p>VR factory builder</p>
    )
}

function SlimeAdventure () {
    return (
        <p>Slime Adventure</p>
    )
}

function ProceduralAnimation () {
    return (
        <p>Procedural animation</p>
    )
}

export default GameDevelopment
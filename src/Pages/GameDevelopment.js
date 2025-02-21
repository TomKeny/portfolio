import { use, useEffect, useState } from "react"
import SideBar from "../sideBar"
//import Game from "../gameHead/game"
//import Update from "../gameHead/logic"

function GameDevelopment() {
    const [project, setProject] = useState(contents[0])
    /*
    const [gameState,setGameState] = useState([[758,0],[0,0,0,0,0],0,Colliders,-1])
    

    useEffect(() => {
        const interval = setInterval( () => {
            console.log({gameState})
            setGameState(Update(gameState))
        },1000)
        return () => {
            clearInterval(interval)
        }
    })
        */

    return (
        <div className="withNavBar">
            <SideBar names={names} contents={contents} project={project} setProject={setProject} />
            <div className="content" id="GDContent">
                {project}
            </div>
        </div>
    )
}

const names = ["Home", "Game Jam", "VR Factory", "Slime Adventure", "Procedural Animation"]
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

const Colliders = [ //top left, top right, bottom left, bottom right
    [[-192,60],[1728,60],[-192,80],[1728,80]], //floor
    [[10, 40],[290,40],[10,60],[290,60]], //button 1
    [[317.2, 40],[597.2,40],[317.2,60],[597.2,60]], //button 2
    [[624.4, 40],[904.4,40],[624.4,60],[904.4,60]], //button 3
    [[931.6, 40],[1211.6,40],[931.6,60],[1211.6,60]], //button 4
    [[1218.8, 40],[1518.8,40],[1238.8,60],[1518.8,60]], //button 5
    [[758,0],[778,0],[758,20],[778,20]]  //player

]

export default GameDevelopment
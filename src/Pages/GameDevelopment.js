import { use, useEffect, useState } from "react"
import SideBar from "../sideBar"
import bit from "../assets/Bit.gif"
import retro from "../assets/retro1.png"
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
    return (<>
        <h4 className="pageHeader">Game Jam R.E.T.R.O</h4>
        <div className="contentHolder">
        <div className="wordHolder">
            <p>During my Unity games development course, I worked in a team of 6 on a game jam.</p>
            <p>In this game jam we had to come up with a game based on the theme retro, this led us to making an arcade style platformer based in an arcade. Whilst this idea may seem relatively easy from the outside, this was the first time whilst learning game development where we were independant and had to manage and produce the project all on our own over the course of 6 days.</p>
            <p>During this project I was in charge of character sprites and general framwork coding like changing levels, character controls and player interaction, and this also allowed me to experience a crunch as 2 of our members fell ill so I had to step up and keep working on the project to polish off and incoroporate my teammates work into the project which took well into the early hours of the morning but was a surprisingly enjoyable experience.</p>
            <p>This project taught me how to properly work collaboratively as well as working as a team to achieve realistic goals (scope creep is always and will always be there) but it also taught me better coding practices as this code wasn't just for myself and needed to be readable to others which is a skill I like to think I have carried through to this day.</p>
            <p>If you want to check it out, the itch.io link for it is below</p>
            <a href="https://tomkeny.itch.io/retrogame" target="_blank">Check it out here</a>
            </div>
            <div className="imagesHolder">
                <img src={retro} alt="the front of an arcade" className="pageImg"/>
                <img src={bit} alt="an idle character animation" className="pageImg"/>
            </div>
        </div>
        </>
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
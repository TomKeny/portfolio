
let pos = [758,0]
let tops = [0,0,0,0,0]

function Game ({gameState}) {
    pos = gameState[0]
    tops = gameState[1]
        return (
            <div id="gameholder">
            <Button key={0} num={0} />
            <Button key={1} num={1} />
            <Button key={2} num={2} />
            <Button key={3} num={3} />
            <Button key={4} num={4} />
            <div id="floor"></div>
            <Player />
        </div>
        )
}

function Button ({num}) {
    let left = `calc(${(num) * 20}% + 10px)`
    let top = `${tops[num]}px`
    return (
        <div style={{left: left, fontSize: "16px", top: top}} id="unpressed" className="gameButton">{names[num]}</div>
    )
}


function Player () {
    return (
        <div id="player" style={{left: pos[0], top: pos[1]}}/>
    )
}

const names = ["VR Factory", "Game Jam", "Home", "Slime Adventure", "Procedural Animation"]

export default Game

//parent.setState({pos: [parent.state.pos[0] + 1, parent.state.pos[1] + 1]})
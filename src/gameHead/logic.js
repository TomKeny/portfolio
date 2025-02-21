const Colliders = [ //top left, top right, bottom left, bottom right
    [[-192,60],[1728,60],[-192,80],[1728,80]], //floor
    [[10, 40],[290,40],[10,60],[290,60]], //button 1
    [[317.2, 40],[597.2,40],[317.2,60],[597.2,60]], //button 2
    [[624.4, 40],[904.4,40],[624.4,60],[904.4,60]], //button 3
    [[931.6, 40],[1211.6,40],[931.6,60],[1211.6,60]], //button 4
    [[1218.8, 40],[1518.8,40],[1238.8,60],[1518.8,60]], //button 5
    [[758,0],[778,0],[758,20],[778,20]]  //player

]

let pos = [0,0]
let vel = 0
let col = Colliders
let standing = -1
let tops = [0,0,0,0,0]

let tempState = [pos,tops,vel,col,standing]


function Update(gameState) {
    console.log(gameState)
    pos = gameState[0]
    tops = gameState[1]
    vel = gameState[2]
    col = gameState[3]
    standing = gameState[4]
    console.log("here")
    buttonUpdate()
    playerUpdate()
    tops[0]++
    return tempState
}

function buttonUpdate() {
    tops = [col[1][0][1],col[2][0][1],col[3][0][1],col[4][0][1],col[5][0][1]]
    tempState[1] = tops
}

function playerUpdate() {

    let potentialy = createCol(col[6], 0, vel)
    let overL = overlap(potentialy, col)
    if (overL[0]) {
        vel = 0
        pos = [pos[0], col[overL[1]][0][2] + 20]
    }
    else {
        let colliders = col
        colliders[6] = potentialy
        col = colliders
        pos = potentialy[0]
    }
}
  
function createCol (collider, x, y) {
    return [
        [collider[0] + x, collider[0] + y],
        [collider[1] + x, collider[1] + y],
        [collider[2] + x, collider[2] + y],
        [collider[3] + x, collider[3] + y]
    ]
}
    

function overlap(colliderA, colliders) {
    for (let x = 0; x < 6; x++) {
        for (let i = 0; i < 4; i++) { 
            if (colliderA[i][0] > colliders[x][0][0] && colliderA[i][0] < colliders[x][0][1] && colliderA[i][1] > colliders[x][0][0] && colliderA[i][1] < colliders[x][2][1]) {
                return [true, i]
            }
        }
    }
    return false
}


export default Update
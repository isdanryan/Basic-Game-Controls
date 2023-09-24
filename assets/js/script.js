let gameAreaWidth = 480;
let gameAreaHeight = 360;
let gameArea;
let characterDiv;

//Character Create & positon
let characterX = "60px";
let characterY = "60px";


let gameCharacter = {
    x : characterX,
    y : characterY
}

function createCharacter(){
    characterDiv = document.getElementById("character");
    characterDiv.style.position = "relative";
    characterDiv.style.top = "60px";
    characterDiv.style.left = "60px";
    document.getElementById("character") = characterDiv;
}

function moveCharacterUp(){
    let currentY = parseInt(characterDiv.style.top);
    if (currentY === 0) {
        return;
    }
    currentY += -10;
    currentY = currentY + "px";
    characterY = currentY;
    characterDiv.style.top = currentY;
}

function moveCharacterDown(){
    let currentY = parseInt(characterDiv.style.top);
    if (currentY === 360 - 30) {
        return;
    }
    currentY += 10;
    currentY = currentY + "px";
    characterY = currentY;
    characterDiv.style.top = currentY;
}

function moveCharacterLeft(){
    let currentX = parseInt(characterDiv.style.left);
    if (currentX === 0) {
        return;
    }
    currentX += -10;
    currentX = currentX + "px";
    characterX = currentX;
    characterDiv.style.left = currentX;
}

function moveCharacterRight(){
    let currentX = parseInt(characterDiv.style.left);
    if (currentX === 480 - 30) {
        return;
    }
    currentX += 10;
    currentX = currentX + "px";
    characterX = currentX;
    characterDiv.style.left = currentX;
}



document.addEventListener("DOMContentLoaded", function() {
    createCharacter();
})

document.addEventListener("keydown", function(event){
    if (event.code === "ArrowUp") {
        moveCharacterUp();
    } else if (event.code === "ArrowDown"){
        moveCharacterDown();
    } else if (event.code === "ArrowLeft"){
        moveCharacterLeft();
    } else if (event.code === "ArrowRight"){
        moveCharacterRight();
    }
});

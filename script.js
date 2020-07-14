const container = document.getElementById("sketchBox");

document.getElementById("mainContainer").style.cssText = 
    "height: 100vh; width: 100vw; "

let layoutScreen = document.getElementById("buttonContainer");

let small = document.getElementById("smallGrid");
small.addEventListener('click', () => {
    makeRows(64, 64);
    layoutScreen.style.visibility= "hidden";
    document.getElementById("sketchBox").style.height = "550px";
    document.getElementById("sketchBox").style.width = "550px";
    document.getElementsByClassName("grid-item").style.height = "5vh";
    document.getElementsByClassName("grid-item").style.width = "5vw";
});

let mid = document.getElementById("midGrid");
mid.addEventListener('click', () => {
     makeRows(32, 32);
     layoutScreen.style.visibility= "hidden";
     document.getElementById("sketchBox").style.height = "400px";
     document.getElementById("sketchBox").style.width = "550px";
     document.getElementsByClassName("grid-item").style.height = "6vh";
     document.getElementsByClassName("grid-item").style.width = "6vw";
});
    
let large = document.getElementById("largeGrid");
large.addEventListener('click', () => {
    makeRows(16,16);
    layoutScreen.style.visibility= "hidden";
    document.getElementById("sketchBox").style.height = "50%";
    document.getElementById("sketchBox").style.width = "100%";
    document.getElementsByClassName("grid-item").style.height = "100%";
    document.getElementsByClassName("grid-item").style.width = "100%";
});

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseover", paint);

        function paint (){
            cell.style.cssText = "background-color: blue;"
        };
    };
};

let clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () => {
    location.reload();
});
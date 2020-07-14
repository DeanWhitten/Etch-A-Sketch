const container = document.getElementById("sketchBox");
let defaultRows = makeRows(64, 64);

document.getElementById("mainContainer").style.cssText = 
    "height: 100vh; width: 100vw; background-color: coral;"


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
      };
};
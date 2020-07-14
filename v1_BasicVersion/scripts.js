
document.getElementById("mainContainer").style.cssText = "height: 100vh; width: 100vw; background-color: coral;"

const container = document.getElementById("sketchBox");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", paint);
    cell.addEventListener("click", erase);
    document.getElementById("clear").addEventListener("click", erase);

    container.appendChild(cell).className = "grid-item";

    function paint (){
        cell.style.cssText = "background-color: blue;"
    };

    function erase (){
       cell.style.cssText = "background-color: blanchedalmond;"
    };

  };
};

makeRows(16, 16);

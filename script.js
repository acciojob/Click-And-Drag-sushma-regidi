// Your code here.
const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Place cubes in a grid initially
function initializeGrid() {
    let x = 10, y = 10;
    cubes.forEach(cube => {
        cube.style.left = x + "px";
        cube.style.top = y + "px";

        x += 80;
        if (x + 60 > container.clientWidth) {
            x = 10;
            y += 80;
        }
    });
}
initializeGrid();

// Drag start
cubes.forEach(cube => {
    cube.addEventListener("mousedown", (e) => {
        activeCube = cube;
        offsetX = e.clientX - cube.offsetLeft;
        offsetY = e.clientY - cube.offsetTop;
        cube.style.cursor = "grabbing";
    });
});

// Drag move
document.addEventListener("mousemove", (e) => {
    if (!activeCube) return;

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Boundaries
    x = Math.max(0, Math.min(x, container.clientWidth - activeCube.clientWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - activeCube.clientHeight));

    activeCube.style.left = x + "px";
    activeCube.style.top = y + "px";
});

// Drag end
document.addEventListener("mouseup", () => {
    if (activeCube) {
        activeCube.style.cursor = "grab";
    }
    activeCube = null;
});


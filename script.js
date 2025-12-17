const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach((cube, index) => {
    // Initial grid placement
    const col = index % 4;
    const row = Math.floor(index / 4);
    cube.style.left = `${col * 80}px`;
    cube.style.top = `${row * 80}px`;

    cube.addEventListener("mousedown", (e) => {
        activeCube = cube;
        cube.style.cursor = "grabbing";

        const rect = cube.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });
});

document.addEventListener("mousemove", (e) => {
    if (!activeCube) return;

    const containerRect = container.getBoundingClientRect();
    const cubeRect = activeCube.getBoundingClientRect();

    let newLeft = e.clientX - containerRect.left - offsetX;
    let newTop = e.clientY - containerRect.top - offsetY;

    // Boundary constraints
    newLeft = Math.max(0, Math.min(newLeft, container.clientWidth - cubeRect.width));
    newTop = Math.max(0, Math.min(newTop, container.clientHeight - cubeRect.height));

    activeCube.style.left = `${newLeft}px`;
    activeCube.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
    if (activeCube) {
        activeCube.style.cursor = "grab";
    }
    activeCube = null;
});





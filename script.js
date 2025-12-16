const container = document.getElementById('container');
const cubes = document.querySelectorAll('.cube');

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Arrange cubes initially in grid
cubes.forEach((cube, index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;

    cube.style.left = `${col * 90}px`;
    cube.style.top = `${row * 90}px`;

    cube.addEventListener('mousedown', startDrag);
});

function startDrag(e) {
    activeCube = e.target;

    const rect = activeCube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
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
}

function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    activeCube = null;
}



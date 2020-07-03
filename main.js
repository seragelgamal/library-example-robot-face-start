// DRAW ROBOT FACE EXAMPLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Draw Robot Face
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80); // Ears
fillTriangle(180, 80, 140, 100, 220, 100); // Hair
fillTriangle(340, 80, 300, 100, 380, 100); // Hair
strokeTriangle(260, 80, 220, 100, 300, 100); // Hair
strokeTriangle(420, 80, 380, 100, 460, 100); // Hair
fillTriangle(300, 200, 220, 600, 380, 600); // Neck

ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400); // Head

ctx.fillStyle = "rgb(235, 235, 235)";
fillCircle(200, 250, 50); // Left Eye Socket
fillCircle(400, 250, 50); // Right Eye Socket
ctx.fillRect(200, 350, 200, 60); // Mouth

ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380); // Teeth Horizontal
line(250, 350, 250, 410); // Teeth Vertical
line(300, 350, 300, 410); // Teeth Vertical
line(350, 350, 350, 410); // Teeth Vertical

ctx.fillStyle = "rgb(100, 100, 100)";
fillCircle(200, 250, 30); // Left Eye
fillCircle(400, 250, 10); // Right Eye

ctx.strokeStyle = "rgb(100, 100, 100)";
strokeCircle(200, 250, 50); // Left Eye Socket Outline
strokeCircle(400, 250, 50); // Right Eye Socket Outline

ctx.lineWidth = 2;
line(150, 180, 250, 180); // Left eyebrow
line(350, 160, 450, 180); // Right eyebrow
strokeTriangle(300, 280, 320, 320, 280, 320); // Nose


// DRAW FUNCTIONS
function fillTriangle(x1, y1, x2, y2, x3, y3) {
    // Draw a filled triangle with vertices (x1, y1), (x2, y2), (x3, y3)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}

function strokeTriangle(x1, y1, x2, y2, x3, y3) {
    // Draw an outlined triangle with vertices (x1, y1), (x2, y2), (x3, y3)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath()
    ctx.stroke();
}

function fillCircle(x, y, r) {
    // Draw a filled circle with center (x, y) and radius (r)
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function strokeCircle(x, y, r) {
    // Draw an outlined circle with center (x, y) and radius (r)
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

function line(x1, y1, x2, y2) {
    // Draw a line segment from (x1, y1) to (x2, y2)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
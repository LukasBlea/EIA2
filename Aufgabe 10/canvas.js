document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ozean();
}
function ozean() {
    let wasser = new Path2D();
    crc.fillStyle = "rgba(0, 100, 255, 0.5)";
    wasser.rect(0, 0, 1920, 1080);
    crc.fill(wasser);
    crc.stroke(wasser);
    seeboden();
}
function seeboden() {
    let boden = new Path2D();
    crc.fillStyle = "rgba(255, 205, 65, 1)";
    boden.rect(0, 830, 1920, 1080);
    crc.fill(boden);
    crc.stroke(boden);
    algenRandomizer();
}
function algenRandomizer() {
    for (let i = 0; i < 6; i++) {
        let x = Math.random() * canvas.width;
        let y = 850;
        algen(x, y);
    }
    blasenRandomizer();
}
function algen(_x, _y) {
    let algen = new Path2D();
    crc.beginPath();
    algen.moveTo(_x, _y);
    algen.lineTo(_x + 80, _y - 100);
    algen.moveTo(_x, _y);
    algen.lineTo(_x - 80, _y - 100);
    algen.moveTo(_x, _y);
    algen.lineTo(_x, _y - 100);
    crc.lineWidth = 3;
    crc.strokeStyle = "rgba(0, 180, 0, 1";
    crc.fill(algen);
    crc.stroke(algen);
    algen.closePath();
}
function blasenRandomizer() {
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 800;
        let radius = Math.min(80) * Math.random();
        blasen(x, y, radius);
    }
    fischRandomizer();
}
function blasen(_x, _y, _radius) {
    let blasen = new Path2D();
    blasen.arc(_x, _y, _radius, 0, Math.PI * 2, false);
    crc.strokeStyle = "rgba(0, 0, 200, 0.2";
    crc.fillStyle = "rgba(0, 0, 200, 0.3";
    crc.fill(blasen);
    crc.stroke(blasen);
}
function fischRandomizer() {
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 700;
        fisch(x, y);
    }
    steinRandomizer();
}
function fisch(_x, _y) {
    let fisch = new Path2D;
    let lampenHälter = new Path2D;
    let lampe = new Path2D;
    let flosseUnten = new Path2D;
    let auge = new Path2D;
    let pupile = new Path2D;
    crc.strokeStyle = "black";
    fisch.moveTo(_x, _y);
    fisch.quadraticCurveTo(_x - 50, _y + 55, _x, _y + 100);
    fisch.quadraticCurveTo(_x, _y + 110, _x + 300, _y + 100);
    fisch.quadraticCurveTo(_x + 250, _y + 50, _x + 300, _y);
    fisch.quadraticCurveTo(_x + 150, _y - 20, _x, _y);
    lampenHälter.moveTo(_x + 100, _y - 8);
    lampenHälter.quadraticCurveTo(_x - 250, _y - 200, _x - 150, _y);
    lampe.arc(_x - 150, _y, 20, 0, Math.PI * 2, false);
    flosseUnten.moveTo(_x + 100, _y + 104);
    flosseUnten.quadraticCurveTo(_x + 200, _y + 180, _x + 200, _y + 102);
    auge.arc(_x + 20, _y + 30, 15, 0, Math.PI * 2, false);
    pupile.arc(_x + 20, _y + 30, 5, 0, Math.PI * 2, false);
    crc.fillStyle = "rgba(0, 119, 141, 1)";
    crc.fill(fisch);
    crc.stroke(lampenHälter);
    crc.fillStyle = "yellow";
    crc.fill(lampe);
    crc.strokeStyle = "rgba(255, 105, 66, 1)";
    crc.fillStyle = "rgba(255, 105, 66, 1)";
    crc.fill(flosseUnten);
    crc.stroke(flosseUnten);
    crc.strokeStyle = "black";
    crc.stroke(auge);
    crc.fillStyle = "white";
    crc.fill(pupile);
    crc.stroke(pupile);
}
function steinRandomizer() {
    for (let i = 0; i < 3; i++) {
        let x = Math.random() * canvas.width;
        let y = 885;
        stein(x, y);
    }
}
function stein(_x, _y) {
    let stein = new Path2D;
    let krabbe = new Path2D;
    let krabbenBeine = new Path2D;
    let krabbenAuge1 = new Path2D;
    let krabbenAuge2 = new Path2D;
    stein.moveTo(_x, _y);
    stein.quadraticCurveTo(_x - 250, _y - 150, _x + 80, _y + 300);
    stein.quadraticCurveTo(_x + 400, _y - 170, _x + 200, _y - 100);
    krabbe.arc(_x + 250, _y - 130, 30, 0, Math.PI * 2, false);
    krabbenBeine.moveTo(_x + 233, _y - 106);
    krabbenBeine.lineTo(_x + 205, _y - 95);
    krabbenBeine.lineTo(_x + 215, _y - 85);
    krabbenBeine.moveTo(_x + 265, _y - 106);
    krabbenBeine.lineTo(_x + 290, _y - 85);
    krabbenBeine.lineTo(_x + 275, _y - 70);
    krabbenAuge1.arc(_x + 240, _y - 140, 5, 0, Math.PI * 2, false);
    krabbenAuge2.arc(_x + 260, _y - 140, 5, 0, Math.PI * 2, false);
    crc.fillStyle = "rgba(100, 100, 63)";
    crc.fill(stein);
    crc.fillStyle = "rgba(255, 67, 41)";
    crc.fill(krabbe);
    crc.stroke(krabbenBeine);
    crc.fillStyle = "black";
    crc.fill(krabbenAuge1);
    crc.fillStyle = "black";
    crc.fill(krabbenAuge2);
}
//# sourceMappingURL=canvas.js.map
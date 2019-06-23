document.addEventListener("DOMContentLoaded", init);
let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ozean();
}

function ozean(): void {
    let wasser: Path2D = new Path2D();
    crc.fillStyle = "rgba(0, 100, 255, 0.5)";
    wasser.rect(0, 0, 1920, 1080);
    crc.fill(wasser);
    crc.stroke(wasser);
    seeboden();
}

function seeboden(): void {
    let boden: Path2D = new Path2D();
    crc.fillStyle = "rgba(255, 205, 65, 1)";
    boden.rect(0, 830, 1920, 1080);
    crc.fill(boden);
    crc.stroke(boden);
    algenRandomizer();
}

function algenRandomizer(): void {
    for (let i: number = 0; i < 6; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = 850;
        algen(x, y);
    }
    fischRandomizer();
}

function algen(_x: number, _y: number): void {
    let algen: Path2D = new Path2D();
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

function blasenRandomizer(): void {
    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 800;
        let radius: number = Math.min(80) * Math.random();
        let velocityX: number = 0;
        let velocityY: number = 0;
        velocityX += x;
        velocityY += y;
        blasen(x, y, radius, velocityX, velocityY);
    }
}

function blasen(_x: number, _y: number, _radius: number, _velocityX: number, _velocityY: number): void {
    let blasen: Path2D = new Path2D();
    blasen.arc(_x, _y, _radius, 0, Math.PI * 2, false);
    crc.strokeStyle = "rgba(0, 0, 200, 0.2";
    crc.fillStyle = "rgba(0, 0, 200, 0.3";
    if (_x + _radius > innerWidth || _x - _radius < 0) {
        _velocityX = -_velocityX;
    }
    if (_y + _radius > innerHeight || _y - _radius < 0) {
        _velocityY = -_velocityY;
    }
    crc.fill(blasen);
    crc.stroke(blasen);
}

function fischRandomizer(): void {
    for (let i: number = 0; i < 4; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 700;
        fisch(x, y);
    }
    steinRandomizer();
}

function fisch(_x: number, _y: number): void {
    let fisch: Path2D = new Path2D;
    let lampenHälter: Path2D = new Path2D;
    let lampe: Path2D = new Path2D;
    let flosseUnten: Path2D = new Path2D;
    let auge: Path2D = new Path2D;
    let pupile: Path2D = new Path2D;
    crc.strokeStyle = "black";
    fisch.moveTo(_x, _y);
    fisch.quadraticCurveTo(_x - 50, _y + 55, _x, _y + 100);
    fisch.quadraticCurveTo(_x, _y + 110, _x + 300, _y + 100);
    fisch.quadraticCurveTo(_x + 250, _y + 50, _x + 300, _y);
    fisch.quadraticCurveTo(_x + 150, _y - 20, _x, _y);
    lampenHälter.moveTo(_x + 100, _y - 8);
    lampenHälter.quadraticCurveTo(_x - 250 , _y - 200, _x - 150, _y);
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

function steinRandomizer(): void {
    for (let i: number = 0; i < 3; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = 885;
        stein(x, y);
    }
    blasenRandomizer();
}

function stein(_x: number, _y: number): void {
    let stein: Path2D = new Path2D;
    let krabbe: Path2D = new Path2D;
    let krabbenBeine: Path2D = new Path2D;
    let krabbenAuge1: Path2D = new Path2D;
    let krabbenAuge2: Path2D = new Path2D;
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

blasenRandomizer();
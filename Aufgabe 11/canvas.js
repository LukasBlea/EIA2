var Aufgabe11;
(function (Aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fischArray = [];
    let blasenArray = [];
    let algenArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc = canvas.getContext("2d");
        drawBackground();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        imageData = Aufgabe11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 700;
            let dx = -4 + -2;
            let dy = Math.random() * -1;
            let fisch1;
            fisch1 = new Aufgabe11.Fisch1();
            fisch1.x = x;
            fisch1.y = y;
            fisch1.dx = dx;
            fisch1.dy = dy;
            fischArray.push(fisch1);
            fisch1.draw();
        }
        for (let i = 0; i < 13; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 800;
            let dx = (Math.random() * -0.5);
            let dy = (Math.random() * -0.5);
            let radius = Math.min(80) * Math.random();
            let blasen;
            blasen = new Aufgabe11.Blasen();
            blasen.x = x;
            blasen.y = y;
            blasen.dx = dx;
            blasen.dy = dy;
            blasen.radius = radius;
            blasenArray.push(blasen);
            blasen.draw();
        }
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * canvas.width;
            let y = 850;
            let dx = Math.random() * 10 - 1;
            let algen;
            algen = new Aufgabe11.Blasen();
            algen.x = x;
            algen.y = y;
            algen.dx = dx;
            algenArray.push(algen);
            algen.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        Aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }
        for (let i = 0; i < blasenArray.length; i++) {
            blasenArray[i].update();
        }
        for (let i = 0; i < algenArray.length; i++) {
            algenArray[i].update();
        }
    }
    function drawBackground() {
        //ozean
        let wasser = new Path2D();
        Aufgabe11.crc.fillStyle = "rgba(0, 100, 255, 0.5)";
        wasser.rect(0, 0, 1280, 720);
        Aufgabe11.crc.fill(wasser);
        Aufgabe11.crc.stroke(wasser);
        //seeboden
        let boden = new Path2D();
        Aufgabe11.crc.fillStyle = "rgba(255, 205, 65, 1)";
        boden.rect(0, 830, 1280, 720);
        Aufgabe11.crc.fill(boden);
        Aufgabe11.crc.stroke(boden);
        //stein
        let stein = new Path2D;
        let krabbe = new Path2D;
        let krabbenBeine = new Path2D;
        let krabbenAuge1 = new Path2D;
        let krabbenAuge2 = new Path2D;
        stein.moveTo(200, 850);
        stein.quadraticCurveTo(200 - 250, 885 - 150, 200 + 80, 885 + 300);
        stein.quadraticCurveTo(200 + 400, 885 - 170, 200 + 200, 885 - 100);
        krabbe.arc(200 + 250, 885 - 130, 30, 0, Math.PI * 2, false);
        krabbenBeine.moveTo(200 + 233, 885 - 106);
        krabbenBeine.lineTo(200 + 205, 885 - 95);
        krabbenBeine.lineTo(200 + 215, 885 - 85);
        krabbenBeine.moveTo(200 + 265, 885 - 106);
        krabbenBeine.lineTo(200 + 290, 885 - 85);
        krabbenBeine.lineTo(200 + 275, 885 - 70);
        krabbenAuge1.arc(200 + 240, 885 - 140, 5, 0, Math.PI * 2, false);
        krabbenAuge2.arc(200 + 260, 885 - 140, 5, 0, Math.PI * 2, false);
        Aufgabe11.crc.fillStyle = "rgba(100, 100, 63)";
        Aufgabe11.crc.fill(stein);
        Aufgabe11.crc.fillStyle = "rgba(255, 67, 41)";
        Aufgabe11.crc.fill(krabbe);
        Aufgabe11.crc.stroke(krabbenBeine);
        Aufgabe11.crc.fillStyle = "black";
        Aufgabe11.crc.fill(krabbenAuge1);
        Aufgabe11.crc.fillStyle = "black";
        Aufgabe11.crc.fill(krabbenAuge2);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=canvas.js.map
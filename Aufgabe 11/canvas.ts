namespace Aufgabe11 {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fischArray: Fisch1[] = [];
    let blasenArray: Blasen[] = [];
    let algenArray: Algen[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawBackground();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 700;
            let dx: number = -4 + -2;
            let dy: number = Math.random() * -1;
            let fisch1: Fisch1;
            fisch1 = new Fisch1();
            fisch1.x = x;
            fisch1.y = y;
            fisch1.dx = dx;
            fisch1.dy = dy;
            fischArray.push(fisch1);
            fisch1.draw();
        }
        for (let i: number = 0; i < 13; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 800;
            let dx: number = -5;
            let dy: number = Math.random() * -0.5;
            let radius: number = Math.min(80) * Math.random();
            let blasen: Blasen;
            blasen = new Blasen();
            blasen.x = x;
            blasen.y = y;
            blasen.dx = dx;
            blasen.dy = dy;
            blasen.radius = radius;
            blasenArray.push(blasen);
            blasen.draw();
        }
        for (let i: number = 0; i < 6; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = 850;
            let dx: number = Math.random() * 10 - 1;
            let algen: Algen;
            algen = new Blasen();
            algen.x = x;
            algen.y = y;
            algen.dx = dx;
            algenArray.push(algen);
            algen.draw();
        }
        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        for (let i: number = 0; i < fischArray.length; i++) {
            fischArray[i].update();
        }
        for (let i: number = 0; i < blasenArray.length; i++) {
            blasenArray[i].update();
        }
        for (let i: number = 0; i < algenArray.length; i++) {
            algenArray[i].update();
        }
    }

    function drawBackground(): void {
        //ozean
        let wasser: Path2D = new Path2D();
        crc.fillStyle = "rgba(0, 100, 255, 0.5)";
        wasser.rect(0, 0, 1280, 720);
        crc.fill(wasser);
        crc.stroke(wasser);
        //seeboden
        let boden: Path2D = new Path2D();
        crc.fillStyle = "rgba(255, 205, 65, 1)";
        boden.rect(0, 830, 1280, 720);
        crc.fill(boden);
        crc.stroke(boden);
        //stein
        let stein: Path2D = new Path2D;
        let krabbe: Path2D = new Path2D;
        let krabbenBeine: Path2D = new Path2D;
        let krabbenAuge1: Path2D = new Path2D;
        let krabbenAuge2: Path2D = new Path2D;
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
}
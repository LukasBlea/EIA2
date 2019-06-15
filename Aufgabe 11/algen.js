var Aufgabe11;
(function (Aufgabe11) {
    class Algen {
        draw() {
            let algen = new Path2D();
            Aufgabe11.crc.beginPath();
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x + 80, this.y - 100);
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x - 80, this.y - 100);
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x, this.y - 100);
            Aufgabe11.crc.lineWidth = 3;
            Aufgabe11.crc.strokeStyle = "rgba(0, 180, 0, 1";
            Aufgabe11.crc.fill(algen);
            Aufgabe11.crc.stroke(algen);
            algen.closePath();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
        }
    }
    Aufgabe11.Algen = Algen;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=algen.js.map
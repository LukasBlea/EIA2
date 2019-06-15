var Aufgabe11;
(function (Aufgabe11) {
    class Fisch1 {
        draw() {
            let fisch = new Path2D;
            let lampenHälter = new Path2D;
            let lampe = new Path2D;
            let flosseUnten = new Path2D;
            let auge = new Path2D;
            let pupile = new Path2D;
            Aufgabe11.crc.strokeStyle = "black";
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 50, this.y + 55, this.x, this.y + 100);
            fisch.quadraticCurveTo(this.x, this.y + 110, this.x + 300, this.y + 100);
            fisch.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 300, this.y);
            fisch.quadraticCurveTo(this.x + 150, this.y - 20, this.x, this.y);
            lampenHälter.moveTo(this.x + 100, this.y - 8);
            lampenHälter.quadraticCurveTo(this.x - 250, this.y - 200, this.x - 150, this.y);
            lampe.arc(this.x - 150, this.y, 20, 0, Math.PI * 2, false);
            flosseUnten.moveTo(this.x + 100, this.y + 104);
            flosseUnten.quadraticCurveTo(this.x + 200, this.y + 180, this.x + 200, this.y + 102);
            auge.arc(this.x + 20, this.y + 30, 15, 0, Math.PI * 2, false);
            pupile.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, false);
            Aufgabe11.crc.fillStyle = "rgba(0, 119, 141, 1)";
            Aufgabe11.crc.fill(fisch);
            Aufgabe11.crc.stroke(lampenHälter);
            Aufgabe11.crc.fillStyle = "yellow";
            Aufgabe11.crc.fill(lampe);
            Aufgabe11.crc.strokeStyle = "rgba(255, 105, 66, 1)";
            Aufgabe11.crc.fillStyle = "rgba(255, 105, 66, 1)";
            Aufgabe11.crc.fill(flosseUnten);
            Aufgabe11.crc.stroke(flosseUnten);
            Aufgabe11.crc.strokeStyle = "black";
            Aufgabe11.crc.stroke(auge);
            Aufgabe11.crc.fillStyle = "white";
            Aufgabe11.crc.fill(pupile);
            Aufgabe11.crc.stroke(pupile);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.x = window.innerWidth;
                this.y = Math.random() * 720;
            }
        }
    }
    Aufgabe11.Fisch1 = Fisch1;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fisch.js.map
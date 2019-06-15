namespace Aufgabe11 {

    export class Fisch1 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let fisch: Path2D = new Path2D;
            let lampenHälter: Path2D = new Path2D;
            let lampe: Path2D = new Path2D;
            let flosseUnten: Path2D = new Path2D;
            let auge: Path2D = new Path2D;
            let pupile: Path2D = new Path2D;
            crc.strokeStyle = "black";
            fisch.moveTo(this.x, this.y);
            fisch.quadraticCurveTo(this.x - 50, this.y + 55, this.x, this.y + 100);
            fisch.quadraticCurveTo(this.x, this.y + 110, this.x + 300, this.y + 100);
            fisch.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 300, this.y);
            fisch.quadraticCurveTo(this.x + 150, this.y - 20, this.x, this.y);
            lampenHälter.moveTo(this.x + 100, this.y - 8);
            lampenHälter.quadraticCurveTo(this.x - 250 , this.y - 200, this.x - 150, this.y);
            lampe.arc(this.x - 150, this.y, 20, 0, Math.PI * 2, false);
            flosseUnten.moveTo(this.x + 100, this.y + 104);
            flosseUnten.quadraticCurveTo(this.x + 200, this.y + 180, this.x + 200, this.y + 102);
            auge.arc(this.x + 20, this.y + 30, 15, 0, Math.PI * 2, false);
            pupile.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, false);
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

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.x = window.innerWidth;
                this.y = Math.random() * 720;
            }
        }
    }
}
namespace Aufgabe11 {
    
    export class Algen {
        x: number;
        y: number;
        dx: number;

        draw(): void {
            let algen: Path2D = new Path2D();
            crc.beginPath();
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x + 80, this.y - 100);
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x - 80, this.y - 100);
            algen.moveTo(this.x, this.y);
            algen.lineTo(this.x, this.y - 100);
            crc.lineWidth = 3;
            crc.strokeStyle = "rgba(0, 180, 0, 1";
            crc.fill(algen);
            crc.stroke(algen);
            algen.closePath();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
        }
    }
}      
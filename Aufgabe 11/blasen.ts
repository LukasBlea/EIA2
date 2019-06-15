namespace Aufgabe11 {
    
    export class Blasen {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;

        draw(): void {
            let blasen: Path2D = new Path2D();
            blasen.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            crc.strokeStyle = "rgba(0, 0, 200, 0.2";
            crc.fillStyle = "rgba(0, 0, 200, 0.3";
            crc.fill(blasen);
            crc.stroke(blasen);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius < window.innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
        }
    }
}
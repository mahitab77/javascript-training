class Shape {
    private color: string = "red";
    private filled: boolean = true;

    constructor(color?: string, filled?: boolean) {
        if (color) this.color = color;
        if (filled !== undefined) this.filled = filled;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    isFilled(): boolean {
        return this.filled;
    }

    setFilled(filled: boolean): void {
        this.filled = filled;
    }

    toString(): string {
        return `Shape[color=${this.color},filled=${this.filled}]`;
    }
}

class Circle extends Shape {
    private radius: number = 1.0;

    constructor(radius?: number, color?: string, filled?: boolean) {
        super(color, filled);
        if (radius) this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    toString(): string {
        return `Circle[${super.toString()},radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    private width: number = 1.0;
    private length: number = 1.0;

    constructor(width?: number, length?: number, color?: string, filled?: boolean) {
        super(color, filled);
        if (width) this.width = width;
        if (length) this.length = length;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getLength(): number {
        return this.length;
    }

    setLength(length: number): void {
        this.length = length;
    }

    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    toString(): string {
        return `Rectangle[${super.toString()},width=${this.width},length=${this.length}]`;
    }
}

class Square extends Rectangle {

    constructor(side?: number, color?: string, filled?: boolean) {
        super(side, side, color, filled);
    }

    getSide(): number {
        return this.getWidth();
    }

    setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    setWidth(width: number): void {
        super.setWidth(width);
        super.setLength(width);
    }

    setLength(length: number): void {
        super.setLength(length);
        super.setWidth(length);
    }

    toString(): string {
        return `Square[${super.toString()}]`;
    }
}

// Example usage
const circle = new Circle(5, "blue", false);
const rectangle = new Rectangle(2, 3, "green", true);
const square = new Square(4, "yellow", false);

const outputElement = document.getElementById('output');
if (outputElement) {
    outputElement.textContent = `
${circle.toString()}
Area: ${circle.getArea()}
Perimeter: ${circle.getPerimeter()}

${rectangle.toString()}
Area: ${rectangle.getArea()}
Perimeter: ${rectangle.getPerimeter()}

${square.toString()}
Area: ${square.getArea()}
Perimeter: ${square.getPerimeter()}
    `;
}

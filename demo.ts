import { Fraction } from "./fraction.ts";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

const oneThird: Fraction = new Fraction(1, 3);
const oneFourth: Fraction = new Fraction(1, 4);
console.log(`one third: ${oneThird} = ${oneThird.toFloat(0.01)}`);
console.log(`one fourth: ${oneFourth} = ${oneFourth.toFloat(0.01)}`);

const sum = oneThird.add(oneFourth);
const difference = oneThird.subtract(oneFourth);
const product = oneThird.multiply(oneFourth);
const quotient = oneThird.divide(oneFourth);
console.log(`sum: ${sum} = ${sum.toFloat(0.01)}`);
console.log(`difference: ${difference} = ${difference.toFloat(0.01)}`);
console.log(`product: ${product} = ${product.toFloat(0.01)}`);
console.log(`quotient: ${quotient} = ${quotient.toFloat(0.01)}`);
console.log(`one third (unchanged): ${oneThird}`);

const parsed = Fraction.parse("5 / 6");
console.log(`${parsed} ~= ${parsed.toFloat(0.01)}`);

const circle: Circle = new Circle(new Point2D(0, 0), 3);
console.log(`circle: C = ${circle.circumference()}`);
console.log(`circle: A = ${circle.area()}`);
console.log(`circle: D = ${circle.diameter()}`);

const rectangle: Rectangle = new Rectangle(
  new Point2D(0, 0),
  new Point2D(2, 3),
);
console.log(`rectangle: C = ${rectangle.circumference()}`);
console.log(`rectangle: A = ${rectangle.area()}`);
console.log(`rectangle: D = ${rectangle.diagonal()}`);

const p: Point2D = new Point2D(0, 0);
const q: Point2D = new Point2D(3, 4);
console.log(`distance p to q: ${p.distanceTo(q)}`);

import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.area();

  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.diameter();

  assertEquals(actual, 10);
});

Deno.test("distance between points (0,0) and (3,4) is 5", () => {
  const p = new Point2D(0, 0);
  const q = new Point2D(3, 4);

  const actual = p.distanceTo(q);

  assertEquals(actual, 5);
});

Deno.test("rectangle from (0,0) to (2,3)", () => {
  const rectangle = new Rectangle(new Point2D(0, 0), new Point2D(2, 3));

  const circumference = rectangle.circumference();
  const area = rectangle.area();
  const diagonal = rectangle.diagonal();

  assertEquals(circumference, 10);
  assertEquals(area, 6);
  assertAlmostEquals(diagonal, Math.sqrt(13), 0.0001);
});

import {
  assertAlmostEquals,
  assertEquals,
  assertThrows,
} from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  const result = left.add(right);

  // Assert
  assertAlmostEquals(result.toFloat(0.01), 0.67);
  assertEquals(left.toString(), "1/3");
  assertEquals(right.toString(), "1/3");
});

Deno.test("subtraction does not mutate operands", () => {
  const left = new Fraction(5, 6);
  const right = new Fraction(1, 6);

  const result = left.subtract(right);

  assertEquals(result.toString(), "2/3");
  assertEquals(left.toString(), "5/6");
  assertEquals(right.toString(), "1/6");
});

Deno.test("multiplication does not mutate operands", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  const result = left.multiply(right);

  assertEquals(result.toString(), "1/2");
  assertEquals(left.toString(), "2/3");
  assertEquals(right.toString(), "3/4");
});

Deno.test("division does not mutate operands", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(4, 5);

  const result = left.divide(right);

  assertEquals(result.toString(), "5/6");
  assertEquals(left.toString(), "2/3");
  assertEquals(right.toString(), "4/5");
});

Deno.test("fraction can be parsed from expression", () => {
  const parsed = Fraction.parse("5 / 6");

  assertEquals(parsed.toString(), "5/6");
  assertAlmostEquals(parsed.toFloat(0.01), 0.83);
});

Deno.test("parsing with wrong syntax throws", () => {
  assertThrows(
    () => Fraction.parse("5/6/7"),
    Error,
    'illegal syntax: "[numerator]/[denominator]" required',
  );
});

Deno.test("parsing with non-numeric values throws", () => {
  assertThrows(
    () => Fraction.parse("foo/bar"),
    Error,
    "non-numeric numerator/denominator",
  );
});

Deno.test("creating a fraction with denominator 0 throws", () => {
  assertThrows(
    () => new Fraction(3, 0),
    Error,
    "denominator must not be 0",
  );
});

Deno.test("parsing a fraction with denominator 0 throws", () => {
  assertThrows(
    () => Fraction.parse("3 / 0"),
    Error,
    "denominator must not be 0",
  );
});

Deno.test("division by zero fraction throws", () => {
  const value = new Fraction(3, 4);
  const zero = new Fraction(0, 5);

  assertThrows(
    () => value.divide(zero),
    Error,
    "denominator must not be 0",
  );
});

Deno.test("cancel keeps 1/1 unchanged", () => {
  const fraction = new Fraction(1, 1);

  const cancelled = fraction.cancel();

  assertEquals(cancelled.toString(), "1/1");
  assertEquals(fraction.toString(), "1/1");
});

Deno.test("cancel reduces 2/4 to 1/2", () => {
  const fraction = new Fraction(2, 4);

  const cancelled = fraction.cancel();

  assertEquals(cancelled.toString(), "1/2");
  assertEquals(fraction.toString(), "1/2");
});

Deno.test("constructor reduces fractions automatically", () => {
  const fraction = new Fraction(2, 4);

  assertEquals(fraction.toString(), "1/2");
});

Deno.test("parse reduces fractions automatically", () => {
  const fraction = Fraction.parse("10 / 20");

  assertEquals(fraction.toString(), "1/2");
});

Deno.test("add returns reduced result automatically", () => {
  const left = new Fraction(1, 6);
  const right = new Fraction(1, 6);

  const result = left.add(right);

  assertEquals(result.toString(), "1/3");
});



import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

const gcdTests = [
  { a: 1, b: 1, gcd: 1 },
  { a: 1, b: 2, gcd: 1 },
  { a: 2, b: 2, gcd: 2 },
  { a: 3, b: 4, gcd: 1 },
  { a: 6, b: 9, gcd: 3 },
  { a: 81, b: 36, gcd: 9 },
  { a: 15, b: 10, gcd: 5 },
  { a: 0, b: 5, gcd: 5 },
  { a: 5, b: 0, gcd: 5 },
];

Deno.test("gcdBruteForce table-driven tests", () => {
  for (const { a, b, gcd } of gcdTests) {
    assertEquals(gcdBruteForce(a, b), gcd);
  }
});

Deno.test("gcdEuclid table-driven tests", () => {
  for (const { a, b, gcd } of gcdTests) {
    assertEquals(gcdEuclid(a, b), gcd);
  }
});
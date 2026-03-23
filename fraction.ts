import { roundTo } from "./utils.ts";
import { gcdEuclid } from "./gcd.ts";

export class Fraction {
  constructor(
    private numerator: number,
    private denominator: number,
  ) {
    if (denominator === 0) {
      throw new Error("denominator must not be 0");
    }

    const gcd = gcdEuclid(Math.abs(numerator), Math.abs(denominator));
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;

    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }
  }

  public add(other: Fraction): Fraction {
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  public subtract(other: Fraction): Fraction {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  public multiply(other: Fraction): Fraction {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  public divide(other: Fraction): Fraction {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  public cancel(): Fraction {
    const gcd = gcdEuclid(
      Math.abs(this.numerator),
      Math.abs(this.denominator),
    );
    return new Fraction(this.numerator / gcd, this.denominator / gcd);
  }

  public toFloat(precision: number): number {
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    return new Fraction(numerator, denominator);
  }
}

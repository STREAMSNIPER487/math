export function gcdBruteForce(a: number, b: number): number {
  const left = Math.abs(a);
  const right = Math.abs(b);

  if (left === 0) {
    return right;
  }
  if (right === 0) {
    return left;
  }

  const start = Math.min(left, right);

  for (let i = start; i >= 1; i--) {
    if (left % i === 0 && right % i === 0) {
      return i;
    }
  }

  return 1;
}

export function gcdEuclid(a: number, b: number): number {
  const left = Math.abs(a);
  const right = Math.abs(b);

  if (left === 0) {
    return right;
  }
  if (right === 0) {
    return left;
  }
  if (left === right) {
    return left;
  }

  if (left > right) {
    return gcdEuclid(left - right, right);
  }
  return gcdEuclid(left, right - left);
}
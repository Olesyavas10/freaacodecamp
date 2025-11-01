function substringDivisibility(n) {
let sum=0;
const primes = [2, 3, 5, 7, 11, 13, 17]
const digits = Array.from({ length: n + 1 }, (_, i) => i.toString()).join('');

function buildPandigital(prefix, remaining) {
    if (prefix.length >= 4) {
      const i = prefix.length - 4;
      const sub = Number(prefix.slice(i + 1, i + 4));
      if (sub % primes[i] !== 0) return; // отбрасываем сразу
    }

    if (remaining.length === 0) {
      sum += Number(prefix);
      return;
    }

    for (const d of remaining) {
      buildPandigital(prefix + d, remaining.replace(d, ""));
    }
  }

  buildPandigital("", digits);
  return sum;
}

console.log(substringDivisibility(5))
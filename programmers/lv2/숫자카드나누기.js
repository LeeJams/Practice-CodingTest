/* 
https://school.programmers.co.kr/learn/courses/30/lessons/135807
*/

function getGcd(n, m) {
  let gcd = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

function checkGcd(gcd, arrayA, arrayB) {
  for (let num of arrayA) {
    if (num % gcd !== 0) {
      return false;
    }
  }
  for (let num of arrayB) {
    if (num % gcd === 0) {
      return false;
    }
  }
  return true;
}

function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  let gcdA = arrayA[0];
  let gcdB = arrayB[0];
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = getGcd(gcdA, arrayA[i]);
    gcdB = getGcd(gcdB, arrayB[i]);
  }

  let checkA = false;
  let checkB = false;
  if (gcdA) checkA = checkGcd(gcdA, arrayA, arrayB);
  if (gcdB) checkB = checkGcd(gcdB, arrayB, arrayA);

  if (checkA && checkB) {
    return Math.max(gcdA, gcdB);
  } else if (checkA) {
    return gcdA;
  } else if (checkB) {
    return gcdB;
  }

  return 0;
}

function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
console.log(solution([14, 35, 77, 707], [18, 30, 102]));

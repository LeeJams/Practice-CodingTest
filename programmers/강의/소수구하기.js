// 에라토스테네스의 체
// n의 제곱근 보다 큰 수로 나뉘지 않는다.
// O(n lon lon n)

function get_primes(num) {
  // 0과 1을 제외한 나머지 숫자 모두를 소수의 후보군으로 등록
  const prime = [false, false, ...Array(num - 1).fill(true)];

  // 에리토스테네스의 체 알고리즘
  // for (let i = 2; i * i <= num; i += 1) {
  //   if (prime[i]) {
  //     for (let j = 2; j * i <= num; j += 1) {
  //       prime[j * i] = false;
  //     }
  //   }
  // }
  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.reduce((acc, cur, idx) => {
    if (cur) {
      acc.push(idx);
    }
    return acc;
  }, []);
}

console.log(get_primes(10));

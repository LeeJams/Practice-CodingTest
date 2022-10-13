/* 
https://school.programmers.co.kr/learn/courses/30/lessons/42578

문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 
다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

종류	이름
얼굴	동그란 안경, 검정 선글라스
상의	파란색 티셔츠
하의	청바지
겉옷	긴 코트

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
같은 이름을 가진 의상은 존재하지 않습니다.
clothes의 모든 원소는 문자열로 이루어져 있습니다.
모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
스파이는 하루에 최소 한 개의 의상은 입습니다.

clothes	                                                                                      return
[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	  5
[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	              3

예제 #1
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
*/

/* 
만약에 옷의 종류가 1개라고 해봅시다. 개수는 a개입니다.
그럼 총 a가지의 경우가 있겠죠?

종류가 2개가 되고 각각의 옷의 개수는 a, b개입니다.
그럼 경우의 수는 a, b, ab가 되므로 조합의 개수는 (a+b) + (ab)가지입니다.

3개가 된다면? (a+b+c) + (ab+bc+ca) + (abc)가지입니다.

어디서 많이 보시지 않았나요? 학창시절에 우리는 다항식을 배우는데 위의 가짓수는 n차식(n = 옷의 종류의 개수) 계수들의 합입니다.

즉 옷의 종류가 3가지고 각각의 옷의 개수가 a, b, c라면 (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)라는 식이 정립됩니다. 보이시죠? 총 조합의 개수가 계수에 다 포함되어 있습니다.

해당 식의 계수의 합을 구하려면 x=1을 대입해주면 됩니다. 그 후 맨 앞 x3 의 계수는 정답에 포함되지 않으므로 마지막에 1을 빼주는 겁니다.
x=1을 대입한 식은 (1+a)(1+b)(1+c)가 되고 그 값에 1을 뺀 후 리턴해주면 정답이 나오는 이유가 그것입니다.
*/

function solution(clothes) {
  const obj = {};
  clothes.forEach((n) => {
    obj[n[1]] = ++obj[n[1]] || 1;
  });

  let answer = 1;
  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);

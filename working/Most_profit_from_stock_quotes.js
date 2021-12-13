/* 
https://www.codewars.com/kata/597ef546ee48603f7a000057/train/javascript

 Return the most profit from stock quotes.

 Stock quotes are stored in an array in order of date. 
The stock profit is the difference in prices in buying and selling stock. 
Each day, you can either buy one unit of stock, 
sell any number of stock units you have already bought, or do nothing. 
Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.

Example:

 [ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 [ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
 [ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
 [ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)
 */

function getMostProfitFromStockQuotes(quotes) {
  let sum = 0;
  while(quotes.length > 0){
    const max = Math.max(...quotes);
    const maxIdx = quotes.indexOf(max);
    console.log("maxIdx : ", maxIdx);
  
    for(let i = 0; i < maxIdx; i++){
      sum += max - quotes[i];
    }

    quotes.splice(0, maxIdx + 1);
    console.log("sum : ", sum);
    console.log(quotes);
  }
  return sum;
}

console.log(getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ])); // 15
console.log(getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ])); // 0
console.log(getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ])); // 18
console.log(getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2])); // 26
console.log(getMostProfitFromStockQuotes([952, 319, 933, 89, 443, 538, 488, 602])); // 1464
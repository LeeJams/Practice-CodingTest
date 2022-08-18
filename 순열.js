const getPermutations = function (arr) {
  const results = [];

  const dfs = (i, arr) => {
    if (i === arr.length) {
      return results.push([...arr]);
    }
    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr);
  return results;
};

console.log(getPermutations([1, 7, 9]));

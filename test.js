
// 영문 기준으로 한줄에 최대 80글자를 출력하고 줄바꿈(\n) 하는 코드를 작성해주세요.
const foo4 = (str) => {
  let idx = 0;
  let newStr = "";
  const maxByte = 80;

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const byte = code >> 7 ? 2 : 1;
    let flag = false;
    idx += byte;

    if (idx > maxByte) {
      newStr += "\n";
      idx = byte;
      flag = true;
    }

    if (flag && str[i] === " ") {
      idx = 0;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};


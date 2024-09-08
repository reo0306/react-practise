function fn(number) {
  return number * 2;
}

console.log(fn(2));

// 引数1つの場合、()は省略可
const fnArrow = number => {
  return number * 2;
}

// Object格納パターン
const fnArrowObj = number => ({
  result: number * 2
})

// 1行でも可能。{ }の中味が複数行の場合は、{ }が必要
//const fnArrow = number =>  number * 2;

console.log(fnArrow(2));
console.log(fnArrowObj(2));
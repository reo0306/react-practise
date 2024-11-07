const Example = () => {
  let str: string = 'Hello';
  str = 'Bye';
  console.log("start" + str);

  let num: number = 102;
  console.log("start" + num);

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;
  console.log(bool);

  let nullish: null = null;
  let undefinedValue: undefined = undefined;
  console.log(nullish);
  console.log(undefinedValue);

  // リテラル型
  let trueValue: true = true;
  let num123: 123 = 123;
  let strHello: 'Hello' = 'Hello';
};

export default Example;

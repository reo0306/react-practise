const Example = () => {
 const repeatStr = (value: string, times: number): string[] => {
  return new Array(times).fill(value);
 }

 const repeatNum = (value: number, times: number): number[] => {
  return new Array(times).fill(value);
 }

 const repeat = <T>(value: T, times: number): T[] => {
  return new Array(times).fill(value);
 }

 const numArry = repeat(10, 3);
 console.log(numArry);

 const strArry = repeat<string>("hello", 3);
 console.log(strArry);
 const boolArry = repeat<boolean>(true, 3);
 console.log(boolArry);
 const byeArry = repeat<"bye">("bye", 3);
 console.log(byeArry);

 //const strArry = repeatStr("hello", 3);
 //console.log(strArry);

 //const strNum = repeatNum(10, 3);
 //console.log(strNum);
};

export default Example;

const Example = () => {
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumBool: string | number | boolean = 'Hello';
  strOrNumBool = true;
  console.log(strOrNumBool);

  let helloOrNumBool: 'Hello' | number | boolean = false;

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';
  console.log(hello);

  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'

  const day: DayOfWeek = "Monday";
  console.log(day);
};

export default Example;

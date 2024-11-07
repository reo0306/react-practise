const Example = () => {
  const array1: number[] = [1,2,3];
  const array2: string[] = ['hello','bye'];
  const array3: Array<number> = [1,2,3];
  const array4: (string | number)[] = [1,'bye'];
  const array5: Array<string | number> = [2,'bye'];

  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array4);
  console.log(array5);

  // ?はなくてもよい、という設定
  type Person = { name: string, age?: number };
  const obj1: Person = { name: 'Taro' };

  const users: Person[] = [
    { name: 'Taro' },
    { name: 'Hanako', age: 30 },
    { name: 'Jiro', age: 30 },
  ];

  console.log(obj1);
  console.log(users);
};

export default Example;

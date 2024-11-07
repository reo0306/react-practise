const Example = () => {
  type User = {
    name: string,
    age: number,
  };

  const user: User = { name: 'taro', age: 10 };
  console.log(user);

  type UserName = string;
  type UserAge = number;
  type UserGender = 'man' | "woman" | "others";

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }

  const userProfile: UserProfile = {
    name: 'Hanako',
    age : 18,
    gender: 'man',
  };
  console.log(userProfile);
};

export default Example;

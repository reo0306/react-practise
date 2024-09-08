import { hello, User } from "./module.js";
// defaultの読み込み。import名は変更できる
import functionB from "./module.js";
// { }にまとめられる
// import functionB, { hello, User } from "./module.js";

hello();
functionB();
const user = new User('Tom');
user.hello();
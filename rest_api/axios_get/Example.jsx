import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    // async awaitで取得する方法
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data);
    }
    getUser();
    // .thenで取得する方法
    /*axios.get('http://localhost:3003/user').then((res) => {
      console.log(res.data);
    });*/
  })
  //return <></>;
};

export default Example;

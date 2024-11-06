import GetUserData from "./components/GetUserData";

export const ENDPOINT_URL = 'http://localhost:3003/users/1';

const Example = () => {
  return (
    <>
      <GetUserData url={ENDPOINT_URL}/>
    </>
  );
};

export default Example;
import { useState } from "react";

const Example = () => {
  const [ count, setCount ] = useState(0);

  return (
    <>
        <CountResult title="カウント" count={count} />
        <CountUpdate setCount={setCount} /> 
    </>
  );
};

const CountResult = ({ title, count }) => <h3>{title}: {count}</h3>

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    {/* アロー関数で前回の値(count)を取得して、+1する */}
    setCount(prev => prev + 1);
  };
  const countDown = () => {
    {/* アロー関数で前回の値(count)を取得して、-1する */}
    setCount(prev => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

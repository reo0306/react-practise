import { useState } from "react";

const Example = () => {
    const [count, setCount ] = useState(0);
    const countUp = () => {
        setCount(count + 1);
        {/* 即時で反映したい場合は、関数で定義する */}
        setCount(prevstate => prevstate + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };

    return(
        <>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;

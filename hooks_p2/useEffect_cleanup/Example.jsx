import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    //console.log('init');
    let intervalId = null;

    intervalId = window.setInterval(() => {
      console.log("interval called");
      setTime(prev => prev + 1);
    }, 1000);

    // Timerが消滅する時に実行（依存配列なし）
    return () => {
      window.clearInterval(intervalId);
      //console.log("end")
    }
  }, [])
  
  useEffect(() => {
    //console.log('updated');

    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)

    // クリーンナップと呼ばれる、後始末
    return () => {
      //console.log("updated end")
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
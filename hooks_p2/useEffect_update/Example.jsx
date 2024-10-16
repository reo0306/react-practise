import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  // 第二引数が空の配列だと、Exampleがレンダリングされたときだけ実行
  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])

  // 依存している値（setTime）を更新しない（無限配列になる）
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);
  }, [time])
  
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;

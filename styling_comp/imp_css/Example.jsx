import { useState } from "react";

import SubButton from "./components/SubButton";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={`btn ${isSelected ? " selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>

      {/* このコンポーネントで読み込むcssが最後なので、上書きされてこのcssが設定される */}
      <SubButton />
      {/* <button className="btn">サブボタン</button> */}
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;

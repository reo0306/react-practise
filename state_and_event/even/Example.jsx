const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。')
  }

  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。')
  }

  return (
    <>
      {/*関数の末尾に()をつけるとJSX作成時に関数が実行される（読み込み時に実行される）*/}
      <button onClick={clickHandler}>クリックしてね</button> 
      <button onClick={clickHandler2}>クリックしてね</button> 
    </>
  );
};

export default Example;

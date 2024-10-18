import { useState, useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  // checkedの値が変わると、コールバック関数が実行される
  useEffect(() => {
    checked && window.alert('checked!');
  }, [checked]);

  return (
    <>
      <label>
        <input type={'checkbox'} value={checked} onClick={() => setChecked((checked) => !checked)} />
        click me
      </label>
    </>
  );
};

export default Example;

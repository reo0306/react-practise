const Example = () => {
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  const nums = [1, 2, 3];
  const sum = (arry) => arry.reduce((accu, curr) => accu + curr);

  return (
    <>
      <div>オブジェクト指向型：{numObj.sum()}</div>
      <div>関数型：{sum(nums)}</div>
    </>
  );
};

export default Example;

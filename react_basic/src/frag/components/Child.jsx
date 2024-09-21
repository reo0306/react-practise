import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim accusantium quisquam sint, autem atque quaerat amet harum explicabo, delectus eius nisi repellendus cupiditate ullam velit repellat, corporis quo eum.</p>
    </Fragment>
  );
};

export default Child;

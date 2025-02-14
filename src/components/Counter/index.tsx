import useCounter from "@/hooks/useCounter";
import classNames from "classnames/bind";
import React from "react";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const CounterComponent: React.FC = () => {
  const { count, decrement, increment, reset } = useCounter();

  return (
    <div className={cx("container")}>
      <h1>Counter</h1>
      <div className={cx("counterValue")}>{count}</div>
      <div className={cx("buttonGroup")}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterComponent;

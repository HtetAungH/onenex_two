import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

const Counter = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  suffix = "",
  delay = 0,
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    let controls;
    let timeout;

    if (isInView) {
      timeout = setTimeout(() => {
        controls = animate(from, to, {
          duration: duration,
          onUpdate: (value) => {
            setCount(value.toFixed(decimals));
          },
          ease: "easeOut",
        });
      }, delay * 1000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (controls) controls.stop();
    };
  }, [from, to, duration, decimals, delay, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;

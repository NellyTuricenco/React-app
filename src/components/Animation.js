import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Animation = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -50, y: 80, opacity: 0, width: 15, height: 15 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 50, height: 50 });
    },
    leave: { x: 50, y: 80, opacity: 0 },
  });
  return (
    <div className="animation">
      <button
        className="animation__btn"
        onClick={() => {
          setItems((v) =>
            v.length
              ? []
              : [
                  { y: 0, delay: 200 },
                  { y: 20, delay: 400 },
                  { y: 40, delay: 600 },
                ]
          );
        }}
      >
        {items.length ? "hide" : "show"}
      </button>
      <div className="animation__container">
        {transition((style, item) =>
          item ? <animated.div style={style} className="item" /> : ""
        )}
      </div>
    </div>
  );
};

export default Animation;

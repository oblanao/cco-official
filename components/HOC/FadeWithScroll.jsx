import ScrollWatcher from "./ScrollWatcher";
import { useEffect } from "react";

const opacities = {
  10: 0.15,
  25: 0.3,
  50: 1,
  75: 0.3,
  90: 0.15,
};

const getOpacity = (scrollY) => {
  /**
   * distance = 0, opacity = 1
   * distance = 25, opacity = 0.5
   * distance = 50, opacity = 0
   */
  const distFromMiddle = Math.abs(50 - scrollY);
  if (distFromMiddle <= 35) {
    return 1;
  }
  const percentFromMiddle = distFromMiddle / 50;
  return 1 - percentFromMiddle;
};

const getSpeed = (scrollSpeed) => {
  // When speed is 100, transition is 0
  // When speed is 50, transition is 0.1
  // When speed is 0, transition is 0.2
  const realSpeed =
    (Math.abs(scrollSpeed) <= 100 && Math.abs(scrollSpeed)) || 100;
  return 0.2 - Math.round((100 - realSpeed) / 100);
};

export default function FadeWithScroll(props) {
  const id = `el-to-watch-${props.id}`;

  const updateFadeClass = (elementId, scrollY, scrollSpeed) => {
    const el = document.getElementById(elementId);
    const newOpacity = getOpacity(scrollY);
    const newSpeed = getSpeed(scrollSpeed);
    el.style.opacity = newOpacity;
    el.style.transition = `opacity ${newSpeed}s`;
  };
  return (
    <ScrollWatcher
      id={id}
      onViewportScroll={updateFadeClass}
      onEnter={props.onEnter}
    >
      {props.children}
    </ScrollWatcher>
  );
}

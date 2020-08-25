import ScrollWatcher from "./ScrollWatcher";
import { isMobile } from "../../helpers/functions";
import { useEffect, useState } from "react";

const getSpeed = (scrollSpeed) => {
  // When speed is 100, transition is 0
  // When speed is 50, transition is 0.1
  // When speed is 0, transition is 0.2
  const realSpeed =
    (Math.abs(scrollSpeed) <= 100 && Math.abs(scrollSpeed)) || 100;
  return 0.2 - Math.round((100 - realSpeed) / 100);
};

export default function FadeWithScroll(props) {
  const [withAnimation, setAnimation] = useState(!props.noMobile);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const minWidth = 600;
    if (screenWidth > minWidth) {
      console.log("setting to true");
      setAnimation(true);
    }
  }, [props.noMobile]);
  const id = `el-to-watch-${props.id}`;
  const getOpacity = (scrollY) => {
    /**
     * distance = 0, opacity = 1
     * distance = 25, opacity = 0.5
     * distance = 50, opacity = 0
     */

    const distFromMiddle = Math.abs(50 - scrollY);
    if (distFromMiddle <= 15) {
      return props.topValue || 1;
    }
    const percentFromMiddle = (distFromMiddle - 15) / 50;
    return 1 - percentFromMiddle;
  };
  const updateFadeClass = (elementId, scrollY, scrollSpeed) => {
    if (withAnimation) {
      const el = document.querySelector(elementId);
      const newOpacity = getOpacity(scrollY);
      el.style.opacity = newOpacity;
      el.style.transition = `opacity ${newSpeed}s`;
      const newSpeed = getSpeed(scrollSpeed);
    }
  };

  return (
    <ScrollWatcher
      key={withAnimation}
      id={id}
      onViewportScroll={updateFadeClass}
      onEnter={props.onEnter}
      targetSelector={props.targetSelector}
    >
      {props.children}
    </ScrollWatcher>
  );
}

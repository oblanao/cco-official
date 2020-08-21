import ClassWithScroll from "../HOC/ClassWithScroll";
import BlackMiddleLine from "./BlackMiddleLine";

export default function AnimatedBlackMiddleLine(props) {
  const getElClass = (scrollY) => {
    const diff = 50 - scrollY;
    const absoluteDiff = Math.abs(diff);
    console.log("diff", diff);
    if (absoluteDiff > 45) {
      return diff > 0 ? "bg-fill-1-reverse" : "bg-fill-1";
    }
    if (absoluteDiff > 37) {
      return diff > 0 ? "bg-fill-2-reverse" : "bg-fill-2";
    }
    if (absoluteDiff > 30) {
      return diff > 0 ? "bg-fill-3-reverse" : "bg-fill-3";
    }
    if (absoluteDiff > 25) {
      return diff > 0 ? "bg-fill-4-reverse" : "bg-fill-4";
    }
    return diff > 0 ? "bg-fill-5-reverse" : "bg-fill-5";
  };
  const updateRule = (elementId, scrollY, scrollSpeed) => {
    console.log("elementID", elementId);
    const elClass = getElClass(scrollY);
    const targetEl = document.querySelector(elementId);
    if (!targetEl) {
      throw new Error(elementId);
    }
    targetEl.classList.remove("bg-fill-1");
    targetEl.classList.remove("bg-fill-2");
    targetEl.classList.remove("bg-fill-3");
    targetEl.classList.remove("bg-fill-4");
    targetEl.classList.remove("bg-fill-5");
    targetEl.classList.remove("bg-fill-1-reverse");
    targetEl.classList.remove("bg-fill-2-reverse");
    targetEl.classList.remove("bg-fill-3-reverse");
    targetEl.classList.remove("bg-fill-4-reverse");
    targetEl.classList.remove("bg-fill-5-reverse");
    targetEl.classList.add(elClass);
  };
  return (
    <ClassWithScroll
      id={props.id}
      updateRule={updateRule}
      targetSelector={".black-line > div"}
    >
      <BlackMiddleLine
        id={props.id}
        firstLine={props.firstLine}
        blackLine={props.blackLine}
        lastLine={props.lastLine}
        textColor={props.textColor || "black"}
        bgColor={props.bgColor || "transparent"}
        onClick={props.onClick || console.log}
        startAnimation={props.startAnimation}
        delay={props.delay}
      />
    </ClassWithScroll>
  );
}

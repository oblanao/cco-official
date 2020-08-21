import ScrollWatcher from "./ScrollWatcher";

export default function ClassWithScroll(props) {
  const id = `el-to-watch-${props.id}`;
  const removePrevClasses = (el) => {
    const allClasses = Object.values(props.updateRules);
    for (let i = 0; i < allClasses.length; i++) {
      el.classList.remove(allClasses[i]);
    }
  };
  const handleScroll = (elementId, scrollY, scrollSpeed) => {
    // const steps = Object.keys(props.updateRules)
    //   .map((step) => Number(step))
    //   .sort()
    //   .reverse();
    const targetEl = document.querySelector(`#${id} ${props.targetSelector}`);
    // console.log(steps);
    // for (let i = 0; i < steps.length; i++) {
    //   if (steps[i]>scrollY) {
    const newClass = props.updateRule(scrollY);
    props.removeClasses();
    // targetEl.classList.remove(prevClass);
    targetEl.classList.add(newClass);
    console.log("at scroll", scrollY, "applying class", newClass);
  };
  return (
    <ScrollWatcher
      id={id}
      onViewportScroll={props.updateRule}
      onEnter={props.onEnter}
    >
      {props.children}
    </ScrollWatcher>
  );
}

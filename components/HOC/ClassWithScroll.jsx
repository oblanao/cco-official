import ScrollWatcher from "./ScrollWatcher";

export default function ClassWithScroll(props) {
  const id = `el-to-watch-${props.id}`;

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

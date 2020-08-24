import { useEffect } from "react";

export default function CrazyBorder(props) {
  useEffect(() => {
    const node = document.createElement("DIV");
    node.classList.add("crazy-border-last-line");
    document.getElementById(props.id).appendChild(node);
  }, []);
  return (
    <>
      <div id={props.id} className="crazy-border">
        {props.children}
      </div>
    </>
  );
}

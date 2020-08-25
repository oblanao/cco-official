export default function AnimatedTyping(props) {
  const duration = (props.duration && `${props.duration / 1000}s`) || "5s";
  const delay = (props.delay && `${props.delay / 1000}s`) || "0s";
  const color = props.color || "black";
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path id="path">
        <animate
          attributeName="d"
          from="m0,110 h0"
          to="m0,110 h1100"
          dur={duration}
          begin={delay}
          repeatCount="indefinite"
        />
      </path>
      <text font-size="26" fill={color}>
        <textPath xlinkHref="#path">{props.text}</textPath>
      </text>
    </svg>
  );
}

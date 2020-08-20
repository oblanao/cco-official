import VisibilitySensor from "react-visibility-sensor";
import { vh } from "../../helpers/functions";
import { useEffect, useState } from "react";

export default function BlackMiddleLine(props) {
  const [topOffset, setOffset] = useState(false);
  useEffect(() => {
    // const offset = vh(document) * 30;
    // console.log(offset);
    // setOffset(offset);{
    if (props.startAnimation) {
      startAnimation();
    }
  }, [props.startAnimation]);
  const { firstLine, blackLine, lastLine, delay, id } = props;
  const elementId = `black-effect-container-${id}`;
  // const onChange = (isVisible) => {
  //   console.log(elementId);
  //   console.log("isVisible ", isVisible);
  //   if (isVisible) {
  //     startAnimation();
  //   }
  // };
  const startAnimation = () => {
    const el = document.getElementById(elementId);
    const lineEl = el.querySelector(".black-line");
    setTimeout(() => {
      el.classList.remove("opacity-0");
      setTimeout(() => lineEl.classList.add("animated"), 250);
    }, delay);
  };
  const blakckLineBgColor = props.bgColor || "white";
  return (
    <>
      <style jsx>{`
        .black-middle-line__container {
          color: ${props.textColor || "#fff"};
          text-transform: uppercase;
          font-size: 36px;
          font-weight: bold;
          cursor: ${props.onClick ? "pointer" : "normal"};
          padding: 1rem;
          border-left: 1px solid #000;
          border-right: 1px solid #000;
          position: relative;
          margin: auto 1rem;
          transition: opacity 0.75s ease-in;
          min-width: 300px;
        }
        .black-middle-line__container::before,
        .black-middle-line__container::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #6d0300;
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
        }
        .black-middle-line__container::before {
          right: calc(100% - 15px);
        }
        .black-middle-line__container::after {
          left: calc(100% - 15px);
        }
        .last-line::before,
        .last-line::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #6d0300;
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
        }
        .last-line::before {
          right: calc(100% - 15px);
        }
        .last-line::after {
          left: calc(100% - 15px);
        }
        .black-middle-line__container > div {
          text-align: center;
        }
        .black-line > div {
          background: linear-gradient(
            to right,
            black 50%,
            ${blakckLineBgColor} 50%
          );
          background-size: 200% 100%;
          background-position: right bottom;
          transition: all 1s ease-in;

          margin: 0.45rem auto;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .black-line.animated > div {
          animation: bgChange 0.75s cubic-bezier(0.51, 0.92, 0.24, 1.15);
          animation-fill-mode: forwards;
        }
        .black-text {
          color: black;
          animation: colorChange 0.35s ease-in;
          animation-delay: 0.15s;
          animation-fill-mode: forwards;
        }
        .black-middle-line__container:hover::before {
          right: calc(62% + 5px);
        }
        .black-middle-line__container:hover::after {
          left: calc(38% + 5px);
        }
        .black-middle-line__container:hover .last-line::before {
          right: calc(38% + 5px);
        }
        .black-middle-line__container:hover .last-line::after {
          left: calc(62% + 5px);
        }
        @keyframes bgChange {
          from {
            background: linear-gradient(
              to right,
              black 50%,
              ${blakckLineBgColor} 50%
            );
            background-size: 200% 100%;
            background-position: right bottom;
          }
          to {
            background-position: left bottom;
          }
        }
        @keyframes colorChange {
          from {
            color: black;
          }
          to {
            color: white;
          }
        }
        @media (max-width: 991px) {
          .black-middle-line__container {
            margin-bottom: 2rem;
          }
        }
      `}</style>
      {/* <VisibilitySensor
        onChange={onChange}
        offset={{
          bottom: topOffset,
        }}
      > */}
      <div id={elementId} className="black-middle-line__container opacity-0">
        <div>{firstLine}</div>
        <div className="black-line">
          <div>
            <span className="black-text">{blackLine}</span>
          </div>
        </div>
        <div className="last-line">{lastLine}</div>
      </div>
      {/* </VisibilitySensor> */}
    </>
  );
}

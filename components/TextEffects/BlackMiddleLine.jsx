import VisibilitySensor from "react-visibility-sensor";
import { vh } from "../../helpers/functions";
import { useEffect, useState } from "react";
import ClassWithScroll from "../HOC/ClassWithScroll";

export default function BlackMiddleLine(props) {
  const [topOffset, setOffset] = useState(false);
  useEffect(() => {
    if (props.startAnimation) {
      startAnimation();
    }
  }, [props.startAnimation]);
  const { firstLine, blackLine, lastLine, delay, id } = props;
  const elementId = `black-effect-container-${id}`;

  const startAnimation = () => {
    const el = document.getElementById(elementId);
    const lineEl = el.querySelector(".black-line");
    setTimeout(() => {
      el.classList.remove("opacity-0");
      setTimeout(() => lineEl.classList.add("animated"), 250);
    }, delay);
  };
  const blakckLineBgColor = props.bgColor || "black";
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
          position: relative;
          transition: opacity 0.75s ease-in;
        }

        .black-middle-line__container > div {
          text-align: center;
        }
        .black-line > div {
          background: linear-gradient(
            to right,
            ${blakckLineBgColor} 50%,
            transparent 50%
          );
          background-size: 200% 100%;
          background-position: 90% 0%;
          transition: all 2s cubic-bezier(0.51, 0.92, 0.24, 1.15);

          margin: 0.45rem auto;
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .black-line.animated > div {
           {
            /* animation: bgChangeLeft 0.75s cubic-bezier(0.51, 0.92, 0.24, 1.15); */
          }
           {
            /* animation-fill-mode: forwards; */
          }
        }
        .black-text {
          background-color: white;
          background-image: linear-gradient(to right, white 50%, black 50%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          transition: all 0.3s ease;
          color: ${props.textColor} {
            /* color: black; */
          }
           {
            /* animation: colorChange 0.35s ease-in; */
          }
           {
            /* animation-delay: 0.15s; */
          }
           {
            /* animation-fill-mode: forwards; */
          }
        }
        .bg-fill-1 {
          background-position: 90% 0% !important;
        }
        .bg-fill-2 {
          background-position: 70% 0% !important;
        }
        .bg-fill-3 {
          background-position: 50% 0% !important;
        }
        .bg-fill-4 {
          background-position: 30% 0% !important;
        }
        .bg-fill-5 {
          background-position: 0% 0% !important;
        }
        .bg-fill-1-reverse {
          background-position: -90% 0% !important;
        }
        .bg-fill-1-none {
          background-position: 0% 0% !important;
        }
        .bg-fill-2-reverse {
          background-position: -70% 0% !important;
        }
        .bg-fill-2-none {
          background-position: 0% 0% !important;
        }
        .bg-fill-3-reverse {
          background-position: -50% 0% !important;
        }
        .bg-fill-3-none {
          background-position: 0% 0% !important;
        }
        .bg-fill-4-reverse {
          background-position: -30% 0% !important;
        }
        .bg-fill-4-none {
          background-position: 0% 0% !important;
        }
        .bg-fill-5-reverse {
          background-position: -10% 0% !important;
        }
        .bg-fill-5-none {
          background-position: 0% 0% !important;
        }
        .text-fill-1 {
          background-position: 99% 0% !important;
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
        @keyframes bgChangeLeft {
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

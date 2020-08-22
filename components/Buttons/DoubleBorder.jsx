import { useEffect, useState } from "react";

export default function DoubleBorderButton(props) {
  const [effectClass, setClass] = useState("no-effect");
  const calculateFontSize = () => {
    const numLetters = props.text && props.text.length;
    if (numLetters > 12) {
      return "1.1rem";
    }
    if (numLetters > 10) {
      return "1.3rem";
    }
    if (numLetters > 8) {
      return "1.5rem";
    }
    return "1.75rem";
  };
  useEffect(() => {
    if (props.startAnimation) {
      const makeVisible = () => {
        setClass("no-effect forced-opacity");
      };
      const makeBorders = () => {
        setClass("forced-opacity");
      };
      setTimeout(() => {
        setTimeout(() => makeVisible(), 200);
        setTimeout(() => makeBorders(), 1000);
      }, props.initialDelay);
    }
  }, [props.startAnimation]);
  return (
    <>
      <style jsx>{`
        .forced-opacity {
          opacity: 1 !important;
          transition: opacity 0.6s ease-in !important;
        }
        button.double-border-button {
          min-width: 200px;
          font-size: ${calculateFontSize()};
          ${props.mainColor && `color: ${props.mainColor}`};
          font-family: "Queental";
          padding: 20px 40px;
          background: none;
          border: none;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 3px;
          cursor: pointer;
          transition-delay: ${(props.withAnimation && "1s") || "0"};
        }
        button.double-border-button:after,
        button.double-border-button:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border: 2px solid ${props.mainColor || `#000`};
          transition: all 0.2s ease-in;
        }
        button.double-border-button:after {
          -webkit-transform: translate(3px, 3px);
          transform: translate(3px, 3px);
        }
        button.double-border-button:before {
          -webkit-transform: translate(-3px, -3px);
          transform: translate(-3px, -3px);
        }
        button.double-border-button:hover:after,
        button.double-border-button:hover:before,
        button.double-border-button.no-effect:after,
        button.double-border-button.no-effect:before {
          -webkit-transform: translate(0);
          transform: translate(0);
        }
        @media (max-width: 991px) {
          button.double-border-button {
            font-size: ${props.text.length > "1rem"};
          }
        }
        @media (max-width: 576px) {
          button.double-border-button {
            font-size: 1.13rem;
          }
        }
      `}</style>
      <button
        className={`double-border-button ${effectClass} ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
}

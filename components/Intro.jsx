import { useEffect, useState } from "react";
import { addClass, removeClass } from "../helpers/functions";

export default function Intro(props) {
  const { debug, callback } = props;
  const [windowHeight, setHeight] = useState(0);
  useEffect(() => {
    // TODO: disable scrolling
    setHeight(window.innerHeight);
    setTimeout(
      function () {
        addClass(".main-loading-text.one", "opacity-0");
      },
      debug ? 0 : 2300
    );
    setTimeout(
      function () {
        addClass(".main-loading-text.two", "opacity-0");
      },
      debug ? 0 : 2550
    );
    setTimeout(
      function () {
        addClass(".main-loading-text.three", "opacity-0");
      },
      debug ? 0 : 2800
    );
    setTimeout(
      function () {
        addClass(".loading-side-move", "loading-move-left");
      },
      debug ? 0 : 2300
    );
    setTimeout(
      function () {
        addClass(".main-loading-text.four", "opacity-0");
        console.log(typeof callback);
        if (typeof callback === "function") {
          callback();
        }
      },
      debug ? 0 : 4250
    );
  });
  return (
    <>
      <style jsx>{`
        .loading-side-move {
          position: relative;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: -webkit-box;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-transition: -webkit-transform 1.4s ease;
          transition: -webkit-transform 1.4s ease;
          transition: transform 1.4s ease;
          transition: transform 1.4s ease, -webkit-transform 1.4s ease;
        }
        .loading-move-left {
          -webkit-transform: translate(-42%, 0px);
          -ms-transform: translate(-42%, 0px);
          transform: translate(-42%, 0px);
        }

        .main-inner {
          letter-spacing: 0.25rem;

          left: 0;
          top: 0;
          right: auto;
          bottom: auto;
          -webkit-box-direction: normal;
          -webkit-box-orient: vertical;
          position: absolute;
          display: flex;
          width: 100vw;
          height: ${`${windowHeight}px`};
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-transition: opacity 0.5s ease;
          transition: opacity 0.5s ease;
        }

        .main-loading-text {
          margin: 0 0.4vw;
          -webkit-transition: opacity 0.5s ease;
          transition: opacity 0.5s ease;
          color: #fff;
          font-size: 3.1vw;
          line-height: 3.9vw;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
        }
        @media screen and (max-width: 991px) {
          .main-loading-text {
            font-size: 3.2vw;
            line-height: 4.7vw;
          }
        }
        @media screen and (max-width: 479px) {
          .loading-move-left {
            -webkit-transform: translate(0px, -38%);
            -ms-transform: translate(0px, -38%);
            transform: translate(0px, -38%);
          }
          .loading-side-move {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .main-loading-text {
            font-size: 8vw;
            line-height: 9.5vw;
          }
          .main-loading-text:not(:last-child) {
            margin-bottom: 0.5rem;
          }
          .main-inner {
            height: 100%;
          }
        }
      `}</style>
      <div className="main-inner">
        <div className="loading-side-move">
          <div className="main-loading-text one">Chess Coders</div>
          <div className="main-loading-text two">keeps you</div>
          <div className="main-loading-text three">a move</div>
          <div className="main-loading-text four">ahead</div>
        </div>
      </div>
    </>
  );
}

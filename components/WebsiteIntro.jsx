import { useEffect, useState } from "react";
import { Header, MainPage } from ".";
import { addClass, removeClass } from "../helpers/functions";

export default function WebsiteIntro(props) {
  const { debug, showIntro } = props;
  const [introOut, setIntroOut] = useState(false);
  const playIntro = (debug) => {
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
        addClass(".loading-page", "height-0");
      },
      debug ? 0 : 4000
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
      },
      debug ? 0 : 4250
    );
    setTimeout(
      function () {
        removeClass(".outer-wrapper", "moved-down");
      },
      debug ? 0 : 4500
    );
    setTimeout(
      function () {
        const intro = document.querySelector(".loading-page-inner");
        setIntroOut(true);
        if (intro) {
          intro.remove();
        }
      },
      debug ? 0 : 5250
    );
  };
  useEffect(() => {
    if (showIntro) {
      // TODO: disable scrolling
      playIntro(debug);
    } else {
      removeClass(".outer-wrapper", "moved-down");
      const intro = document.querySelector(".loading-page-inner");
      setIntroOut(true);
      if (intro) {
        intro.remove();
      }
    }
  }, []);
  return (
    <>
      <style jsx>{`
        .loading-page,
        .loading-page-inner,
        .outer-wrapper {
          left: 0;
          top: 0;
          right: auto;
          bottom: auto;
        }

        .loading-page {
          background-color: #000;
          position: fixed;
          z-index: 9999999999;
          display: block;
          overflow: hidden;
          width: 100%;
          height: 100%;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-transition: opacity 1s cubic-bezier(0.86, 0, 0.07, 1),
            height 1.25s cubic-bezier(0.86, 0, 0.07, 1);
          transition: opacity 1s cubic-bezier(0.86, 0, 0.07, 1),
            height 1.25s cubic-bezier(0.86, 0, 0.07, 1);
        }

        .loading-page-inner {
          -webkit-box-direction: normal;
          -webkit-box-orient: vertical;
          position: absolute;
          display: flex;
          width: 100vw;
          height: 100vh;
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

        .outer-wrapper {
          display: flex;
          width: 100vw;
          min-height: 100vh;
          flex-direction: column;
        }

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

        .loading-move-left {
          -webkit-transform: translate(-42%, 0px);
          -ms-transform: translate(-42%, 0px);
          transform: translate(-42%, 0px);
        }
        .moved-down {
          transform: translate(0, 100%);
        }
        .outer-wrapper {
          background: #fff;
          width: 100%;
          height: 100%;
          -webkit-transition: transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
          transition: transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .main-page {
          background: #f2f2f2;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        @media screen and (max-width: 991px) {
          .main-loading-text {
            font-size: 3.8vw;
            line-height: 4.7vw;
          }
        }

        @media screen and (max-width: 479px) {
          .loading-move-left {
            -webkit-transform: translate(0px, -38%);
            -ms-transform: translate(0px, -38%);
            transform: translate(0px, -38%);
          }
          .loading-page-inner {
            height: 100%;
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
        }
      `}</style>
      <div className="loading-page">
        {showIntro && (
          <div className="loading-page-inner">
            <div className="loading-side-move">
              <div className="main-loading-text one">Chess Coders</div>
              <div className="main-loading-text two">keeps you</div>
              <div className="main-loading-text three">a move</div>
              <div className="main-loading-text four">ahead</div>
            </div>
          </div>
        )}
        <div className="outer-wrapper moved-down">
          <div className="fullscreen-wrapper">
            <div className="main-page">
              <Header withAnimation={introOut} />
              <MainPage withAnimation={introOut} />
              {/* <p className="">Haida</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { MainPage } from ".";
import { addClass, removeClass } from "../helpers/functions";
import Intro from "./Intro";
import { disableHoverOnScrollDebounce } from "../site.config";

export default function WebsiteHome(props) {
  const { debug, showIntro } = props;
  const [introOut, setIntroOut] = useState(false);
  const [windowHeight, setHeight] = useState(0);
  const hideIntroShowSite = () => {
    addClass(".main", "height-0");
    const intro = document.querySelector(".main-inner");
    setIntroOut(true);
    if (intro) {
      intro.remove();
    }
    setIntroOut(true);
  };

  const onIntroFinished = () => {
    setTimeout(
      function () {
        removeClass(".outer-wrapper", "moved-down");
      },
      debug ? 0 : 200
    );
    setTimeout(
      function () {
        const intro = document.querySelector(".main-inner");
        setIntroOut(true);
        if (intro) {
          intro.remove();
        }
      },
      debug ? 0 : 850
    );
    setTimeout(
      function () {
        addClass(".main", "height-0");
      },
      debug ? 0 : 100
    );
  };
  useEffect(() => {
    setHeight(windowHeight);
    if (!showIntro) {
      hideIntroShowSite();
    }
    //disable scroll on hover
    let body = document.body,
      timer;

    window.addEventListener(
      "scroll",
      function () {
        clearTimeout(timer);

        if (!body.classList.contains("disable-hover")) {
          body.classList.add("disable-hover");
        }

        timer = setTimeout(function () {
          body.classList.remove("disable-hover");
        }, disableHoverOnScrollDebounce);
      },
      false
    );
  }, [props.showIntro]);
  return (
    <>
      <style jsx>{`
        .disable-hover,
        .disable-hover * {
          pointer-events: none !important;
        }
        .main,
        .outer-wrapper {
          left: 0;
          top: 0;
          right: auto;
          bottom: auto;
        }

        .main {
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

        .outer-wrapper {
          display: flex;
          width: 100vw;
          min-height: ${`${windowHeight}px`};
          flex-direction: column;
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
      `}</style>
      <div className="main">
        {showIntro && <Intro debug={debug} callback={onIntroFinished} />}
        <div
          className={showIntro ? "outer-wrapper moved-down" : "outer-wrapper"}
          // element should not start with .moved-down, because of animation duration
        >
          <MainPage withAnimation={introOut} />
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

export default function ScrollWatcher(props) {
  const { children, id } = props;
  const elementId = `el-to-watch-${id}`;
  const elInViewport = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= -rect.height && rect.bottom <= windowHeight + rect.height
    );
  };
  useEffect(() => {
    var checkScrollSpeed = (function (settings) {
      settings = settings || {};

      var lastPos,
        newPos,
        timer,
        delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
          // && newPos < maxScroll
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
    })();
    const watchScroll = () => {
      if (elInViewport()) {
        if (typeof props.onEnter === "function") {
          props.onEnter(elementId);
        }
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elOffsetTop = document.getElementById(elementId).offsetTop;
        const middleElOffsetTop =
          elOffsetTop + document.getElementById(elementId).offsetHeight / 2;
        const elScroll = document.querySelector(".fullscreen-wrapper")
          .scrollTop;
        console.log(elScroll);
        // const windowScroll = window.scrollY;
        const windowScroll = elScroll;
        const viewportOffsetToMiddle = middleElOffsetTop - windowScroll;
        const viewportOffsetToTop = elOffsetTop - windowScroll;
        console.log(
          "top: ",
          viewportOffsetToTop,
          "    middle: ",
          viewportOffsetToMiddle
        );
        const relativeViewportOffset = Math.round(
          (viewportOffsetToMiddle / windowHeight) * 100
        );
        const scrollSpeed = checkScrollSpeed();
        props.onViewportScroll(elementId, relativeViewportOffset, scrollSpeed);
      }
    };
    watchScroll();
    const scrollListener = () => {
      document
        .querySelector(".fullscreen-wrapper")
        .addEventListener("scroll", watchScroll);
      window.addEventListener("scroll", watchScroll);
    };
    scrollListener();
    return () => {
      document
        .querySelector(".fullscreen-wrapper")
        .removeEventListener("scroll", watchScroll);
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);
  return (
    <>
      <style jsx>{`
        .scroll-watcher {
          transition: opacity 0.2s ease-in;
          opacity: 0;
          font-size: 8rem;
        }
      `}</style>
      <div id={elementId} className="scroll-watcher">
        {props.children}
      </div>
    </>
  );
}

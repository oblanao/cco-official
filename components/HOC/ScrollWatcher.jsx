import { useEffect, useState } from "react";

export default function ScrollWatcher(props) {
  const { children, id, targetSelector } = props;
  const elementId = id;
  const debug = elementId === "website-header";

  const elTopInViewport = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    if (debug) {
      console.log("rect.top > 0 (", rect.top, " > 0) ? ", rect.top > 0);
      console.log(
        "rect.top < windowHeight (",
        rect.top,
        " < ",
        windowHeight,
        ") ? ",
        rect.top < windowHeight
      );
    }
    return rect.top > 0 && rect.top < windowHeight;
  };
  const elBottomInViewport = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    return rect.bottom > 0 && rect.bottom < windowHeight;
  };
  const elInViewport = () => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const el = document.getElementById(elementId);
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= -rect.height && rect.bottom <= windowHeight + rect.height
    );
  };
  const getInViewport = () =>
    Number(localStorage.getItem(`inViewport-${elementId}`));
  const setInViewport = (val) =>
    localStorage.setItem(`inViewport-${elementId}`, Number(val));

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
    const inViewPortCheck = props.watchTop
      ? elTopInViewport
      : props.watchBottom
      ? elBottomInViewport
      : elInViewport;
    const inViewport = getInViewport();
    const watchScroll = () => {
      if (inViewPortCheck()) {
        if (!inViewport) {
          setInViewport(true);
          if (debug) console.log("element ", elementId, " has entered");
          if (typeof props.onEnter === "function") {
            props.onEnter(elementId);
          }
        }
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const rect = document.getElementById(elementId).getBoundingClientRect();
        const positionY = rect.y;
        const positionYAtMiddle = rect.y + rect.height / 2;
        const relativeViewportOffset = Math.round(
          (positionYAtMiddle / windowHeight) * 100
        );
        const scrollSpeed = checkScrollSpeed();
        const fullSelector = `#${elementId} ${targetSelector}`;
        if (typeof props.onViewportScroll === "function") {
          props.onViewportScroll(
            fullSelector,
            relativeViewportOffset,
            scrollSpeed
          );
        }
      } else {
        if (inViewport) {
          setInViewport(false);
          if (typeof props.onExit === "function") {
            props.onExit(elementId);
          }
        }
      }
    };
    watchScroll();
    const scrollListener = () => {
      document
        .querySelector(".fullscreen-wrapper")
        .addEventListener("scroll", watchScroll);
      window.addEventListener("scroll", () => watchScroll(inViewport));
    };
    scrollListener();
    return () => {
      document
        .querySelector(".fullscreen-wrapper")
        .removeEventListener("scroll", watchScroll);
      window.removeEventListener("scroll", () => watchScroll(inViewport));
    };
  }, []);
  return (
    <>
      <div id={elementId} className="scroll-watcher">
        {children}
      </div>
    </>
  );
}

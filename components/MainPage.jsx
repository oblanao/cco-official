import { useEffect } from "react";
import { Fullscreen, Header } from ".";
import HomeLanding from "./HomeLanding";
import HomeServices from "./HomeServices";
import HomeAboutUs from "./HomeAboutUs";
import HomePortfolio from "./HomePortfolio";
import ScrollWatcher from "./HOC/ScrollWatcher";

export default function MainPage(props) {
  useEffect(() => {
    if (props.withAnimation) {
      const elements = document.querySelectorAll(".after-intro");
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        setTimeout(() => {
          el.classList.remove("opacity-0");
        }, i * 75);
      }
    }
  });
  const onHeaderExit = (headerId) => {
    const headerEl = document.getElementById(headerId).querySelector("header");
    const contentEl = document.querySelector(".fullscreen-wrapper");

    headerEl.classList.add("header-floating");
    contentEl.classList.add("header-padding");
    headerEl.classList.remove("header-closed");
    headerEl.classList.add("header-open");
    contentEl.addEventListener("scroll", () => {
      if (contentEl.scrollTop === 0) {
        onHeaderEnter(headerId);
      }
    });
  };
  const onHeaderEnter = (headerId) => {
    const headerEl = document.getElementById(headerId).querySelector("header");
    const contentEl = document.querySelector(".fullscreen-wrapper");
    headerEl.classList.remove("header-floating");
    contentEl.classList.remove("header-padding");
    headerEl.classList.add("header-closed");
    headerEl.classList.remove("header-open");
    contentEl.removeEventListener("scroll", () => {
      if (contentEl.scrollTop === 83) {
        onHeaderEnter(headerId);
      }
    });
  };
  const updatePortfolioSection = (elementId, scrollY, speed) => {
    console.log(scrollY);
    const el = document.querySelector(".content-fourth");
    if (scrollY < 90) {
      return (el.style.background = "black");
    }
    if (scrollY < 100) {
      return (el.style.background = "rgba(0,0,0,0.9)");
    }
    if (scrollY < 110) {
      return (el.style.background = "rgba(0,0,0,0.87)");
    }
    if (scrollY < 120) {
      return (el.style.background = "rgba(0,0,0,0.85)");
    }
    if (scrollY < 130) {
      return (el.style.bakground = "rgba(0,0,0,0.82)");
    }
    return (el.style.background = "rgba(0,0,0,0.8)");
  };
  return (
    <>
      <style jsx>{`
        .main-page {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <Fullscreen>
        <div className="main-page">
          <ScrollWatcher id="website-header" onExit={onHeaderExit} watchBottom>
            <Header withAnimation={props.withAnimation} />
          </ScrollWatcher>
          <HomeLanding withAnimation={props.withAnimation} />
          <HomeAboutUs withAnimation={props.withAnimation} />
          <HomeServices withAnimation={props.withAnimation} />
          {/* <ScrollWatcher
            id="portfolio-section"
            targetSelector=".content-fourth"
            onViewportScroll={updatePortfolioSection}
          > */}
          <HomePortfolio withAnimation={props.withAnimation} />
          {/* </ScrollWatcher> */}
        </div>
      </Fullscreen>
    </>
  );
}

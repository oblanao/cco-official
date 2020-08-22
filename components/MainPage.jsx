import { useEffect } from "react";
import { Fullscreen, Header } from ".";
import HomeLanding from "./HomeLanding";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import ScrollWatcher from "./HOC/ScrollWatcher";

export default function MainPage(props) {
  useEffect(() => {
    if (props.withAnimation) {
      const elements = document.querySelectorAll(".after-intro");
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        console.log(el);
        setTimeout(() => {
          el.classList.remove("opacity-0");
        }, i * 75);
      }
    }
  });
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
          <Header withAnimation={props.withAnimation} />
          <HomeLanding withAnimation={props.withAnimation} />
          <HomeThird withAnimation={props.withAnimation} />
          <HomeSecond withAnimation={props.withAnimation} />
          <ScrollWatcher
            id="portfolio-section"
            targetSelector=".content-fourth"
            onViewportScroll={updatePortfolioSection}
          >
            <HomeFourth withAnimation={props.withAnimation} />
          </ScrollWatcher>
        </div>
      </Fullscreen>
    </>
  );
}

import { useEffect } from "react";
import { Fullscreen, Header } from ".";
import HomeLanding from "./HomeLanding";
import HomeSecond from "./HomeSecond";

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
          <HomeSecond withAnimation={props.withAnimation} />
        </div>
      </Fullscreen>
    </>
  );
}

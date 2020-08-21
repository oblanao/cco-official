import ClassWithScroll from "./HOC/ClassWithScroll";
import FadeWithScroll from "./HOC/FadeWithScroll";
import FullScreenContent from "./HOC/FullScreenContent";

export default function HomeThird(props) {
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 0.75 + "px)";
  };

  // const updateTextRule = (elementId, scrollY, speed) => {
  //   let scaleValue = 100 / scrollY;
  //   if (scaleValue > 1.2) {
  //     scaleValue = 1.2;
  //   }
  //   document.getElementById(elementId).style.transform =
  //     "scale(" + scaleValue + ")";
  // };
  return (
    <>
      {/* <div className="content content-third full-screen"> */}
      <FullScreenContent className="content-third">
        <FadeWithScroll
          id="chip-icon"
          targetSelector=".floating-icon"
          topValue={0.5}
        >
          <img
            src="/images/icons/chip-half.png"
            alt="floating-brain-icon"
            className="floating-icon after-intro opacity-0"
          />
        </FadeWithScroll>
        <div className="content-section__inner">
          <ClassWithScroll
            id="about-title"
            targetSelector=".about-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro about-title opacity-0">ABOUT US</h2>
          </ClassWithScroll>
          {/* <ClassWithScroll
            id="about-first-text"
            targetSelector=".about-text"
            updateRule={updateTextRule}
          > */}
          <FadeWithScroll id="about-text-first" targetSelector=".about-text">
            <h4 className="about-text">
              We are a young company, for whom innovation and professionalism
              are at the forefront. Once we start a project, we believe we can
              fully meet the needs of our clients.
            </h4>
          </FadeWithScroll>
          <FadeWithScroll id="about-text-second" targetSelector=".about-text">
            <h4 className="about-text">
              Whether you are a company or an individual, we will help you
              create a digital dimension to your work. As part of our continuous
              improvement, we also focus on modern IT technologies.
            </h4>
          </FadeWithScroll>
          {/* </ClassWithScroll> */}
          {/* </div> */}
        </div>
      </FullScreenContent>
    </>
  );
}

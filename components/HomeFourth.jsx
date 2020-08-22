import ClassWithScroll from "./HOC/ClassWithScroll";
// import FadeWithScroll from "./HOC/FadeWithScroll";
import FullScreenContent from "./HOC/FullScreenContent";

export default function HomeFourth(props) {
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 0.75 + "px)";
  };
  return (
    <>
      <FullScreenContent className="content-fourth">
        {/* <FadeWithScroll
          id="crown-icon"
          targetSelector=".floating-icon"
          topValue={0.5}
        >
          <img
            src="/images/icons/crown-queen-half.png"
            alt="floating-crown-icon"
            className="floating-icon after-intro opacity-0"
          />
        </FadeWithScroll> */}
        <div className="content-section__inner">
          <ClassWithScroll
            id="work-title"
            targetSelector=".work-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro work-title opacity-0">OUR WORK</h2>
          </ClassWithScroll>
        </div>
      </FullScreenContent>
    </>
  );
}

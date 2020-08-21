import ClassWithScroll from "./HOC/ClassWithScroll";
import FadeWithScroll from "./HOC/FadeWithScroll";

export default function HomeThird(props) {
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.getElementById(elementId).style.transform =
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
      <style jsx>{`
        .content-third {
          background: black;
          color: white;
          padding: 5rem 1rem;
          font-family: "Queental";
          align-items: flex-start;
        }
        .content-third .content-section__inner {
          width: 100%;
          padding: 2rem;
          max-width: 600px;
          line-height: 2rem;
        }
        .about-title {
          margin-bottom: 150px;
        }
        .about-text {
          transition: all 0.3s ease-in;
        }
      `}</style>
      <div className="content content-third full-screen">
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
          <FadeWithScroll id="about-text-first">
            <h4 className="about-text">
              We are a young company, for whom innovation and professionalism
              are at the forefront. Once we start a project, we believe we can
              fully meet the needs of our clients.
            </h4>
          </FadeWithScroll>
          <FadeWithScroll id="about-text-second">
            <h4 className="about-text">
              Whether you are a company or an individual, we will help you
              create a digital dimension to your work. As part of our continuous
              improvement, we also focus on modern IT technologies.
            </h4>
          </FadeWithScroll>
          {/* </ClassWithScroll> */}
        </div>
      </div>
    </>
  );
}

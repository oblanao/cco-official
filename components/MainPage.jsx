import { useEffect } from "react";
import { Fullscreen, Header } from ".";

export default function MainPage(props) {
  useEffect(() => {
    if (props.withAnimation) {
      document.querySelector(".content").classList.remove("opacity-0");
    }
  });
  return (
    <>
      <style jsx>{`
        .main-page {
          background: #f2f2f2;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          text-align: justify;
          transition: opacity 0.5s ease-in;
          padding: 1rem;
        }
        .content h2 {
          font-size: 4rem;
          margin: 1rem auto;
        }
      `}</style>
      <Fullscreen>
        <div className="main-page">
          <Header withAnimation={props.withAnimation} />
          <div className="content opacity-0">
            <h2>CHESS CODERS</h2>
            <h4>Always a move ahead</h4>
          </div>
        </div>
      </Fullscreen>
    </>
  );
}

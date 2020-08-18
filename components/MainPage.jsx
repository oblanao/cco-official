import { useEffect } from "react";

export default function MainPage(props) {
  useEffect(() => {
    if (props.withAnimation) {
      document.querySelector(".content").classList.remove("opacity-0");
    }
  });
  return (
    <>
      <style jsx>{`
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
      <div className="content opacity-0">
        <h2>CHESS CODERS</h2>
        <h4>Always a move ahead</h4>
      </div>
    </>
  );
}

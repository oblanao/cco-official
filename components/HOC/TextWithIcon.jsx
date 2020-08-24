export default function TextWithIcon(props) {
  return (
    <>
      <style jsx>{`
        .text-with-icon {
          width: 100%;
          display: flex;
          flex-direction: ${props.iconRight ? "row-reverse" : "row"};
        }
        .text-with-icon > div {
          padding: 1rem;
        }
        .text-with-icon > .the-icon {
          display: flex;
          align-items: center;
          width: 256px;
          justify-content: center;
        }
        .text-with-icon > .the-text {
          flex-grow: 1;
          text-align: justify;
        }
        @media (max-width: 991px) {
          .text-with-icon {
            flex-direction: column;
          }
          .text-with-icon > .the-icon {
            width: 100%;
          }
        }
      `}</style>
      <div className="text-with-icon">
        <div className="the-icon">{props.iconComponent}</div>
        <div className="the-text">{props.textComponent}</div>
      </div>
    </>
  );
}

export default function SplitInHalf(props) {
  return (
    <>
      <style jsx>{`
        .split-in-half {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .split-in-half h1 {
          ${props.fontSize && `font-size: ${props.fontSize};`}
          font-weight: 900;
          background-color: #000;
          color: #fff;
          display: block;
          padding: 0.5em;
        }

        .split-in-half h1:nth-child(2) {
          position: absolute;
          background-color: #fff;
          color: #000;
          clip-path: inset(-1% -1% 50% -1%);
        }
        .container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
      <div className="container">
        <div className="split-in-half">
          <h1>{props.text}</h1>
          <h1>{props.text}</h1>
        </div>
      </div>
    </>
  );
}

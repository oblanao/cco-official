export default function Fullscreen(props) {
  return (
    <>
      <style jsx>{`
        .fullscreen-wrapper {
          width: calc(100% - 40px);
          height: calc(100% - 40px);
          margin: 20px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 576px) {
          .fullscreen-wrapper {
            margin: 0.5rem;
            width: calc(100% - 1rem);
            height: calc(100% - 1rem);
          }
        }
      `}</style>
      <div className="fullscreen-wrapper">{props.children}</div>
    </>
  );
}

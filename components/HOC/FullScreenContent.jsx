export default function FullScreenContent(props) {
  return (
    <>
      <style jsx>{`
        .content.full-screen {
          min-height: calc(100vh - 64px - 5rem);
        }
        @media (max-width: 491px) {
          .content.full-screen {
            min-height: calc(100vh - 64px - 2rem);
          }
        }
      `}</style>
      <div className={`content full-screen ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}

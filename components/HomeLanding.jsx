import FullScreenContent from "./HOC/FullScreenContent";

export default function HomeLanding(props) {
  return (
    <FullScreenContent className="content-landing">
      <h2 className="after-intro landing-title opacity-0">CHESS CODERS</h2>
      <h4 className="after-intro landing-tagline opacity-0">
        Always a move ahead
      </h4>
    </FullScreenContent>
  );
}

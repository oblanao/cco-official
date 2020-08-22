import FullScreenContent from "./HOC/FullScreenContent";
import DoubleBorderButton from "./Buttons/DoubleBorder";

export default function HomeLanding(props) {
  return (
    <FullScreenContent className="content-landing">
      <h2 className="after-intro landing-title opacity-0">CHESS CODERS</h2>
      <h4 className="after-intro landing-tagline opacity-0">
        Always a move ahead
      </h4>
      <DoubleBorderButton
        withAnimation={true}
        className="mt-2 after-intro opacity-0"
        text="Let's talk"
        startAnimation
        initialDelay={1000}
      />
    </FullScreenContent>
  );
}

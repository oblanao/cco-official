import FullScreenContent from "./HOC/FullScreenContent";
import DoubleBorderButton from "./Buttons/DoubleBorder";
import config from "../site.config";

export default function HomeLanding(props) {
  return (
    <>
      <style jsx>{`
        .content-landing {
          background: ${config.colors.landing.bg};
          color: ${config.colors.landing.fg};
        }
      `}</style>
      <div className="content full-screen content-landing">
        <h2 className="after-intro landing-title opacity-0">CHESS CODERS</h2>
        <h4 className="after-intro landing-tagline opacity-0">
          Always a move ahead
        </h4>
        <DoubleBorderButton
          withAnimation={true}
          className="mt-2 after-intro opacity-0"
          text="Let's talk"
          startAnimation={props.withAnimation}
          initialDelay={1000}
        />
      </div>
    </>
  );
}

import FadeWithScroll from "./HOC/FadeWithScroll";
import RandomizerToLetter from "./TextEffects/RandomizerToLetter";
import SimpleTextReveal from "./TextEffects/SimpleTextReveal";
import UnderlineText from "./TextEffects/UnderlineText";
import AnimatedTyping from "./TextEffects/AnimatedTyping";
import Hover3D from "./ImageEffects/Hover3D";

export default function Test() {
  return (
    <>
      {/* <RandomizerToLetter id="1" text="50" /> */}
      <SimpleTextReveal
        duration={1000}
        delay={200}
        text={"Chess Coders brings you money"}
      />
      <p>
        Haules balaules <UnderlineText text="haules baules" />
      </p>
      <AnimatedTyping
        duration={10000}
        delay={2000}
        text={"This is animated typing. Hello world!"}
      />
      <Hover3D
        src={
          "https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png"
        }
      />
    </>
  );
}

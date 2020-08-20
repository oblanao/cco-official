import { BlackMiddleLine } from "./TextEffects";

export default function () {
  return (
    <>
      <BlackMiddleLine
        firstLine={"Let's"}
        blackLine={"Nostolos"}
        lastLine="together"
        onClick={console.log}
      />
    </>
  );
}

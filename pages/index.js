import { Test, WebsiteHome } from "../components";
//TODO: add speedControl prop to WebsiteHome
const showIntro = process.env.NODE_ENV === "production";
export default function Index() {
  return (
    <>
      {/* <WebsiteHome showIntro={showIntro} /> */}
      {/* <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      > */}
      <Test />
      {/* </div> */}
    </>
  );
}

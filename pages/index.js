import { Test, WebsiteHome } from "../components";
//TODO: add speedControl prop to WebsiteHome

export default function Index() {
  return (
    <>
      <WebsiteHome showIntro={true} />
      {/* <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <Test />
      </div> */}
    </>
  );
}

import Head from "next/head";
import config from "../site.config";
import { FavIcon, OpenGraph } from ".";

const AppHead = () => {
  const { sitename, description, googleFonts } = config;

  return (
    <Head>
      <title>{sitename}</title>
      <meta name="description" content={description} />
      {googleFonts && <link rel="stylesheet" href={googleFonts} />}
      <FavIcon />
      <OpenGraph />
    </Head>
  );
};

export default AppHead;

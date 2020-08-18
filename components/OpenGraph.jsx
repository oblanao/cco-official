import config from "../site.config";

export default function OpenGraph() {
  const { sitename, title, description, image, baseurl } = config;

  return (
    <>
      <meta property="og:site_name" content={sitename} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={baseurl} />
      <meta property="og:type" content="website" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </>
  );
}

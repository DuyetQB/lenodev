import { MetaProps } from "../../types/types";
import Head from "next/head";

const Meta = ({ ...props }: MetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/icon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Lenodev" />
      <meta name="description" content={props.description} />
      <meta property="og:image" content={props.ogImage} />
      <meta property="og:description" content={props.ogDescription} />
      <meta property="og:title" content={props.ogTitle} />
      <meta property="og:image:secure_url" content={props.ogImage} />
      <meta name="keywords" content={props.keywords} />
      <meta name="robots" content={props.robotsFollow} />
      <link rel="canonical" href={props.linkCanoncal} />
      <meta
        property="og:site_name"
        content="Lenodev - A startup to build great apps and platforms to make life easier"
      />
      <meta property="og:url" content={props.linkCanoncal} />
      <meta name="twitter:title" content={props.twitterTitle} />
      <meta name="twitter:description" content={props.twitterDescription} />
      <meta name="twitter:image" content={props.twitterImage} />
      <meta name="twitter:site" content="Lenodev" />
      <meta name="twitter:creator" content="Lenodev.com" />
      {/* metatag for bot. tell bot the time to revisit page */}
      {/* <meta name="revisit-after" content="1 days" />
      <meta http-equiv="content-language" content="vi" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="pragma" content="no-cache" />
      <meta http-equiv="expires" content="0" />
      {/* meta tag for everyone */}
      {/* <meta name="distribution" content="Global" />  */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1737962627563882"
     crossOrigin="anonymous"></script>
    </Head>
  );
};

export default Meta;

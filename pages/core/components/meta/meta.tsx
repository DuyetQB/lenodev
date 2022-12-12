import { MetaProps } from "../../types/types";
import Head from "next/head";

const Meta = ({ ...props }: MetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Lenodev" />
      <meta name="description" content={props.description} />
      <meta property="og:image" content={props.ogImage} />
      <meta property="og:description" content={props.ogDescription} />
      <meta property="og:title" content={props.ogTitle} />
      <meta name="keywords" content={props.keywords} />
      <meta
        property="og:site_name"
        content="Lenodev - Cung cấp các bài viết liên quan tới lập trình từ Frontend cho tới Backend"
      />
      <meta property="og:url" content="https://lenodev.com/" />
      <meta name="twitter:title" content={props.twitterTitle} />
      <meta name="twitter:description" content={props.twitterDescription} />
      <meta name="twitter:image" content={props.twitterImage} />
      <meta name="twitter:site" content="Lenodev" />
      <meta name="twitter:creator" content="Lenodev.com" />
    </Head>
  );
};

export default Meta;

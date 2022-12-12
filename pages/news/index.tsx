import Link from "next/link";
import Layout from "../core/layout/layout";
import Meta from "../core/components/meta/meta";

const News = () => {
  return (
    <Layout>
      <Meta
        title="News - page"
        description="News"
        ogImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
        ogDescription="Lenodev - News"
        ogTitle="News - page"
        keywords="Tin tức, Lập trình, Tin tức Lenodev"
        twitterTitle="Lenodev - News"
        twitterDescription="Tin tức "
        twitterImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
      />
      <div className="container">
        <h1>News</h1>
        <p>this is News page</p>


        
        <p>this is News page ggggg</p>
      </div>
    </Layout>
  );
};

export default News;

// import Banner from "../../components/banner/banner";
import Layout from "../layout";
// import Footer from "../../components/footer/footer";
import Thumbnail from "../../images/categorybanner.png";
import Meta from "../../components/meta/meta";

import dynamic from 'next/dynamic';

const DynamicBanner = dynamic(() => import('../../components/banner/banner'), {
loading: () => <p>Loading...</p>,
});
const DynamicFooter= dynamic(() => import('../../components/footer/footer'), {
loading: () => <p>Loading...</p>,
});

const Home = (posts:any) => {
  return (
    <Layout>
      <Meta
        title="Lenodev"
        description="A startup to build great apps and platforms to make life easier"
        ogImage={Thumbnail.src.toString()}
        ogDescription="Lenodev - A startup to build great apps and platforms to make life easier"
        ogTitle="Lenodev - Homepage"
        keywords="News, Program, Lenodev's news"
        twitterTitle="Lenodev - Home page"
        twitterDescription="Lenodev - A startup to build great apps and platforms to make life easier"
        twitterImage={Thumbnail.src.toString()}
        linkCanoncal="https://lenodev.com"
        robotsFollow="index,follow"
      />
      <DynamicBanner />
      {/* <main className={styles.main}>
        <Blog />
      </main> */}
      <DynamicFooter />
    </Layout>
  );
};

export default Home;

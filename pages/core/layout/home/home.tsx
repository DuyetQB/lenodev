import styles from "./home.module.css";
import Banner from "../../components/banner/banner";
import Layout from "../layout";
import Footer from "../../components/footer/footer";
import Thumbnail from "../../images/image-thumbnail.webp";
import Meta from "../../components/meta/meta";
import Blog from "../../components/blog";

const Home = (posts:any) => {
  return (
    <Layout>
      <Meta
        title="Lenodev"
        description="Blog chia sẻ những kiến thức về lập trình"
        ogImage={Thumbnail.src.toString()}
        ogDescription="Lenodev - Blog chia sẻ những kiến thức về lập trình"
        ogTitle="Lenodev - Trang chủ"
        keywords="Tin tức, Lập trình, Tin tức Lenodev"
        twitterTitle="Lenodev - Trang chủ"
        twitterDescription="Lenodev - Blog chia sẻ những kiến thức về lập trình "
        twitterImage={Thumbnail.src.toString()}
        linkCanoncal="https://lenodev.com"
        robotsFollow="index,follow"
      />
      <Banner />
      <main className={styles.main}>
        <Blog />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;

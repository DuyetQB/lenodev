import Meta from "../core/components/meta/meta";
import Layout from "../core/layout/layout";
import Image from "next/image";
import styles from "./post.module.scss";
import ImageUser from "../core/images/avatar_default.jpg";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";
import axios from "axios"

const BlogDetail = ({ posts }: any) => {


  const arr: any = [];
  const keywords = posts?.data?.keyWords;

  for (let index = 0; index < keywords?.length; index++) {
    const element = keywords[index].item;

    arr.push(element);
  }

  const defaultCount = 0;

  const [reactTionLike, setReactTionLike] = useState({
    isActiveHeart: false,
    title: "Nhấn để thích bài này",
    count: defaultCount,
  });

  const handleReactionLike = () => {
    setReactTionLike({
      isActiveHeart: !reactTionLike.isActiveHeart,
      title: !reactTionLike.isActiveHeart
        ? "Bạn đã thích bài này"
        : "Nhấn để thích bài này",
      count: !reactTionLike.isActiveHeart ? reactTionLike.count + 1 : 0,
    });
  };


  return (
    <Layout>
      <Meta
        title={posts?.data.title}
        description={posts?.data.description}
        ogImage={posts?.data.imageUrl}
        ogDescription={posts?.data.description}
        ogTitle={posts?.data.title}
        keywords={arr.toString() || posts?.data.title}
        twitterTitle={posts?.data.title}
        twitterDescription={posts?.data.description}
        twitterImage={posts?.data.imageUrl}
        linkCanoncal={`https://lenodev.com/post/${posts?.data.slug}`}
        robotsFollow="index,follow"
      />
      <div className="container">
        <div className={styles.blog_detail}>
          <div className={styles.blog_content}>
            <h1 className={styles.title}>{posts?.data.title}</h1>
            <div className={styles.user}>
              <Image
                src={ImageUser}
                width={60}
                height={60}
                alt="avatar"
                className={styles.user__avatar}
              />

              <div>
                <Link href="/">
                  <span className={styles.user__name}>Admin</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    className={styles.user__icon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                    ></path>
                  </svg>
                </Link>
                <p className={styles.user__time}>
                  {" "}
                  {moment(posts?.data?.created_at).format("DD/MM/YYYY")}
                </p>
              </div>
            </div>

            <div
              className={styles.content_description}
              dangerouslySetInnerHTML={{ __html: posts?.data.body }}
            ></div>

            <div className={styles.wrap_reaction}>
              <div
                className={styles.reacttion__item}
                title={reactTionLike.title}
                onClick={() => handleReactionLike()}
              >
                {reactTionLike.isActiveHeart ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    className="svg-inline--fa fa-heart "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ed2b48"
                      d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="heart"
                      className="svg-inline--fa fa-heart "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                      ></path>
                    </svg>
                  </>
                )}
                <span>{reactTionLike.count}</span>
              </div>
              <div
                className={styles.reacttion__item}
                title="Nhấn để bình luận bài này"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="comment"
                  className="svg-inline--fa fa-comment "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"
                  ></path>
                </svg>
                <span>0</span>
              </div>
            </div>
            <div className={styles.tags}>
              {posts?.data.keyWords.map((rc: any) => (
                <Link href={`/post/${rc.item}`} key={rc.id}>{rc.item}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // const endpoint = process.env.API_APP;
  const url = "http://localhost:3004/api/productAll/";
  const url2 = "https://lenodevapi-srwa.onrender.com/api/productAll/";

  const res = await axios.get(url2);
  // const res = await fetch(`http://localhost:3002/api/productAll/`);
  // const posts = await res.json();

  const path = res?.data.data.map((item: any) => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });
  return {
    paths: path,
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const {params: { slug }} = context

  const url = `http://localhost:3004/api/product/${slug}`;
  const url2 = `https://lenodevapi-srwa.onrender.com/api/product/${slug}`;
  // const endpoint = process.env.API_APP;

  const res = await axios.get(url2);
  // const res = await fetch(`http://localhost:3002/api/product/${slug}`);
  

  if(!res.data.data){
    return {
      notFound: true
  }
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts:res.data,
      revalidate: 1
    },
  };
}

export default BlogDetail;

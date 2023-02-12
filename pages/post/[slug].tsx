import Meta from "../core/components/meta/meta";
import Layout from "../core/layout/layout";
import Image from "next/image";
import styles from "./post.module.scss";
import ImageUser from "../core/images/avatar_default.jpg";
import Link from "next/link";
import moment from "moment";

const BlogDetail = ({ posts }: any) => {
  return (
    <Layout>
      <Meta
        title={posts?.data.title}
        description={posts?.data.description}
        ogImage={posts?.data.imageThumbnailUrl}
        ogDescription={posts?.data.description}
        ogTitle={posts?.data.title}
        keywords={posts?.data.title}
        twitterTitle={posts?.data.title}
        twitterDescription={posts?.data.description}
        twitterImage={posts?.data.imageThumbnailUrl}
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

            <p
              className={styles.content_description}
              dangerouslySetInnerHTML={{ __html: posts?.data.body }}
            ></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // const endpoint = process.env.API_APP;

  const res = await fetch(`https://traiga-api.vercel.app/api/productAll/`);
  // const res = await fetch(`http://localhost:3002/api/productAll/`);
  const posts = await res.json();

  const path = posts?.data.map((item: any) => {
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
  const slug = context.params.slug;

  // const endpoint = process.env.API_APP;

  const res = await fetch(`https://traiga-api.vercel.app/api/product/${slug}`);
  // const res = await fetch(`http://localhost:3002/api/product/${slug}`);

  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default BlogDetail;

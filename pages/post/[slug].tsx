// import { useRouter } from "next/router";
import Meta from "../core/components/meta/meta";
import Layout from "../core/layout/layout";
import Image from "next/image";
import styles from "./post.module.scss";

const BlogDetail = ({ posts }: any) => {
  // const router = useRouter();
  // const { id } = router.query;
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
        <h3 className={styles.title}>{posts?.data.title}</h3>
        <Image
          src={posts?.data.imageUrl}
          alt={posts?.data.title}
          width={400}
          height={400}
          className={styles.image_post}
        />
        <p className={styles.content_description}>{posts?.data.body}</p>
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

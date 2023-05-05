import Link from "next/link";
import styles from "./blog.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../core/components/button/button";
import moment from "moment";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Layout from "../core/layout/layout";
import Meta from "../core/components/meta/meta";

const Blog = () => {
  const [post, setPost] = useState<any>({
    data: [],
    isLoading: true,
  });

  const handleGetData = async () => {
    const url = `http://localhost:3004/api/productAll/?page=1/`;
    // const url2 = `https://lenodevapi-vpvf.onrender.com/api/productAll/?page=1/`;
    // const url2 = `https://lenodevapiadmin.onrender.com/api/public-getAllProduct?page=1/`;
    const url2 = `https://lenodevapi.vercel.app/api/public-getAllProduct?page=1/`;
    const response = await axios.get(url2);
    setPost({
      data: response?.data.data,
      isLoading: false,
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleLoadMore = () => {};

  return (
    <Layout>
      <Meta
        title="Blog - page"
        description="Blog"
        ogImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdaihocdaivietsaigon.edu.vn%2Ftong-hop-50-anh-nen-dep-4k-danh-cho-may-tinh%2F&psig=AOvVaw1gyas5sErCtIqa1UuPqDww&ust=1683363262121000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiOpPzm3f4CFQAAAAAdAAAAABAE"
        ogDescription="Lenodev - Blog"
        ogTitle="Blog - page"
        keywords="Những bài viết trên trang Lenodev"
        twitterTitle="Lenodev - Blog"
        twitterDescription="Blog "
        twitterImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdaihocdaivietsaigon.edu.vn%2Ftong-hop-50-anh-nen-dep-4k-danh-cho-may-tinh%2F&psig=AOvVaw1gyas5sErCtIqa1UuPqDww&ust=1683363262121000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiOpPzm3f4CFQAAAAAdAAAAABAE"
      />
      <div className="container">
        <section className={styles.new_post}>
          <article className={styles.posts}>
            <div className={styles.layout}>
              <div className={styles.list_posts}>
                {post?.isLoading ? (
                  <>
                    {[1, 2, 3].map((item,index) => (
                      <figure key={index} className="block">
                        <Skeleton count={1} height={130} width={240} />
                        <Skeleton count={1} height={130} width={140} />
                      </figure>
                    ))}
                  </>
                ) : (
                  <>
                    {post?.data?.map((item: any, index: number) => (
                      <figure key={item?._id}>
                        <Link href={`/post/${item?.slug}`} className="absolute inset-0 z-[-2]">
                          <Image
                            src={item?.imageUrl}
                            alt={item?.description}
                            width={350}
                            height={250}
                            loading="lazy"
                          />
                        </Link>
                        <div>

                        <h3 className={styles.text_title}>
                          <Link
                            href={`/post/${item?.slug}`}
                            className={styles.post_link}
                          >
                            {item?.title}
                          </Link>
                        </h3>
                        <div className={styles.post_content}>
                          <div className={styles.post_timeline}>
                            <svg
                              fill="none"
                              height="15"
                              viewBox="0 0 13 15"
                              width="13"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.9375 2.5C11.293 2.5 11.5938 2.63672 11.8672 2.88281C12.1133 3.15625 12.25 3.45703 12.25 3.8125V13.4375C12.25 13.8203 12.1133 14.1211 11.8672 14.3672C11.5938 14.6406 11.293 14.75 10.9375 14.75H1.3125C0.929688 14.75 0.628906 14.6406 0.382812 14.3672C0.109375 14.1211 0 13.8203 0 13.4375V3.8125C0 3.45703 0.109375 3.15625 0.382812 2.88281C0.628906 2.63672 0.929688 2.5 1.3125 2.5H2.625V1.07812C2.625 0.996094 2.65234 0.914062 2.70703 0.859375C2.76172 0.804688 2.84375 0.75 2.95312 0.75H3.17188C3.25391 0.75 3.33594 0.804688 3.39062 0.859375C3.44531 0.914062 3.5 0.996094 3.5 1.07812V2.5H8.75V1.07812C8.75 0.996094 8.77734 0.914062 8.83203 0.859375C8.88672 0.804688 8.96875 0.75 9.07812 0.75H9.29688C9.37891 0.75 9.46094 0.804688 9.51562 0.859375C9.57031 0.914062 9.625 0.996094 9.625 1.07812V2.5H10.9375ZM1.3125 3.375C1.17578 3.375 1.06641 3.42969 0.984375 3.51172C0.902344 3.59375 0.875 3.70312 0.875 3.8125V5.125H11.375V3.8125C11.375 3.70312 11.3203 3.59375 11.2383 3.51172C11.1562 3.42969 11.0469 3.375 10.9375 3.375H1.3125ZM10.9375 13.875C11.0469 13.875 11.1562 13.8477 11.2383 13.7656C11.3203 13.6836 11.375 13.5742 11.375 13.4375V6H0.875V13.4375C0.875 13.5742 0.902344 13.6836 0.984375 13.7656C1.06641 13.8477 1.17578 13.875 1.3125 13.875H10.9375ZM4.04688 9.5C4.12891 9.5 4.21094 9.47266 4.26562 9.41797C4.32031 9.36328 4.375 9.28125 4.375 9.17188V8.07812C4.375 7.99609 4.32031 7.91406 4.26562 7.85938C4.21094 7.80469 4.12891 7.75 4.04688 7.75H2.95312C2.84375 7.75 2.76172 7.80469 2.70703 7.85938C2.65234 7.91406 2.625 7.99609 2.625 8.07812V9.17188C2.625 9.28125 2.65234 9.36328 2.70703 9.41797C2.76172 9.47266 2.84375 9.5 2.95312 9.5H4.04688ZM6.67188 9.5C6.75391 9.5 6.83594 9.47266 6.89062 9.41797C6.94531 9.36328 7 9.28125 7 9.17188V8.07812C7 7.99609 6.94531 7.91406 6.89062 7.85938C6.83594 7.80469 6.75391 7.75 6.67188 7.75H5.57812C5.46875 7.75 5.38672 7.80469 5.33203 7.85938C5.27734 7.91406 5.25 7.99609 5.25 8.07812V9.17188C5.25 9.28125 5.27734 9.36328 5.33203 9.41797C5.38672 9.47266 5.46875 9.5 5.57812 9.5H6.67188ZM9.29688 9.5C9.37891 9.5 9.46094 9.47266 9.51562 9.41797C9.57031 9.36328 9.625 9.28125 9.625 9.17188V8.07812C9.625 7.99609 9.57031 7.91406 9.51562 7.85938C9.46094 7.80469 9.37891 7.75 9.29688 7.75H8.20312C8.09375 7.75 8.01172 7.80469 7.95703 7.85938C7.90234 7.91406 7.875 7.99609 7.875 8.07812V9.17188C7.875 9.28125 7.90234 9.36328 7.95703 9.41797C8.01172 9.47266 8.09375 9.5 8.20312 9.5H9.29688ZM6.67188 12.125C6.75391 12.125 6.83594 12.0977 6.89062 12.043C6.94531 11.9883 7 11.9062 7 11.7969V10.7031C7 10.6211 6.94531 10.5391 6.89062 10.4844C6.83594 10.4297 6.75391 10.375 6.67188 10.375H5.57812C5.46875 10.375 5.38672 10.4297 5.33203 10.4844C5.27734 10.5391 5.25 10.6211 5.25 10.7031V11.7969C5.25 11.9062 5.27734 11.9883 5.33203 12.043C5.38672 12.0977 5.46875 12.125 5.57812 12.125H6.67188ZM4.04688 12.125C4.12891 12.125 4.21094 12.0977 4.26562 12.043C4.32031 11.9883 4.375 11.9062 4.375 11.7969V10.7031C4.375 10.6211 4.32031 10.5391 4.26562 10.4844C4.21094 10.4297 4.12891 10.375 4.04688 10.375H2.95312C2.84375 10.375 2.76172 10.4297 2.70703 10.4844C2.65234 10.5391 2.625 10.6211 2.625 10.7031V11.7969C2.625 11.9062 2.65234 11.9883 2.70703 12.043C2.76172 12.0977 2.84375 12.125 2.95312 12.125H4.04688ZM9.29688 12.125C9.37891 12.125 9.46094 12.0977 9.51562 12.043C9.57031 11.9883 9.625 11.9062 9.625 11.7969V10.7031C9.625 10.6211 9.57031 10.5391 9.51562 10.4844C9.46094 10.4297 9.37891 10.375 9.29688 10.375H8.20312C8.09375 10.375 8.01172 10.4297 7.95703 10.4844C7.90234 10.5391 7.875 10.6211 7.875 10.7031V11.7969C7.875 11.9062 7.90234 11.9883 7.95703 12.043C8.01172 12.0977 8.09375 12.125 8.20312 12.125H9.29688Z"
                                fill="#fff"
                              ></path>
                            </svg>
                            <span className={styles.post_timevalue}>
                              {moment(item?.created_at).format("DD/MM/YYYY")}
                            </span>
                          </div>
                        </div>
                        </div>
                      <div className={styles.blackbox}></div>
                      </figure>
                    ))}
                  </>
                )}
              </div>
              <div className={styles.button_container}>
                <Button className="rounded-md bg-indigo-600  ml-4 mr-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Xem thêm</Button>
               
              </div>
            </div>
           
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;

import styles from "./popular.module.scss";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../../images/family-garden.jpg";

const Popular = () => {
  return (
      <section className={styles.popular}>
        <article className={styles.posts}>
          <div className={styles.title}>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                version="1.1"
              >
                <g id="surface1">
                  <path d="M 5.730469 14.582031 C 5.730469 15.675781 5.976562 16.707031 6.472656 17.667969 C 6.964844 18.632812 7.65625 19.4375 8.542969 20.078125 C 8.472656 19.871094 8.421875 19.65625 8.386719 19.441406 C 8.351562 19.222656 8.332031 19.011719 8.332031 18.800781 C 8.332031 18.246094 8.4375 17.726562 8.644531 17.238281 C 8.855469 16.753906 9.15625 16.3125 9.558594 15.910156 L 12.5 13.019531 L 15.441406 15.910156 C 15.84375 16.3125 16.144531 16.753906 16.355469 17.238281 C 16.5625 17.726562 16.667969 18.246094 16.667969 18.800781 C 16.667969 19.011719 16.648438 19.222656 16.613281 19.441406 C 16.578125 19.65625 16.527344 19.871094 16.457031 20.078125 C 17.34375 19.4375 18.035156 18.632812 18.527344 17.667969 C 19.023438 16.707031 19.269531 15.675781 19.269531 14.582031 C 19.269531 13.644531 19.070312 12.730469 18.671875 11.835938 C 18.273438 10.941406 17.699219 10.121094 16.953125 9.375 C 16.589844 9.636719 16.207031 9.839844 15.808594 9.988281 C 15.40625 10.132812 15.007812 10.207031 14.609375 10.207031 C 13.550781 10.207031 12.671875 9.847656 11.980469 9.128906 C 11.285156 8.40625 10.9375 7.5 10.9375 6.40625 L 10.9375 5.886719 C 10.140625 6.457031 9.417969 7.09375 8.777344 7.785156 C 8.132812 8.480469 7.585938 9.207031 7.136719 9.960938 C 6.683594 10.714844 6.335938 11.488281 6.09375 12.277344 C 5.851562 13.070312 5.730469 13.835938 5.730469 14.582031 Z M 12.5 15.207031 L 10.652344 17.03125 C 10.40625 17.273438 10.222656 17.542969 10.089844 17.839844 C 9.960938 18.132812 9.894531 18.453125 9.894531 18.800781 C 9.894531 19.515625 10.148438 20.117188 10.652344 20.613281 C 11.15625 21.105469 11.769531 21.355469 12.5 21.355469 C 13.230469 21.355469 13.84375 21.105469 14.347656 20.613281 C 14.851562 20.117188 15.105469 19.515625 15.105469 18.800781 C 15.105469 18.453125 15.039062 18.132812 14.910156 17.839844 C 14.777344 17.542969 14.59375 17.273438 14.347656 17.03125 Z M 12.5 3.125 L 12.5 6.5625 C 12.5 7.152344 12.703125 7.648438 13.113281 8.046875 C 13.519531 8.445312 14.019531 8.644531 14.609375 8.644531 C 14.921875 8.644531 15.210938 8.582031 15.480469 8.449219 C 15.75 8.320312 15.988281 8.125 16.199219 7.863281 L 16.667969 7.292969 C 17.953125 8.019531 18.96875 9.035156 19.714844 10.339844 C 20.460938 11.640625 20.832031 13.054688 20.832031 14.582031 C 20.832031 16.910156 20.027344 18.878906 18.410156 20.496094 C 16.796875 22.109375 14.828125 22.917969 12.5 22.917969 C 10.171875 22.917969 8.203125 22.109375 6.589844 20.496094 C 4.972656 18.878906 4.167969 16.910156 4.167969 14.582031 C 4.167969 12.359375 4.914062 10.222656 6.40625 8.164062 C 7.898438 6.105469 9.929688 4.425781 12.5 3.125 Z M 12.5 3.125 " />
                </g>
              </svg>{" "}
              Bài viết phổ biến
            </h2>
          </div>
          <div className={styles.layout}>
            <div className={styles.main_post}>
              <figure>
                <Link href="">
                  <Image
                    src={Image1}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
                <Link href="" className={styles.post_link}>
                  <h3>Cách tán gái Quảng Bình part1</h3>
                </Link>
              </figure>
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
                    fill="#595959"
                  ></path>
                </svg>
                <span className={styles.post_timevalue}>08 / 04 / 2021</span>
              </div>
            </div>
          </div>
        </article>
      </section>
  );
};

export default Popular;
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.bottom}>
          <p className={styles.copyright}>Bản quyền © 2022 Lenodev.com</p>

          <div className={styles.social_link}>
            <Link href="https://www.facebook.com/profile.php?id=100087750369196" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 79 79"
                fill="none"
                className={styles.social_icon}
              >
                <rect
                  y="3.05176e-05"
                  width="78.2174"
                  height="78.2174"
                  rx="39.1087"
                  fill="#F3F3F3"
                />
                <g clipPath="url(#clip0_1_477)">
                  <path
                    d="M47.8451 42.4085L48.8879 35.6846H42.3682V31.3213C42.3682 29.4818 43.2789 27.6887 46.1989 27.6887H49.1628V21.9641C49.1628 21.9641 46.4732 21.5098 43.9015 21.5098C38.5324 21.5098 35.0229 24.7302 35.0229 30.5601V35.6846H29.0546V42.4085H35.0229V58.663H42.3682V42.4085H47.8451Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_477">
                    <rect
                      width="23.4652"
                      height="37.1533"
                      fill="white"
                      transform="translate(27.3761 21.5098)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Facebook</span>
            </Link>
            <Link href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 79 79"
                fill="none"
                className={styles.social_icon}
              >
                <rect
                  x="0.217377"
                  y="3.05176e-05"
                  width="78.2174"
                  height="78.2174"
                  rx="39.1087"
                  fill="#F3F3F3"
                />
                <g clipPath="url(#clip0_1_478)">
                  <path
                    d="M39.3331 31.2029C34.8914 31.2029 31.3088 34.7296 31.3088 39.1018C31.3088 43.4741 34.8914 47.0007 39.3331 47.0007C43.7747 47.0007 47.3573 43.4741 47.3573 39.1018C47.3573 34.7296 43.7747 31.2029 39.3331 31.2029ZM39.3331 44.2371C36.4628 44.2371 34.1162 41.9342 34.1162 39.1018C34.1162 36.2695 36.4558 33.9665 39.3331 33.9665C42.2103 33.9665 44.5499 36.2695 44.5499 39.1018C44.5499 41.9342 42.2034 44.2371 39.3331 44.2371V44.2371ZM49.5572 30.8798C49.5572 31.9042 48.7192 32.7222 47.6856 32.7222C46.645 32.7222 45.8139 31.8973 45.8139 30.8798C45.8139 29.8624 46.652 29.0375 47.6856 29.0375C48.7192 29.0375 49.5572 29.8624 49.5572 30.8798ZM54.8718 32.7497C54.7531 30.2818 54.1804 28.0956 52.3437 26.2945C50.514 24.4934 48.2931 23.9296 45.786 23.8059C43.202 23.6615 35.4571 23.6615 32.8731 23.8059C30.373 23.9228 28.1522 24.4865 26.3155 26.2876C24.4787 28.0888 23.9131 30.2749 23.7874 32.7429C23.6407 35.2864 23.6407 42.9103 23.7874 45.4539C23.9061 47.9219 24.4787 50.108 26.3155 51.9092C28.1522 53.7103 30.366 54.274 32.8731 54.3978C35.4571 54.5421 43.202 54.5421 45.786 54.3978C48.2931 54.2809 50.514 53.7172 52.3437 51.9092C54.1734 50.108 54.7461 47.9219 54.8718 45.4539C55.0184 42.9103 55.0184 35.2933 54.8718 32.7497V32.7497ZM51.5336 48.1831C50.9889 49.5306 49.9343 50.5686 48.5585 51.1117C46.4983 51.916 41.6097 51.7304 39.3331 51.7304C37.0564 51.7304 32.1608 51.9092 30.1076 51.1117C28.7388 50.5755 27.6843 49.5374 27.1326 48.1831C26.3155 46.1551 26.504 41.3429 26.504 39.1018C26.504 36.8607 26.3224 32.0416 27.1326 30.0205C27.6773 28.6731 28.7318 27.635 30.1076 27.092C32.1678 26.2876 37.0564 26.4732 39.3331 26.4732C41.6097 26.4732 46.5053 26.2945 48.5585 27.092C49.9273 27.6282 50.9819 28.6662 51.5336 30.0205C52.3507 32.0485 52.1621 36.8607 52.1621 39.1018C52.1621 41.3429 52.3507 46.162 51.5336 48.1831Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_478">
                    <rect
                      width="31.2869"
                      height="35.1978"
                      fill="white"
                      transform="translate(23.6826 21.5098)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

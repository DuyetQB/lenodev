import styles from "./search.module.scss";

const Search = () => {
  return (
    <div className={styles.search + " " + "container"}>
      <div className={styles.content}>
        <div className={styles.wrap_search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon_search}
            width={16}
            height={16}
            viewBox="0 0 23 23"
            fill="none"
          >
            <g clipPath="url(#clip0_702_201)">
              <path
                d="M16.8792 14.8695C18.2711 12.9701 18.8945 10.6152 18.6248 8.27592C18.355 5.93662 17.2118 3.78545 15.4241 2.25277C13.6364 0.720096 11.3358 -0.0810475 8.98277 0.00962017C6.62971 0.100288 4.39765 1.07608 2.73314 2.74178C1.06864 4.40747 0.0944426 6.64023 0.00545869 8.99336C-0.0835252 11.3465 0.719265 13.6464 2.25322 15.4331C3.78717 17.2197 5.93917 18.3613 8.27866 18.6294C10.6182 18.8975 12.9726 18.2724 14.871 16.8791H14.8696C14.9127 16.9366 14.9587 16.9913 15.0104 17.0445L20.5448 22.5788C20.8144 22.8486 21.18 23.0002 21.5613 23.0003C21.9427 23.0004 22.3084 22.8491 22.5782 22.5796C22.8479 22.31 22.9995 21.9444 22.9996 21.563C22.9998 21.1817 22.8484 20.8159 22.5789 20.5462L17.0445 15.0118C16.9931 14.9598 16.9378 14.9118 16.8792 14.8681V14.8695ZM17.2501 9.34377C17.2501 10.382 17.0456 11.4101 16.6482 12.3694C16.2509 13.3286 15.6685 14.2002 14.9344 14.9343C14.2002 15.6685 13.3286 16.2509 12.3694 16.6482C11.4102 17.0455 10.3821 17.25 9.34382 17.25C8.30556 17.25 7.27746 17.0455 6.31823 16.6482C5.359 16.2509 4.48742 15.6685 3.75326 14.9343C3.01909 14.2002 2.43672 13.3286 2.0394 12.3694C1.64207 11.4101 1.43757 10.382 1.43757 9.34377C1.43757 7.2469 2.27055 5.23592 3.75326 3.75321C5.23597 2.2705 7.24695 1.43752 9.34382 1.43752C11.4407 1.43752 13.4517 2.2705 14.9344 3.75321C16.4171 5.23592 17.2501 7.2469 17.2501 9.34377Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_702_201">
                <rect width={23} height={23} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="search" />
        </div>

        <button className={styles.btn_search}>Tìm kiếm</button>
      </div>
    </div>
  );
};

export default Search;

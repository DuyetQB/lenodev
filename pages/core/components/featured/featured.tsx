import styles from "./featured.module.scss";
import Image1 from "../../images/family-garden.jpg";
import Image2 from "../../images/vuonhoaimage.jpg";
// import Image3 from "../../images/da-lat-ve-dem-2.jpg";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="container">
      <section className={styles.featured}>
        <div className={styles.wrap_left}>
          <div className={styles.item}>
            <Image
              src={Image1}
              alt="Picture of the author"
             layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={styles.wrap_right}>
          <div className={styles.item}>
            <Image
              src={Image2}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.item}>
            {/* <Image
              src={Image3}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;

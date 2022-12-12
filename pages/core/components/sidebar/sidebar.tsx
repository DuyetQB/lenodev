import Image from "next/image";
import ImageAds from "../../images/anh-quang-cao-1.jpg";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image src={ImageAds} alt="Image ads" width={300} height={200}/>
      <Image src={ImageAds} alt="Image ads" width={300} height={200}/>
    </aside>
  );
};

export default Sidebar;

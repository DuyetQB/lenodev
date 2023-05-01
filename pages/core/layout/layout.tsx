import Header from "../components/header/header";
import styles from "./home/home.module.css";
const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrap_loading}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;

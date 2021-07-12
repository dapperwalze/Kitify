import styles from "./subheader.module.scss";
export const SubHeader = ({ children, currentPageName }) => {
  return (
    <div className={styles.pageSubHeader}>
      <div className={styles.currentPage}>
        <h2 className={styles.currentPageName}>{currentPageName}</h2>
      </div>
      {children}
    </div>
  );
};

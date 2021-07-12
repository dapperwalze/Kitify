import styles from "./mainsection.module.css";

export const Main = ({ children }) => {
  return (
    <main role="main" className={styles.mainSection}>
      {children}
    </main>
  );
};

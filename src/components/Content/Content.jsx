import styles from "./content.module.scss";

export const Content = ({ children }) => {
  return <section className={styles.gallerySection}>{children}</section>;
};

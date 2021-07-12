import styles from "./image.module.scss";

export const Image = ({ alt, url }) => {
  return (
    <div className={styles.imageCard}>
      <img className={styles.image} alt={alt} src={url} />
    </div>
  );
};

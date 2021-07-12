import styles from "./thumbnail.module.scss";

export const Thumbnail = ({ src, alt, setIsModalVisible }) => {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      onClick={setIsModalVisible}
    />
  );
};

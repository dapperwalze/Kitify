import { useLocation, Link } from "react-router-dom";
import { SubHeader } from "./../../components/SubHeader/SubHeader";
import { Thumbnail } from "./../../components/Thumbnail/thumbnail";
import { Button } from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { imageRenderer } from "./../../utils/helpers";
import { IMAGES } from "./../../store/imagesApi";
import styles from "./gallery.module.scss";

export const Gallery = ({ setIsModalVisible }) => {
  let location = useLocation();

  const columnOneImages = imageRenderer(
    Thumbnail,
    IMAGES,
    1,
    8,
    Link,
    location,
    setIsModalVisible
  );
  const columnTwoImages = imageRenderer(
    Thumbnail,
    IMAGES,
    8,
    14,
    Link,
    location,
    setIsModalVisible
  );
  const columnThreeImages = imageRenderer(
    Thumbnail,
    IMAGES,
    14,
    21,
    Link,
    location,
    setIsModalVisible
  );
  const columnFourImages = imageRenderer(
    Thumbnail,
    IMAGES,
    21,
    27,
    Link,
    location,
    setIsModalVisible
  );
  return (
    <>
      <SubHeader currentPageName="All Photos">
        <div className={styles.pageFeatures}>
          <Button
            className={styles.sortButton}
            type="dashed"
            shape="round"
            icon={<SortAscendingOutlined />}
          >
            Upload Date
          </Button>
          <Button
            className={styles.filterButton}
            type="dashed"
            shape="round"
            icon={<FilterOutlined />}
          >
            Show Everything
          </Button>
          <Button
            className={styles.shareButton}
            type="default"
            shape="round"
            icon={<ShareAltOutlined />}
          >
            Share
          </Button>
        </div>
      </SubHeader>

      <section className={styles.gallery}>
        <div className={styles.galleryColumn}>{columnOneImages}</div>
        <div className={styles.galleryColumn}>{columnTwoImages}</div>

        <div className={styles.galleryColumn}>{columnThreeImages}</div>

        <div className={styles.galleryColumn}>{columnFourImages}</div>
      </section>
    </>
  );
};

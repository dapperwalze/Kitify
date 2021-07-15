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
import styles from "./gallery.module.scss";

export const Gallery = ({ setIsModalVisible }) => {
  let location = useLocation();

  const columnOneImages = imageRenderer(
    Thumbnail,
    0,
    7,
    Link,
    location,
    setIsModalVisible
  );
  const columnTwoImages = imageRenderer(
    Thumbnail,
    7,
    13,
    Link,
    location,
    setIsModalVisible
  );
  const columnThreeImages = imageRenderer(
    Thumbnail,
    13,
    20,
    Link,
    location,
    setIsModalVisible
  );
  const columnFourImages = imageRenderer(
    Thumbnail,
    20,
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

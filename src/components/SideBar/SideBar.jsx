import { List, Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { category, gallery } from "../../store/dataSource";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <List
        className={styles.list}
        itemLayout="horizontal"
        size="small"
        dataSource={category}
        renderItem={(item) => (
          <List.Item className={styles.listItem}>
            <div className={styles.description}>
              {item.mostRecentUploadedImage} {item.title}
            </div>
            <span className={styles.imageCount}>{item.count}</span>
          </List.Item>
        )}
      />

      <List
        className={styles.gallery}
        size="small"
        header={<div className={styles.galleryHeader}>Galleries</div>}
        dataSource={gallery}
        renderItem={(item) => (
          <List.Item className={styles.listItem}>
            <div className={styles.description}>
              {item.mostRecentUploadedImage} {item.title}
            </div>
            <span className={styles.imageCount}>{item.count}</span>
          </List.Item>
        )}
      />
      <List.Item className={styles.listItem}>
        <Button
          className={styles.createNewButton}
          type="ghost"
          block
          icon={<PlusSquareOutlined className={styles.plusIcon} />}
        >
          Create new
        </Button>
      </List.Item>
    </aside>
  );
};

import { NavLink } from "react-router-dom";
import { Button, Avatar } from "antd";
import { SearchOutlined, PlusOutlined, SendOutlined } from "@ant-design/icons";
import styles from "./pageheader.module.css";

export const PageHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.navBar}>
        <NavLink to="/" className={styles.brandName}>
          Kitify
        </NavLink>

        <NavLink
          to="/gallery"
          exact
          activeStyle={{
            color: "#fff",
          }}
          className={styles.navItem}
        >
          Photos
        </NavLink>

        <NavLink
          to="/design"
          exact
          activeStyle={{
            color: "#fff",
          }}
          className={styles.navItem}
        >
          Design
        </NavLink>

        <NavLink
          to="/about"
          exact
          activeStyle={{
            color: "#fff",
          }}
          className={styles.navItem}
        >
          About
        </NavLink>
      </nav>
      <div className={styles.mainHeaderFeaturesContainer}>
        <span className={styles.trialMessage}>14 days left on trial</span>
        <Button
          className={styles.searchButton}
          htmlType="button"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
        <Button
          className={styles.uploadButton}
          type="ghost"
          shape="round"
          icon={<PlusOutlined />}
        >
          Upload
        </Button>
        <Button
          className={styles.publishButton}
          type="primary"
          shape="round"
          icon={<SendOutlined className={styles.sendIcon} rotate="310" />}
        >
          Publish
        </Button>
        <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
          U
        </Avatar>
      </div>
    </header>
  );
};

import React, { useState } from "react";
import { Space, Row } from "antd";
import {
  HomeOutlined,
  HomeFilled,
  SettingOutlined,
  SettingFilled,
  BarcodeOutlined,
  BuildFilled,
  BuildOutlined,
  SlidersOutlined,
  WalletOutlined,
  ControlOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import TabIcon from "./TabIcon";

const TabBottomNavigator = () => {
  const [active, setActive] = useState("receipt");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "375px",
        position: "fixed",
        bottom: 0,
        padding: "30px 0 20px 0",
        margin: "0 auto",
        background: "#fff",
      }}
    >
      <TabIcon
        icon={<HomeOutlined />}
        activeIcon={<HomeFilled />}
        active={false}
        text="Home"
      />
      <TabIcon
        icon={<ShoppingOutlined />}
        activeIcon={<HomeFilled />}
        active={false}
        text="Wishlist"
      />
      <TabIcon
        icon={<BarcodeOutlined />}
        activeIcon={<BarcodeOutlined />}
        active={false}
        text="Receipt"
      />
      <TabIcon
        icon={<BuildOutlined />}
        activeIcon={<BuildFilled />}
        active={false}
        text="Store"
      />
      <TabIcon
        icon={<SettingOutlined />}
        activeIcon={<SettingFilled />}
        active={false}
        text="Settings"
      />
    </div>
  );
};

export default TabBottomNavigator;

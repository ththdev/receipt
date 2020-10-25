import React from "react";
import { Space } from "antd";
import TabBottomNavigator from "./TabBottomNavigator";

const Layout = ({ children, bottomNavigator }) => {
  
  return (
    <Space style={{ width: "100%" }} direction="vertical" align="center">
      <Space
      className="layout"
        direction="vertical"
        style={{
          width: 375,
          position: "relative",
          minHeight: "100vh",
          paddingTop: 40,
          paddingBottom: 100,
        }}
      >
        {children}
        {bottomNavigator ? <TabBottomNavigator /> : false}
      </Space>
    </Space>
  );
};

export default Layout;

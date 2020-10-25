import React from "react";
import { Space } from "antd";

const TabIcon = ({ icon, activeIcon, text, active }) => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {active ? activeIcon : icon}
      <span style={{ fontSize: 12, marginTop: 10 }}>{text}</span>
    </div>
  );
};

export default TabIcon;

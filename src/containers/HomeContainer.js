import React from "react";
import { Typography, Statistic, Space, Divider, Row, Col } from "antd";
import "antd/dist/antd.css";
import data from "../data.json";
import Layout from "../components/base/Layout";

const { Title } = Typography;

const HomeContainer = () => {
  return (
    <Layout bottomNavigator={true}>
      <Title level={2}>Receipt</Title>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Receipt Copy #1</div>
          <div>100773</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <div>Table</div>
          <div>ST512</div>
        </div>
      </div>
      <Divider dashed style={{ borderColor: "black", margin: "20px 0" }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Customer: 3</div>
        <div>Server: Patrick</div>
        <div>Opened by: Patrick</div>
        <div>Date: 10 September 20 22:08</div>
      </div>
      <Divider dashed style={{ borderColor: "black", margin: "20px 0" }} />
      <Row justify="space-between" style={{ fontWeight: "bold" }}>
        <Col span={2} style={{ textAlign: "center" }}>
          Qty
        </Col>
        <Col span={14}>Item</Col>
        <Col span={6} style={{ textAlign: "right" }}>
          Price
        </Col>
      </Row>
      {data.map((item, index) => (
        <Row justify="space-between" key={index}>
          <Col span={2} style={{ textAlign: "center" }}>
            1
          </Col>
          <Col span={14}>Iceberg &amp; Blue</Col>
          <Col span={6} style={{ textAlign: "right" }}>
            28.00
          </Col>
        </Row>
      ))}
      <Divider dashed style={{ borderColor: "black", margin: "20px 0" }} />
      <div
        style={{
          width: "100%",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Row justify="end" style={{ width: "100%" }}>
          <Col span={6}>Service Tax</Col>
          <Col span={6}>32.5</Col>
        </Row>
        <Row justify="end" style={{ width: "100%" }}>
          <Col span={6}>GST</Col>
          <Col span={6}>22.75</Col>
        </Row>
        <Row justify="end" style={{ width: "100%" }}>
          <Col span={6}>Total Payable</Col>
          <Col span={6}>380.25</Col>
        </Row>
      </div>
    </Layout>
  );
};

export default HomeContainer;

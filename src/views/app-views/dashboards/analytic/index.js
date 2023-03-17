import React from "react";
import { Row, Col, Tooltip, Progress, Card, Table, Button, Avatar } from "antd";
import { recentOrderData } from "./AnalyticDashboardData";
import moment from "moment";
import { DATE_FORMAT_DD_MM_YYYY } from "constants/DateConstant";
import utils from "utils";

const tableColumns = [
  {
    title: "Date",
    dataIndex: "date",
    render: (_, record) => (
      <span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: "Calls",
    dataIndex: "name",
    render: (_, record) => <span>20k</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
  },
  {
    title: "Recipients",
    dataIndex: "name",
    render: (_, record) => (
      <>
        <Avatar.Group
          maxCount={2}
          maxStyle={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        >
          <Avatar src="https://joesch.moe/api/v1/random?key=1" />
          <Avatar src="https://joesch.moe/api/v1/random?key=1" />
          <a href="https://ant.design">
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
          </a>
        </Avatar.Group>
      </>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: "Sentiment",
    dataIndex: "name",
    render: (_, record) => (
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} />
      </Tooltip>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "orderStatus"),
  },
  {
    title: "View Report",
    dataIndex: "name",
    render: (_, record) => <Button type="text">View Report</Button>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "View"),
  },
];

const RecentOrder = () => (
  <Card title="Reports">
    <Table
      pagination={false}
      columns={tableColumns}
      dataSource={recentOrderData}
      rowKey="id"
    />
  </Card>
);

const SalesDashboard = () => {
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <RecentOrder />
        </Col>
      </Row>
    </>
  );
};

export default SalesDashboard;

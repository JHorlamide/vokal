import React from "react";
import { Row, Col, Button, Card, Table, Tag } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { recentOrderData } from "./SalesDashboardData";
import moment from "moment";
import { DATE_FORMAT_DD_MM_YYYY } from "constants/DateConstant";
import utils from "utils";

const tableColumns = [
  {
    title: "Issue",
    dataIndex: "name",
    render: (_, record) => <span>Customer dropped call</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
  },
  {
    title: "Date Reported",
    dataIndex: "date",
    render: (_, record) => (
      <span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: "Assignee",
    dataIndex: "name",
    render: (_, record) => <span>Muyiwa Ogunbo</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "orderStatus"),
  },
  {
    title: "Due Date",
    dataIndex: "date",
    render: (_, record) => (
      <span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
    ),
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: "status",
    render: (_, record) => (
      <div className="text-right">
        <Tag
          className="mr-0"
          color={
            record.status === "Completed"
              ? "cyan"
              : record.status === "Pending"
              ? "blue"
              : "volcano"
          }
        >
          {record.status}
        </Tag>
      </div>
    ),
  },
];

const RecentOrder = () => (
  <Card
    title="Issues"
    extra={
      <Button type="primary" icon={<AppstoreAddOutlined />}>
        Add Issue
      </Button>
    }
  >
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

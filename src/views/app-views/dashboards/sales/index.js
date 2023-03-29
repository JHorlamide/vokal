import React from "react";
import { Row, Col, Button, Card, Table, Tag } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import moment from "moment";
import { DATE_FORMAT_DD_MM_YYYY } from "constants/DateConstant";
import utils from "utils";
import useIssues from "utils/hooks/useIssues";

const tableColumns = [
  {
    title: "Issue",
    dataIndex: "issueName",
    render: (_, record) => <span>{record.issueName}</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
  },
  {
    title: "Date Reported",
    dataIndex: "dateReported",
    render: (_, record) => {
      const mongoDate = new Date(record.dateReported);
      const unixTimestamp = Math.floor(mongoDate.getTime() / 1000);
      return (
        <span>{moment.unix(unixTimestamp).format(DATE_FORMAT_DD_MM_YYYY)}</span>
      );
    },
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: "Assignee",
    dataIndex: "assignee",
    render: (_, record) => <span>{record.assignee}</span>,
    sorter: (a, b) => utils.antdTableSorter(a, b, "orderStatus"),
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    render: (_, record) => {
      const mongoDate = new Date(record.dueDate);
      const unixTimestamp = Math.floor(mongoDate.getTime() / 1000);

      return (
        <span>{moment.unix(unixTimestamp).format(DATE_FORMAT_DD_MM_YYYY)}</span>
      );
    },
    sorter: (a, b) => utils.antdTableSorter(a, b, "date"),
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: "status",
    dataIndex: "status",
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

const RecentOrder = ({ data }) => (
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
      dataSource={data}
      rowKey="id"
    />
  </Card>
);

const SalesDashboard = () => {
  const { data } = useIssues();

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <RecentOrder data={data} />
        </Col>
      </Row>
    </>
  );
};

export default SalesDashboard;

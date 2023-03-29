import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Card, Select, Button, Progress, Tooltip, Modal } from "antd";
import {
  uniqueVisitorsDataWeek,
  uniqueVisitorsDataDay,
  uniqueVisitorsDataMonth,
} from "../analytic/AnalyticDashboardData";
import AssignTask from "./components/AssignTask";

const { Option } = Select;

const customerExperiences = [
  "Dropped Calls",
  "Customers experienced long wait time",
  "Poor connectivity",
];

export const DefaultDashboard = () => {
  const [open, setOpen] = useState(false);
  const [issueType, setIssueType] = useState("");
  const [uniqueVisitorsData, setUniqueVisitorsData] = useState(
    uniqueVisitorsDataWeek
  );

  const showModal = (heading) => {
    setIssueType(heading);
    setOpen(true);
  };

  const handleOk = (e) => {
    setOpen(false);
  };

  const handleCancel = (e) => {
    setOpen(false);
  };

  const handleVisitorsChartChange = (value) => {
    switch (value) {
      case "day":
        setUniqueVisitorsData(uniqueVisitorsDataDay);
        break;
      case "week":
        setUniqueVisitorsData(uniqueVisitorsDataWeek);
        break;
      case "month":
        setUniqueVisitorsData(uniqueVisitorsDataMonth);
        break;
      default:
        setUniqueVisitorsData(uniqueVisitorsDataWeek);
        break;
    }
  };

  return (
    <>
      {open && (
        <Modal
          title={issueType}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <AssignTask issue={issueType} />
        </Modal>
      )}

      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
          <Card title="Number of Calls Analyzed">
            <Chart
              series={uniqueVisitorsData.seriesB}
              options={uniqueVisitorsData.options}
              type="bar"
              height={410}
              extra={
                <Select
                  defaultValue="week"
                  size="small"
                  style={{ width: 120 }}
                  onChange={handleVisitorsChartChange}
                >
                  <Option value="day">Day</Option>
                  <Option value="week">Week</Option>
                  <Option value="month">Month</Option>
                </Select>
              }
            />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
          <Card>
            <div className="d-flex justify-content-between w-100 align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Last Report Generated on March 22, 20213</h5>
                <Button type="primary" className="ml-4">
                  View
                </Button>
              </div>

              <div>
                <h5>Next Report on March 27, 2013</h5>
              </div>

              <div>
                <Button type="primary">Run On-Demand Report</Button>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
          <Card>
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h4>Current Brand Sentiment</h4>

              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} success={{ percent: 30 }} />
              </Tooltip>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
          <Card
            title="Critical Issue from the last Report (March 22, 2013)"
            extra={<Button type="primary">Assign All</Button>}
          >
            <div className="d-flex-column justify-content-center w-100 align-items-center">
              {customerExperiences.map((experience, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-center pt-4"
                >
                  <h4>{experience}</h4>
                  <Button type="primary" onClick={() => showModal(experience)}>
                    Assign
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DefaultDashboard;

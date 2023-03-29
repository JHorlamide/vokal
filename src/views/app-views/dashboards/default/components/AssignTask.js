import { Button, Form, Input, DatePicker, Alert } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IssueService from "services/IssueService";
import { motion } from "framer-motion";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const rules = {
  issue: [
    {
      required: true,
      message: "Please the issue",
    },
  ],

  dateReported: [
    {
      required: true,
      message: "Date reported is required",
    },
  ],

  assignee: [
    {
      required: true,
      message: "Assignee is required",
    },
  ],

  dueDate: [
    {
      required: true,
      message: "Due date is required",
    },
  ],
};

const AssignTask = ({ issue }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const createIssue = async (values) => {
    form.validateFields();

    try {
      setLoading(true);

      const { data } = await IssueService.createIssue({
        ...values,
        status: "Pending",
      });

      if (data.status === "Success") {
        setLoading(false);
        navigate(`${APP_PREFIX_PATH}/dashboards/sales`);
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setLoading(false);
        setErrorMessage(message);
      }

      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: errorMessage ? 1 : 0,
          marginBottom: errorMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={errorMessage}></Alert>
      </motion.div>

      <Form
        form={form}
        layout="vertical"
        name="register-form"
        onFinish={createIssue}
      >
        <Form.Item
          name="issueName"
          label="Issue"
          rules={rules.issue}
          hasFeedback
          initialValue={issue}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dateReported"
          label="Date Reported"
          rules={rules.dateReported}
          hasFeedback
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="assignee"
          label="Assignee"
          rules={rules.assignee}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Due Date"
          rules={rules.dueDate}
          hasFeedback
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AssignTask;

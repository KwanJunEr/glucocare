"use client";
import React from "react";
import { Table, Badge } from "antd";

const dataSource = [
    {
        key: "1",
        healthmetric: "Blood Pressure",
        value: "130/85 mg/dL",
        trend: "Up",
        label: <Badge color="red" text="Danger" />,
      },
    {
        key: "2",
        healthmetric: "Blood Sugar",
        value: "110 mg/dL",
        trend: "Stable",
        label: <Badge color="green" text="Ok" />,
      },
  {
    key: "3",
    healthmetric: "Heart Rate",
    value: "78bpm",
    trend: "Up",
    label: <Badge color="green" text="Ok" />,
  },
  {
    key: "4",
    healthmetric: "Weight",
    value: "70Kg",
    trend: "Up",
    label: <Badge color="orange" text="Warning" />,
  },
  
];

const columns = [
  {
    title: "Health Metric",
    dataIndex: "healthmetric",
    key: "healthmetric",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "Trend",
    dataIndex: "trend",
    key: "trend",
  },
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
  },
];

const RecentHealthDataTable = () => {
  return (
    <div className="flex flex-col">
      <h5 className="font-semibold">
        Latest Updated Health Data:{" "}
        <span className="text-gray-500 font-bold">
          18th September 2024 (8.00p.m.)
        </span>
      </h5>
      <hr className="text-gray-500 mt-2" />
      <div className="w-full mt-4">
        <Table dataSource={dataSource} columns={columns} pagination={false} />;
      </div>
    </div>
  );
};

export default RecentHealthDataTable;

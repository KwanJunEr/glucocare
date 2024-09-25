"use client";
import React, { useState } from "react";
import type { UploadProps } from "antd";
import { Modal, Form, Input } from "antd";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const Introcard = () => {
  const [isHealthModalvisible, setHealthModalVisible] = useState(false);
  const [isCsvModalVisible, setCsvModalVisible] = useState(false);

  const showHealthModal = () => {
    setHealthModalVisible(true);
  };

  const showCsvModal = () => {
    setCsvModalVisible(true);
  };

  const handleCsvOk = () => {
    setCsvModalVisible(false);
  };

  const handleCsvCancel = () => {
    setCsvModalVisible(false);
  };

  const handleHealthOk = () => {
    setHealthModalVisible(false);
  };

  const handleHealthCancel = () => {
    setHealthModalVisible(false);
  };

  const handleChange = (info: any) => {
    console.log("info", info);
  };

  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white w-[900px]">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="size-14 rounded-lg object-cover"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg w-[500px]">
            <a href="#" className="hover:underline">
              {" "}
              Mr.James Doe Health Dashboard{" "}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700 w-[600px] font-bold">
            Discover Insight Trends of Your Various Health Metrics
          </p>

          <div className="mt-6 sm:flex sm:items-center sm:gap-2">
            <div className="flex space-x-4 flex-row gap-1 text-gray-500">
              <button
                onClick={showHealthModal}
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition"
              >
                Add Health Data
              </button>
              <Modal
                title="Add Health Data"
                open={isHealthModalvisible}
                onOk={handleHealthOk}
                onCancel={handleHealthCancel}
              >
                <Form layout="vertical">
                  <Form.Item
                    name="bodyfat"
                    label="Body Fat Percentage"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid body fat percentage",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="weight"
                    label="Weight"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid weight",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="height"
                    label="Height"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid height",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="bloodpressure"
                    label="Blood Pressure"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid blood pressure",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="bloodglucose"
                    label="Blood Glucose Level"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid blood glucose level",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="hearrate"
                    label="Heart Rate"
                    rules={[
                      {
                        required: true,
                        type: "number",
                        message: "Please input the valid heart rate",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </Modal>

              <button
                onClick={showCsvModal}
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition"
              >
                Import Health CSV
              </button>
              <Modal
                title="Import Health CSV"
                open={isCsvModalVisible}
                onOk={handleCsvOk}
                onCancel={handleCsvCancel}
              >
                <Dragger
                  name="file"
                  multiple={false}
                  action="/upload.do"
                  onChange={handleChange}
                  accept=".csv"
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag CSV file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Modal>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by
              <a href="#" className="font-medium underline hover:text-gray-700">
                {" "}
                John{" "}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </strong>
      </div>
    </article>
  );
};

export default Introcard;

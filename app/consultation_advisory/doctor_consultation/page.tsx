"use client";
import React, { useState } from "react";
import GoogleMaps from "./google_maps/google_maps";
import { Table, Button, Modal, Input, Select, Form, DatePicker } from "antd";

interface Hospital {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

const DoctorConsultation = () => {
  const [address, handleAddress] = useState("");
  const [hospitals, handleHospitals] = useState<Hospital[]>([]);
  const [bookedClinicId, setBookedClinicId] = useState<string | null>(null); // Store the ID of the booked clinic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClinicId, setCurrentClinicId] = useState<string | null>(null); // Track the currently selected clinic for booking

  const showModal = (clinicId: string) => {
    setCurrentClinicId(clinicId); // Set the current clinic's ID
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setBookedClinicId(currentClinicId); // Mark the current clinic as booked
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Clinic Name",
      dataIndex: "clinic",
      key: "clinic",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Opening Hours",
      dataIndex: "opening",
      key: "opening",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text: string, record: any) => (
        <div className="flex flex-row space-x-2">
          <button
            className="h-15 w-30 hover:opacity-90 duration-200 hover:-translate-y-1 p-2 bg-blue-500 text-white font-bold rounded-md shadow-md"
            onClick={() => showModal(record.id)} // Pass the clinic's ID to the showModal function
          >
            {bookedClinicId === record.id ? "Booked" : "Book Appointment"}
          </button>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      id: "1",
      clinic: "Clinic Pertama",
      address: "No. 5, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia",
      phone: "+60 3-2141 2345",
      opening: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 1:00 PM",
    },
    {
      id: "2",
      clinic: "Klinik MediCare",
      address: "29, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia",
      phone: "+60 3-2164 5678",
      opening: "Mon-Sat: 9:00 AM - 5:30 PM, Sun: Closed",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-3xl font-extrabold">
          Welcome to Doctor Consultation
        </h1>
        <p className="mt-2 text-sm text-gray-600 font-bold">
          Find your nearest doctor to book and consult to know more about your health
        </p>
      </div>
      <div className="mt-5 bg-white p-3 rounded-sm">
        <h1 className="font-bold">My Location</h1>
        <p className="mt-1">
          <span className="font-bold">My Current Address:</span>{" "}
          <span className="text-gray-700">{address}</span>
        </p>
        <div className="my-7">
          <GoogleMaps
            handleAddress={handleAddress}
            handleHospital={handleHospitals}
          />
        </div>
      </div>
      <div className="bg-slate-50 p-4 my-3">
        {/* Result Section */}
        <h2 className="text-xl font-bold mb-4">
          Nearby Clinics for You to book an appointment to know more about your health:
        </h2>
        <Table
          dataSource={dataSource}
          columns={columns}
          className="font-bold"
        />
        <Modal
          title="Book Appointment"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div>
            <div className="mt-2">
              <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                <Form.Item label="Name">
                  <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="IC">
                  <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Phone Number">
                  <Input placeholder="input placeholder" />
                </Form.Item>

                <Form.Item label="Date">
                  <DatePicker />
                </Form.Item>

                <Form.Item label="Time Period">
                  <Select>
                    <Select.Option value="1stperiod">10.00a.m. to 10.30a.m.</Select.Option>
                    <Select.Option value="2ndperiod">11.30a.m. to 12.00p.m.</Select.Option>
                    <Select.Option value="3rdperiod">2.00p.m. to 2.30p.m.</Select.Option>
                    <Select.Option value="4thperiod">4.00p.m. to 4.30p.m.</Select.Option>
                  </Select>
                </Form.Item>

                <div className="w-full justify-center items-center space-x-5 ">
                  <Form.Item className="flex flex-row space-x-5 w-full justify-center items-center">
                    <Button type="primary" onClick={handleOk}>
                      Book Appointment
                    </Button>
                    <Button className="ml-5" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DoctorConsultation;

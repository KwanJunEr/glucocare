'use client';
import React from 'react';
import { Button, Card } from 'antd';  // Import Card for better layout

interface AppointmentProps {
  doctor: string;
  appointmentDate: string;
  appointmentTime: string;
  agenda: string;
  location: string;
}

const DoctorAppointmentCard = ({
  doctor,
  appointmentDate,
  appointmentTime,
  agenda,
  location,
}: AppointmentProps) => (
  <Card className="p-4 shadow-lg rounded-lg bg-white border border-gray-400">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Left Side - Appointment Details */}
      <div className="mb-4 md:mb-0">
        <h5 className="text-xl font-bold text-blue-700">{doctor}</h5>
        <p className="text-gray-600"><strong>Date:</strong> {appointmentDate}</p>
        <p className="text-gray-600"><strong>Time:</strong> {appointmentTime}</p>
        <p className="text-gray-600"><strong>Agenda:</strong> {agenda}</p>
        <p className="text-gray-600"><strong>Location:</strong> {location}</p>
      </div>
      
      {/* Right Side - Action Button */}
      <div className="flex items-center">
        <Button type="primary" className="shadow-sm hover:shadow-md">View Appointment</Button>
      </div>
    </div>
  </Card>
);

export default DoctorAppointmentCard;



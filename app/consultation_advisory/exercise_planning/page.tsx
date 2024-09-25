"use client";
import React, { useState } from "react";
import { TimeSpent } from "@/components/exercise/timespent";
import { ExerciseType } from "@/components/exercise/exercisetype";
import { DayIntensity } from "@/components/exercise/dayintensity";
import ExerciseCards from "@/components/exercise/exercisecards";
import { Modal, Form, Alert, Input } from "antd";

const Exercise = () => {
  const today = new Date();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col">
      <div className="my-2">
        <h1 className="text-4xl font-semibold text-gray-800">
          Your Exercise Performance
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Track your daily exercises to live a healthier lifestyle
        </p>
      </div>
      {/*Exercise Cards*/}
      <div className="flex flex-row space-x-3 justify-evenly">
        <div className=" bg-white shadow-lg rounded-lg p-4  my-4  min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Duration Exercise Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">1 Hour</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Steps Walked Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">8500 Steps</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Calories Burned Today
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">350 kcal</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Distance Covered
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">4.2km</h5>
        </div>

        <div className=" bg-white shadow-lg rounded-lg  p-4  my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Daily Goal Achievements
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">85%</h5>
        </div>
      </div>
      {/*Charts*/}
      <div className="my-5">
        <div className="flex flex-row justify-between my-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Your Exercise Performance Dashboard
          </h3>
          <button
            showmodal
            onClick={showModal}
            className="max-h-[40px] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Data
          </button>
          <Modal
            title="Exercise Performance"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Add"
          >
            <Alert
              message={
                "Date: " +
                today.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }
              type="info"
              showIcon
              className="!mb-4"
            />
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              className="w-full"
            >
              <Form.Item
                label="Duration"
                name="duration"
                rules={[
                  {
                    required: true,
                    message: "Please input your exercise duration!",
                  },
                ]}
              >
                <Input className="w-full" />
              </Form.Item>
              <Form.Item
                label="Types of Exercise"
                name="exercisetype"
                rules={[
                  {
                    required: true,
                    message: "Please input your exercise type!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Calories Burned"
                name="calories"
                rules={[
                  {
                    required: true,
                    message: "Please input your calories burned!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Reps"
                name="reps"
                rules={[
                  {
                    required: true,
                    message: "Please input your reps!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Goal Achievement"
                name="goal"
                rules={[
                  {
                    required: true,
                    message: "Please input your goal achievement!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className="flex flex-row gap-2">
          <TimeSpent />
          <ExerciseType />
          <DayIntensity />
        </div>
      </div>
      {/*Recommended Exercise*/}
      <div className="flex flex-col space-y-5">
        <div>
          <h1 className="text-xl font-bold ">Your Recommended Exercise</h1>
          <div className="flex flex-row w-full justify-between">
            {" "}
            {/* Corrected class */}
            <div>
              <h5 className="font-bold text-gray-500">
                Here are a few recommended exercises that you can perform to
                grow healthier
              </h5>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:opacity-80 font-bold">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <ExerciseCards
            exercisetype="Strength"
            exercisetitle="Push-Ups"
            img="https://images.unsplash.com/photo-1686247166156-0bca3e8b55d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVzaCUyMHVwc3xlbnwwfHwwfHx8MA%3D%3D"
            description=" A basic but effective exercise for upper body strength."
          />

          <ExerciseCards
            exercisetype="Strength"
            exercisetitle="Squats"
            img="https://plus.unsplash.com/premium_photo-1661906824628-3ac1f6c4ce1c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXRzfGVufDB8fDB8fHww"
            description="Great for building leg muscles and improving lower body strength."
          />

          <ExerciseCards
            exercisetype="Flexibility"
            exercisetitle="Yoga"
            img="https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D"
            description=" Improves flexibility, balance, and overall mindfulness."
          />
        </div>
      </div>
    </div>
  );
};

export default Exercise;

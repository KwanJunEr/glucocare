"use client";
import React, { useState } from "react";
import { TimeSpent } from "@/components/exercise/timespent";
import { ExerciseType } from "@/components/exercise/exercisetype";
import { DayIntensity } from "@/components/exercise/dayintensity";
import ExerciseCards from "@/components/exercise/exercisecards";
import { CalorieIntake } from "@/components/DietNutrition/calorieintake";
import { FoodGroup } from "@/components/DietNutrition/foodgroup";
import { NutrientType } from "@/components/DietNutrition/nutrienttype";
import DietCards from "@/components/DietNutrition/dietcard";
import { Modal, Form, Alert, Input } from "antd";

const Exercise = () => {
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

  const today = new Date();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col">
      <div className="my-2">
        <h1 className="text-4xl font-semibold text-gray-800">
          Your Dietary Habits
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Track your daily nutrition and diet to live a healthier lifestyle
        </p>
      </div>
      {/*Nutrition Cards*/}
      <div className="flex flex-row space-x-3 justify-evenly">
        <div className="bg-white shadow-lg rounded-lg p-4 my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Daily Calorie Intake
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">1800 kcal</h5>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Protein Consumed
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">100 g</h5>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Fiber Intake
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">25 g</h5>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Water Intake
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">2.5 L</h5>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 my-4 min-w-[200px] items-center justify-center">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Daily Goal Achievements
          </h3>
          <h5 className="text-lg font-medium text-gray-700 mb-4">90%</h5>
        </div>
      </div>
      {/*Charts*/}
      <div className="my-5">
        <div className="flex flex-row justify-between my-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Your Diet and Nutrition Dashboard
          </h3>
          <button
            onClick={showModal}
            className="max-h-[40px] px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Data
          </button>
          <Modal
            title="Diet and Nutrition"
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
                label="Food Group"
                name="foodgroup"
                rules={[
                  {
                    required: true,
                    message: "Please input your food group!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Protein Consumed"
                name="protein"
                rules={[
                  {
                    required: true,
                    message: "Please input your protein consumed!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Fiber Intake"
                name="fiber"
                rules={[
                  {
                    required: true,
                    message: "Please input your fiber intake!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Water Intake"
                name="water"
                rules={[
                  {
                    required: true,
                    message: "Please input your water intake!",
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
          <CalorieIntake />
          <FoodGroup />
          <NutrientType />
        </div>
      </div>
      {/*Recommended Exercise*/}
      <div className="flex flex-col space-y-5">
        <div>
          <h1 className="text-xl font-semibold">Your Recommended Food </h1>
          <div className="flex flex-row justify-between">
            <h5 className="text-medium font-bold ">
              Here are a few recommended food that you can eat to stay healthy
            </h5>
            <button className="bg-blue-300 px-2 py-1 hover:opacity-85 rounded-sm font-bold ">
              View More
            </button>
          </div>
        </div>

        <div className="flex flex-row space-x-6">
          <DietCards
            foodtype="Grain/Vegetable"
            foodtitle="Quinoa Salad"
            img="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVpbm9hJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D"
            description="A nutritious salad made with quinoa, mixed greens, cherry tomatoes, cucumber, and a light lemon vinaigrette."
          />

          <DietCards
            foodtype="Bread/Grain"
            foodtitle="Avocado Toast"
            img="https://plus.unsplash.com/premium_photo-1676106623583-e68dd66683e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww"
            description="Whole-grain toast topped with smashed avocado, sprinkled with salt, pepper, and chili flakes."
          />

          <DietCards
            foodtype="Fish"
            foodtitle="Grilled Salmon"
            img="https://images.unsplash.com/photo-1707576517985-a2e912cca325?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D"
            description="A delicious serving of grilled salmon seasoned with herbs and lemon. Packed with omega-3 fatty acids"
          />
        </div>
      </div>
    </div>
  );
};

export default Exercise;

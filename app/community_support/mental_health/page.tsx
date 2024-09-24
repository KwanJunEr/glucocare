"use client";

import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import TextArea from "antd/es/input/TextArea";
import { Card, Radio, Button } from "antd";
import { Line } from "@ant-design/charts";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const MentalHealth = () => {
  const data = [
    { year: "2011", value: 3 },
    { year: "2012", value: 4 },
    { year: "2013", value: 4 },
    { year: "2014", value: 3.5 },
    { year: "2015", value: 5 },
    { year: "2016", value: 4.9 },
    { year: "2018", value: 6 },
    { year: "2019", value: 7 },
    { year: "2020", value: 9 },
    { year: "2021", value: 13 },
  ];

  const config = {
    data,
    padding: "auto",
    xField: "year",
    yField: "value",
    autoFit: true,
    smooth: true,
  };

  return (
    <div>
      <Title level={2}>Emotion Tracker and Diary</Title>
      <Card title="Log your emotions" bordered={false}>
        <div>
          <Text className="!text-lg">How are you feeling?</Text> <br />
          <Radio.Group buttonStyle="solid" className="!mt-4">
            <Radio.Button value="happy">Happy</Radio.Button>
            <Radio.Button value="sad">Sad</Radio.Button>
            <Radio.Button value="angry">Angry</Radio.Button>
            <Radio.Button value="anxious">Anxious</Radio.Button>
            <Radio.Button value="excited">Excited</Radio.Button>
            <Radio.Button value="calm">Calm</Radio.Button>
          </Radio.Group>
        </div>
        <div className="mt-6">
          <Text className="!text-lg">Diary Entry</Text>
          <TextArea
            rows={6}
            className="!mt-4"
            placeholder="Write about your day and emotions..."
          ></TextArea>
          <Button className="mt-6" type="primary">
            Save Entry
          </Button>
        </div>
      </Card>
      <Card title="Emotion Trends" bordered={false} className="!mt-6">
        <div style={{ height: 400 }}>
          <Line {...config} />
        </div>
      </Card>
      <Card
        title="Recent Entries"
        bordered={false}
        className="!mt-6"
        extra={<DatePicker onChange={onChange} needConfirm />}
      >
        <p>Not Happy today</p>
      </Card>
    </div>
  );
};

export default MentalHealth;

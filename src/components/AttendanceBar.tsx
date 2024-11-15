import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    uv: 50,
    pv: 20,
    amt: 30,
  },
  {
    name: "Tuesday",
    uv: 30,
    pv: 10,
    amt: 60,
  },
  {
    name: "Wednesday",
    uv: 10,
    pv: 70,
    amt: 20,
  },
  {
    name: "Thursday",
    uv: 40,
    pv: 30,
    amt: 30,
  },
  {
    name: "Friday",
    uv: 20,
    pv: 40,
    amt: 40,
  },
  {
    name: "Saturday",
    uv: 50,
    pv: 20,
    amt: 30,
  },
  {
    name: "Sunday",
    uv: 10,
    pv: 80,
    amt: 10,
  },
];

const AttendanceBar = () => {
  return (
    <ResponsiveContainer width="100%" height="88%">
      <BarChart
        width={30}
        height={300}
        data={data}
        barSize={10}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 2" />
        <XAxis dataKey="name" width={10} />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="uv" stackId="a" fill="#7152F3" radius={[10, 10, 10, 10]} />
        <Bar dataKey="pv" stackId="a" fill="#FEB85B" radius={[10, 10, 10, 10]} />
        <Bar dataKey="amt" stackId="a" fill="#F45B69" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceBar;

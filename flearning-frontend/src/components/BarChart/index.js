import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
const BarChart = ({ data }) => {
  console.log("bew data", data);
  const [sales, setSales] = React.useState(data);
  let amount = [];
  let course = [];
  React.useEffect(() => {
    setSales(data);
    amount = [];
    course = [];
    for (let i = 0; i < data?.length; i++) {
      amount.push(data[i].total_amount);
      course.push(data[i].course_name);
    }
    setSeries([
      {
        name: "Doanh thu",
        data: amount,
      },
    ]);

    setOptions({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        offsetX: 0,
        formatter: function (val, opt) {
          return new Intl.NumberFormat("vi-VN").format(Number(val)) + "₫";
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value) {
            // Customize the tooltip value as per your requirement
            return new Intl.NumberFormat("vi-VN").format(Number(value)) + "₫";
          },
        },
      },
      xaxis: {
        categories: course,
        labels: {
          formatter: function (value) {
            // Customize the display value as per your requirement
            return new Intl.NumberFormat("vi-VN").format(Number(value)) + "₫";
          },
        },
      },
    });
  }, [data]);

  console.log("amount: ", amount);
  console.log("course: ", course);

  const [series, setSeries] = useState([
    {
      name: "Doanh thu",
      data: amount,
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      offsetX: 0,
      formatter: function (val, opt) {
        return new Intl.NumberFormat("vi-VN").format(Number(val)) + "₫";
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          // Customize the tooltip value as per your requirement
          return new Intl.NumberFormat("vi-VN").format(Number(value)) + "₫";
        },
      },
    },
    xaxis: {
      categories: course,
      labels: {
        formatter: function (value) {
          // Customize the display value as per your requirement
          return new Intl.NumberFormat("vi-VN").format(Number(value)) + "₫";
        },
      },
    },
  });

  return (
    <div>
      {data.length > 0?<div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>: <div className="h-[350px] flex flex-row items-center"><h3 style={{ margin: "auto", fontSize: "25px" }} className="font-bold">Khong co du lieu</h3></div>}
    </div>
  );
};

export default BarChart;

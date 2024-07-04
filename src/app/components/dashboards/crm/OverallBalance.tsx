"use client";
import React from "react";
import CardBox from "../../shared/CardBox";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Badge } from "flowbite-react";
import { Icon } from "@iconify/react";

const OverallBalance = () => {
  const IconData = [
    {
      icon: "solar:course-up-line-duotone",
      title: "$14,673",
      subtitle: "Total Sales",
      color: "warning",
    },
    {
      icon: "solar:dollar-minimalistic-line-duotone",
      title: "$9,281",
      subtitle: "Total Profit",
      color: "error",
    },
    {
      icon: "solar:flag-2-line-duotone",
      title: "45.1k",
      subtitle: "Total Users",
      color: "success",
    },
    {
      icon: "solar:pie-chart-line-duotone",
      title: "$4,673",
      subtitle: "Total Expense",
      color: "primary",
    },
  ];

  const ChartData1: any = {
    series: [
      {
        name: "BTC",
        data: [3500, 2500, 4000, 2500, 5500, 3500, 2500],
      },
      {
        name: "ETH",
        data: [3000, 1500, 3100, 5000, 3000, 5500, 3500],
      },
    ],
    chart: {
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      show: false,
      strokeDashArray: 3,
      borderColor: "#90A4AE50",
    },
    colors: ["var(--color-primary)", "#DFE5EF"],
    markers: {
      size: 0,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const AreaChartData: any = {
    series: [
      {
        type: "area",
        name: "This Year",
        data: [
          {
            x: "Aug",
            y: 25,
          },
          {
            x: "Sep",
            y: 13,
          },
          {
            x: "Oct",
            y: 20,
          },
          {
            x: "Nov",
            y: 40,
          },
          {
            x: "Dec",
            y: 45,
          },
          {
            x: "Jan",
            y: 50,
          },
          {
            x: "Feb",
            y: 70,
          },
          {
            x: "Mar",
            y: 30,
          },
        ],
      },
      {
        type: "line",
        name: "Last Year",
        chart: {
          foreColor: "#adb0bb",
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
          },
        },
        data: [
          {
            x: "Aug",
            y: 50,
          },
          {
            x: "Sep",
            y: 35,
          },
          {
            x: "Oct",
            y: 30,
          },
          {
            x: "Nov",
            y: 20,
          },
          {
            x: "Dec",
            y: 20,
          },
          {
            x: "Jan",
            y: 30,
          },
          {
            x: "Feb",
            y: 35,
          },
          {
            x: "Mar",
            y: 40,
          },
        ],
      },
    ],
    chart: {
      height: 210,
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      offsetX: 0,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--color-primary)", "rgba(119, 119, 142, 0.05)"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [100],
      },
    },
    grid: {
      borderColor: "#90A4AE30",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <>
      <CardBox>
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="md:col-span-8 col-span-12">
            <div className="flex items-start  justify-between">
              <div>
                <span className="text-sm font-light text-dark dark:text-white">
                  Overall Balance
                </span>
                <h3 className="text-3xl my-1">$2,538,942</h3>
                <div className="flex gap-1 items-center">
                  <Badge
                    color={"lightsuccess"}
                    icon={() => (
                      <Icon
                        icon="solar:alt-arrow-down-bold"
                        className="me-1"
                        height={17}
                      />
                    )}
                  >
                    16.3%
                  </Badge>
                  <small className="text-xs">last 12 months</small>
                </div>
              </div>
              <div className="mb-4">
                <ul
                  className="flex flex-wrap bg-muted dark:bg-dark p-1 rounded-full text-xs font-semibold text-center"
                  id="default-styled-tab"
                  data-tabs-toggle="#default-styled-tab-content"
                  data-tabs-active-classes="text-dark bg-white dark:bg-darkgray dark:text-white"
                  data-tabs-inactive-classes=""
                  role="tablist"
                >
                  <li role="presentation">
                    <button
                      className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                      id="orders-styled-tab"
                      data-tabs-target="#styled-orders"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Orders
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                      id="income-styled-tab"
                      data-tabs-target="#styled-income"
                      type="button"
                      role="tab"
                      aria-controls="income"
                      aria-selected="false"
                    >
                      Expneses
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div id="default-styled-tab-content">
              <div
                className="hidden"
                id="styled-orders"
                role="tabpanel"
                aria-labelledby="orders-tab"
              >
                <Chart
                  options={ChartData1}
                  series={ChartData1.series}
                  type="line"
                  height='210px'
                  width='100%'
                  className="mt-4"
                />
              </div>
              <div
                className="hidden"
                id="styled-income"
                role="tabpanel"
                aria-labelledby="income-tab"
              >
                <div className="mt-4 -ms-3 -me-4">
                  <Chart
                    options={AreaChartData}
                    series={AreaChartData.series}
                    type="area"
                    height='210px'
                    width='100%'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 pb-5">
            <div className="flex flex-col gap-2">
              {IconData.map((item, index) => (
                <div key={index} className="flex gap-3 items-center rounded-md bg-lighthover dark:bg-darkmuted px-4 py-[18px]">
                  <span
                    className={`w-14 h-10 rounded-full flex items-center justify-center  bg-light${item.color} dark:bg-dark${item.color} text-${item.color}`}
                  >
                    <Icon icon={item.icon} height={24} />
                  </span>
                  <div>
                    <p className="text-darklink text-xs font-medium">{item.subtitle}</p>
                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default OverallBalance;

export const Data = [
  {
    id: 1,
    month: "Jan",
    day: "M",
    dailySales: 10,
    subscriptions: 200,
    time: "12am",
  },
  {
    id: 2,
    month: "Mar",
    day: "T",
    dailySales: 28,
    subscriptions: 400,
    time: "3am",
  },
  {
    id: 3,
    month: "May",
    day: "W",
    dailySales: 38,
    subscriptions: 500,
    time: "6pm",
  },
  {
    id: 4,
    month: "July",
    day: "T",
    dailySales: 8,
    subscriptions: 200,
    time: "9pm",
  },
  {
    id: 5,
    month: "Sept",
    day: "F",
    dailySales: 15,
    subscriptions: 600,
    time: "2am",
  },
  {
    id: 6,
    month: "Oct",
    day: "S",
    dailySales: 25,
    subscriptions: 700,
    time: "12pm",
  },
  {
    id: 7,
    month: "Dec",
    day: "S",
    dailySales: 25,
    subscriptions: 400,
    time: "9pm",
  },
];

export const dataChart1 = {
  labels: Data.map((date) => date.day),
  datasets: [
    {
      label: "Daily Sales",
      data: Data.map((data) => data.dailySales),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#f7ca6d",
        "#50AG95",
        "#f3ba2f",
        "#2a71d0",
      ],
      hoverOffset: 4,
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};
export const dataChart2 = {
  labels: Data.map((date) => date.month),
  datasets: [
    {
      label: "Email Subscriptions",
      data: Data.map((data) => data.subscriptions),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#f7ca6d",
        "#50AG95",
        "#f3ba2f",
        "#2a71d0",
      ],
      hoverOffset: 4,
      borderColor: "blue",
      borderWidth: 2,
    },
  ],
};
export const dataChart3 = {
  labels: Data.map((date) => date.time),
  datasets: [
    {
      label: "Email Subscriptions",
      data: Data.map((data) => data.dailySales),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#f7ca6d",
        "#50AG95",
        "#f3ba2f",
        "#2a71d0",
      ],
      hoverOffset: 4,
      borderColor: "blue",
      borderWidth: 2,
    },
  ],
};

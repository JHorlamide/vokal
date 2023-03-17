import { COLORS, COLOR_1, COLOR_2, COLOR_4 } from "constants/ChartConstant";

export const regionData = [
  {
    color: "#3e82f7",
    name: "United States of America",
    value: "37.61%",
  },
  {
    color: "#04d182",
    name: "Brazil",
    value: "16.79%",
  },
  {
    color: "#ffc542",
    name: "India",
    value: "12.42%",
  },
  {
    color: "#fa8c16",
    name: "China",
    value: "9.85%",
  },
  {
    color: "#ff6b72",
    name: "Malaysia",
    value: "7.68%",
  },
  {
    color: "#a461d8",
    name: "Thailand",
    value: "5.11%",
  },
];

export const pagesViewData = [
  {
    title: "Home",
    url: "/app/home/",
    amount: 7616,
  },
  {
    title: "Resources",
    url: "/app/resources/",
    amount: 6923,
  },
  {
    title: "Integrations",
    url: "/integrations/paypal/",
    amount: 5228,
  },
  {
    title: "Partners",
    url: "/partners/our-partners/",
    amount: 3512,
  },
  {
    title: "Developers",
    url: "developers/docs/",
    amount: 1707,
  },
];

export const sessionColor = [COLORS[3], COLORS[0], COLORS[1]];
export const sessionData = [3561, 1443, 2462];
export const sessionLabels = ["Dasktops", "Tablets", "Mobiles"];
const jointSessionData = () => {
  let arr = [];
  for (let i = 0; i < sessionData.length; i++) {
    const data = sessionData[i];
    const label = sessionLabels[i];
    const color = sessionColor[i];
    arr = [
      ...arr,
      {
        data: data,
        label: label,
        color: color,
      },
    ];
  }
  return arr;
};
export const conbinedSessionData = jointSessionData();

export const socialMediaReferralData = [
  {
    title: "Facebook",
    data: [
      {
        data: [12, 14, 2, 47, 42, 15, 47],
      },
    ],
    percentage: 30.1,
    amount: 322,
  },
  {
    title: "Twitter",
    data: [
      {
        data: [9, 32, 12, 42, 25, 33],
      },
    ],
    percentage: 21.6,
    amount: 217,
  },
  {
    title: "Youtube",
    data: [
      {
        data: [10, 9, 29, 19, 22, 9, 12],
      },
    ],
    percentage: -7.1,
    amount: 188,
  },
  {
    title: "Linkedin",
    data: [
      {
        data: [25, 66, 41, 89, 63, 25, 44],
      },
    ],
    percentage: 11.9,
    amount: 207,
  },
  {
    title: "Dribbble",
    data: [
      {
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
      },
    ],
    percentage: -28.5,
    amount: 86,
  },
];

export const uniqueVisitorsDataDay = {
  series: [
    {
      name: "Session Duration",
      data: [12, 4, 7, 15],
    },
    {
      name: "Page Views",
      data: [8, 6, 10, 11],
    },
  ],
  categories: ["12:00 AM", "6:00 AM", "12:00 PM", "6:00 PM"],
};

export const uniqueVisitorsDataWeek = {
  seriesA: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29],
    },
  ],

  seriesB: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29],
    },
    {
      name: "Voice call",
      data: [11, 17, 15, 15, 21, 14],
    },
  ],

  categories: [
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
  ],

  options: {
    chart: {
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },

    colors: [COLOR_1, COLOR_2, COLOR_4],

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],

    plotOptions: {
      bar: {
        horizontal: false,
      },
    },

    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  },
};

export const uniqueVisitorsDataMonth = {
  series: [
    {
      name: "Session Duration",
      data: [35, 41, 62, 42, 13, 18, 29, 25, 31, 15],
    },
    {
      name: "Page Views",
      data: [45, 52, 38, 24, 33, 26, 21, 15, 20, 16],
    },
  ],
  categories: [
    "03 Jan",
    "06 Jan",
    "09 Jan",
    "12 Jan",
    "15 Jan",
    "18 Jan",
    "21 Jan",
    "24 Jan",
    "27 Jan",
    "30 Jan",
  ],
};

export const recentOrderData = [
  {
    id: "#5331",
    name: "Eileen Horton",
    image: "/img/avatars/thumb-1.jpg",
    date: 1573430400,
    amount: 677,
    paymentStatus: "Paid",
    orderStatus: "Ready",
    status: "Rejected",
  },
  {
    id: "#5328",
    name: "Terrance Moreno",
    image: "/img/avatars/thumb-2.jpg",
    date: 1572393600,
    amount: 1328.35,
    paymentStatus: "Paid",
    orderStatus: "Ready",
    status: "Pending",
  },
  {
    id: "#5321",
    name: "Ron Vargas",
    image: "/img/avatars/thumb-3.jpg",
    date: 1593949805,
    amount: 629,
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    status: "Completed",
  },
  {
    id: "#5287",
    name: "Luke Cook",
    image: "/img/avatars/thumb-4.jpg",
    date: 1579132800,
    amount: 25.9,
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    status: "Rejected",
  },
  {
    id: "#5351",
    name: "Joyce Freeman",
    image: "/img/avatars/thumb-5.jpg",
    date: 1591286400,
    amount: 817.5,
    paymentStatus: "Pending",
    orderStatus: "Ready",
    status: "Completed",
  },
];

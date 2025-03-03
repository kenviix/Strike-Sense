// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

const punchData = {
  power: [243, 807, 326, 360, 848, 252, 571, 738, 263],
  speed: [32.68, 26.76, 46.77, 27.22, 45.52, 35.13, 37.28, 31.48, 39.83],
  accuracy: [97.93, 70.39, 56.63, 46.67, 26.91, 54.64, 32.11, 31.98, 99.0],
};

// Analytics Cards Data
export const cardsData = [
  {
    title: "Punch Power",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    value: Math.max(...punchData.power),
    heading: "Max",
    unit: "N",
    series: [
      {
        name: "Punch Power",
        data: punchData.power,
      },
    ],
    barValue: punchData.power[0],
  },
  {
    title: "Punch Speed",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: punchData.speed[0],
    value: Math.max(...punchData.speed),
    heading: "Max",
    unit: "Km/h",
    series: [
      {
        name: "Punch Speed",
        data: punchData.speed,
      },
    ],
  },
  {
    title: "Accuracy",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: punchData.accuracy[0],
    value: Math.max(...punchData.accuracy),
    unit: "%",
    heading: "Max",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: punchData.accuracy,
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "John Wick",
    noti: "has landed the most powerful punch ever recorded.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has landed the fastest punch ever recorded.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has recorded fastest reflex from Strike Sense",
    time: "2 hours ago",
  },
];

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

export const punchData = {
  // "2025-03-04": [
  //   [891.04, 23.03, 191.94, 1, "23:38:17"],
  //   [552.52, 47.66, 186.41, 1, "23:34:49"],
  //   [1412.93, 21.9, 85.07, 0, "23:14:55"],
  //   [1357.93, 38.21, 187.29, 0, "22:33:25"],
  //   [1218.67, 23.56, 112.23, 0, "21:23:03"],
  //   [849.33, 46.46, 52.09, 0, "20:17:28"],
  //   [604.41, 26.45, 130.63, 1, "17:56:09"],
  //   [1094.45, 51.81, 91.96, 1, "17:48:59"],
  //   [852.08, 44.96, 89.32, 1, "16:33:29"],
  //   [854.46, 52.18, 154.47, 1, "16:30:59"],
  //   [1024.62, 53.2, 103.8, 1, "13:22:27"],
  //   [1250.16, 46.39, 139.4, 1, "11:57:44"],
  //   [1222.87, 30.19, 67.28, 0, "10:44:44"],
  //   [676.7, 22.4, 177.2, 1, "10:02:40"],
  //   [925.46, 52.22, 178.32, 0, "07:54:37"],
  //   [1459.26, 37.45, 169.78, 0, "05:16:04"],
  //   [1230.32, 26.12, 151.45, 1, "05:07:29"],
  //   [1140.68, 41.1, 139.57, 0, "03:20:15"],
  //   [1304.55, 37.95, 137.96, 0, "02:29:52"],
  //   [1262.35, 26.77, 68.89, 0, "01:50:29"],
  // ],
  // "2025-03-03": [
  //   [569.29, 29.83, 151.15, 1, "23:39:35"],
  //   [557.62, 40.72, 188.14, 0, "22:28:51"],
  //   [1160.66, 35.92, 137.47, 0, "22:33:46"],
  //   [1277.2, 25.88, 78.52, 1, "22:06:09"],
  //   [1221.51, 47.98, 185.44, 0, "22:04:42"],
  //   [783.97, 52.63, 153.55, 1, "21:23:34"],
  //   [1159.35, 24.48, 76.26, 1, "20:36:17"],
  //   [982.76, 27.81, 74.68, 1, "19:19:39"],
  //   [1116.28, 34.54, 150.03, 1, "16:47:23"],
  //   [653.7, 28.78, 54.34, 1, "16:09:13"],
  //   [523.23, 31.14, 69.71, 1, "16:02:59"],
  //   [1051.56, 38.69, 198.9, 1, "13:53:06"],
  //   [1105.39, 49.95, 123.19, 0, "11:31:45"],
  //   [1223.78, 24.32, 69.82, 1, "11:53:43"],
  //   [685.93, 31.85, 122.48, 0, "10:59:59"],
  //   [1155.24, 23.69, 116.26, 1, "10:28:20"],
  //   [1106.81, 50.52, 146.95, 1, "04:58:47"],
  //   [916.23, 21.54, 145.06, 0, "03:17:26"],
  //   [778.29, 31.49, 71.84, 1, "02:02:35"],
  //   [1449.86, 41.7, 91.17, 0, "00:47:55"],
  // ],
  // "2025-03-02": [
  //   [924.14, 19.86, 90.06, 0, "22:46:13"],
  //   [866.19, 48.82, 111.62, 1, "20:49:06"],
  //   [526.5, 21.17, 87.86, 0, "20:01:42"],
  //   [1436.99, 22.54, 194.8, 1, "18:02:03"],
  //   [1182.33, 47.21, 107.91, 0, "17:13:13"],
  //   [1405.63, 49.31, 197.12, 0, "16:34:42"],
  //   [543.67, 36.66, 143.4, 1, "15:02:45"],
  //   [1338.98, 47.7, 50.17, 1, "14:42:56"],
  //   [989.7, 27.84, 175.21, 1, "10:37:34"],
  //   [920.29, 43.14, 68.21, 0, "10:29:12"],
  //   [938.61, 23.21, 78.59, 0, "08:52:26"],
  //   [814.04, 42.97, 93.23, 1, "05:51:19"],
  //   [795.35, 18.49, 111.2, 0, "05:45:58"],
  //   [928.56, 35.44, 99.87, 1, "05:24:36"],
  //   [943.18, 22.23, 174.82, 1, "04:07:51"],
  //   [1348.08, 33.85, 128.89, 1, "03:39:14"],
  //   [951.07, 52.89, 100.78, 1, "02:43:27"],
  //   [761.5, 46.44, 112.24, 1, "02:32:30"],
  //   [1199.22, 32.76, 148.22, 0, "00:33:31"],
  //   [767.97, 28.75, 138.04, 1, "00:05:36"],
  // ],
  // "2025-03-01": [
  //   [777.09, 51.99, 145.68, 1, "20:08:49"],
  //   [863.65, 50.71, 94.6, 1, "19:01:34"],
  //   [1020.22, 33.76, 139.71, 1, "18:13:17"],
  //   [612.49, 42.79, 154.96, 1, "15:59:20"],
  //   [603.1, 26.09, 72.35, 1, "15:28:43"],
  //   [671.36, 19.85, 191.16, 1, "12:24:17"],
  //   [1082.74, 18.93, 84.34, 0, "11:44:07"],
  //   [1048.33, 20.17, 194.02, 0, "11:07:06"],
  //   [522.52, 28.37, 92.41, 1, "10:36:15"],
  //   [668.54, 39.07, 145.22, 1, "10:07:38"],
  //   [1055.8, 45.47, 76.28, 1, "09:48:45"],
  //   [1104.13, 27.53, 62.18, 0, "07:33:55"],
  //   [1032, 23.64, 111.28, 1, "06:19:42"],
  //   [636.86, 38.26, 95.58, 0, "05:31:27"],
  //   [560.55, 23.97, 96.14, 1, "05:10:43"],
  //   [1297, 32.43, 61.11, 0, "04:09:13"],
  //   [1037.97, 32.98, 139.42, 0, "04:18:45"],
  //   [1346.64, 38.67, 120.41, 1, "03:44:06"],
  //   [951.58, 32.7, 98.16, 0, "03:19:19"],
  //   [1164.82, 51.26, 168.17, 0, "02:35:29"],
  // ],
  // "2025-02-29": [
  //   [777.09, 51.99, 145.68, 1, "20:08:49"],
  //   [863.65, 50.71, 94.6, 1, "19:01:34"],
  //   [1020.22, 33.76, 139.71, 1, "18:13:17"],
  //   [612.49, 42.79, 154.96, 1, "15:59:20"],
  //   [603.1, 26.09, 72.35, 1, "15:28:43"],
  //   [671.36, 19.85, 191.16, 1, "12:24:17"],
  //   [1082.74, 18.93, 84.34, 0, "11:44:07"],
  //   [1048.33, 20.17, 194.02, 0, "11:07:06"],
  //   [522.52, 28.37, 92.41, 1, "10:36:15"],
  //   [668.54, 39.07, 145.22, 1, "10:07:38"],
  //   [1055.8, 45.47, 76.28, 1, "09:48:45"],
  //   [1104.13, 27.53, 62.18, 0, "07:33:55"],
  //   [1032, 23.64, 111.28, 1, "06:19:42"],
  //   [636.86, 38.26, 95.58, 0, "05:31:27"],
  //   [560.55, 23.97, 96.14, 1, "05:10:43"],
  //   [1037.97, 32.98, 139.42, 0, "04:18:45"],
  //   [1297, 32.43, 61.11, 0, "04:09:13"],
  //   [1346.64, 38.67, 120.41, 1, "03:44:06"],
  //   [951.58, 32.7, 98.16, 0, "03:19:19"],
  //   [1164.82, 51.26, 168.17, 0, "02:35:29"],
  // ],
  // "2025-02-28": [
  //   [1283.34, 37.37, 122.52, 1, "22:25:28"],
  //   [753.8, 48.66, 174.61, 0, "21:34:16"],
  //   [1258.27, 30.5, 114.26, 1, "20:36:17"],
  //   [500.46, 52.13, 62.84, 1, "20:14:08"],
  //   [1035.13, 26.65, 121.41, 1, "17:47:18"],
  //   [1268.37, 21.35, 83.24, 0, "16:19:03"],
  //   [1468.2, 37.81, 102.77, 1, "15:29:31"],
  //   [518.65, 48.63, 77.28, 0, "12:14:52"],
  //   [1273.17, 30.25, 182.05, 1, "12:55:07"],
  //   [1141.84, 31.28, 133.02, 1, "11:08:55"],
  //   [1355.38, 26.78, 119.71, 1, "10:09:19"],
  //   [791.3, 26.3, 158.19, 1, "09:51:49"],
  //   [1215.07, 27.95, 138.44, 1, "07:52:41"],
  //   [917.71, 44.42, 194.82, 1, "05:34:12"],
  //   [1219.27, 52.23, 153.52, 0, "04:21:10"],
  //   [915.79, 31.04, 183.74, 1, "03:50:33"],
  //   [1174.45, 28.86, 152.64, 0, "03:42:36"],
  //   [1307.31, 28.66, 104.13, 1, "03:39:36"],
  //   [986.85, 30.28, 177.44, 1, "02:30:38"],
  //   [1185.07, 22.56, 56.83, 0, "00:30:54"],
  // ],
};

export const addPunchData = (key, value) => {
  if (punchData.hasOwnProperty(key)) {
    punchData[key].push(value);
  } else {
    punchData[key] = [value];
  }
};
export const getPunchData = () => punchData;

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

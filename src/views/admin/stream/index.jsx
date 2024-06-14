// import { useEffect, useState } from "react";
// import { io } from "socket.io-client"; // Ensure correct import for socket.io-client
// const socket = io("http://localhost:3001"); // Correct import and URL

// export const Stream = () => {
//   const [pressure, setPressure] = useState({
//     toe: 0,
//     heel: 0,
//     mt_1: 0,
//     mt_2: 0,
//     date: new Date(),
//   });

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("Connected to server with ID:", socket.id); // Connection log
//     });

//     socket.on("pressureReading", (data) => {
//       setPressure(data);
//     });

//     socket.on("disconnect", () => {
//       console.log("Disconnected from server");
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//     };
//   }, []);

//   return (
//     <div>
//       <div>Pressure Update</div>
//       <br />

//       <div>Toe: {pressure.toe}</div>
//       <br />
//       <div>Heel: {pressure.heel}</div>
//       <br />
//       <div>Mt_1: {pressure.mt_1}</div>
//       <br />
//       <div>Mt_2: {pressure.mt_2}</div>
//     </div>
//   );
// };

// import { io } from "socket.io-client"; // Ensure correct import for socket.io-client
// const socket = io("http://localhost:3001"); // Correct import and URL

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { io } from "socket.io-client"; // Ensure correct import for socket.io-client
const socket = io("http://localhost:3001"); // Correct import and URL

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Real-time Pressure Data",
    },
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
  },
};

const labels = ["Toe", "Heel", "MT-1", "MT-5"];

// Function to generate pressure reading
function generatePressureReading() {
  const pressureValue = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
  const rt1 = Math.floor(Math.random() * 10);
  const rt2 = Math.floor(Math.random() * 10);
  const rt3 = Math.floor(Math.random() * 10);
  const rt4 = Math.floor(Math.random() * 10);

  // Helper function to format numbers to a maximum of four significant digits
  const formatNumber = (num) => parseFloat(num.toFixed(4));

  const currentDate = new Date();
  return {
    toe: formatNumber(pressureValue * rt1),
    heel: formatNumber(pressureValue * rt2),
    mt_1: formatNumber(pressureValue * rt3),
    mt_2: formatNumber(pressureValue * rt4),
    date: currentDate,
  };
}

export function Stream() {
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Real-time Pressure Data",
        data: Array(labels.length).fill(0),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  });

  const chartRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const reading = generatePressureReading();
  //     setData((prevData) => ({
  //       labels,
  //       datasets: [
  //         {
  //           ...prevData.datasets[0],
  //           data: [reading.toe, reading.heel, reading.mt_1, reading.mt_2],
  //         },
  //       ],
  //     }));
  //   }, 1000); // Update every second

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id); // Connection log
    });

    socket.on("pressureReading", (data) => {
      // setPressure(data);
      setData((prevData) => ({
        labels,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [data.toe, data.heel, data.mt_1, data.mt_5],
          },
        ],
      }));
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Cleanup on unmount
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
}

export default Stream;

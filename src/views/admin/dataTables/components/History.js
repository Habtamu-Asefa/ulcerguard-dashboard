import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const History = ({userId}) => {
  const [pressureData, setPressureData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [History, setHistory] = useState([]);
  const [selectedHistory, setselectedHistory] = useState(null);


  
  useEffect(() => {
    
    const mockUserdata = {

      name: 'inas ibrahim',
      email: 'inasibrahim@gmail.com',
      dob: '1990-01-01',
      weight: '52kg',
      height: '174cm',
      gender: 'Female'
    }

    // mock data for now
    // const pressuredata = [0,43, 40, 50, 40, 70, 70, 68, 58, 40, 60, 40, 50, 36];
    // const timedata = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    
    const calculateAge = (dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate() )){
        age --;
      }
      return age;
    }

    const age = calculateAge(mockUserdata.dob)
    setUserData({...mockUserdata, age});
    // setPressureData(pressuredata);
    // setTimeData(timedata);

    const mockHistoryList = [
      { date: '2023-01-01', data: { pressure: [30, 80, 50, 60, 30, 80], time: ['0', '1', '2', '3', '4', '5'] } },
      { date: '2023-01-02', data: { pressure: [20, 30, 40, 50, 60, 70], time: ['0', '1', '2', '3', '4', '5'] } },
      { date: '2023-01-03', data: { pressure: [25, 35, 45, 55, 65, 75], time: ['0', '1', '2', '3', '4', '5'] } },
    ];

    setHistory(mockHistoryList);

  }, [userId]);

  const handleHistoryclick = (history) => {

    setselectedHistory(history);
    setPressureData(history.data.pressure);
    setTimeData(history.data.time);
    
    
  }

  const canvasData = {
    labels: timeData,
    datasets: [
      {
        label: 'Pressure',
        borderColor: 'black',
        pointRadius: 1,
        lineTension: 0.4,
        data: pressureData,
        borderWidth: 1,
      },

    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'black',
          font: {
            family: 'Nunito',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: Math.max(...pressureData) + 10, 
        ticks: {
          stepSize: 10,
          color: 'black',
          font: {
            family: 'Nunito',
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: '10rem',
    maxWidth: '540px',
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '0.375rem',
    padding: '0.5rem',
    backgroundColor: 'white',
  };

  

  return (

    <div style={{width:'100%'}}>

      

      <div style={{ backgroundColor: 'white', padding: '1rem',width:'100%' }}>
        <div style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold',color:'green',width:'100%' }}>Patient Data</div>
        
          {userData && (
            <div style={{ marginBottom: '1rem', display: 'flex',gap:'1rem',fontSize:'1.2rem',width:'100%' }}>
              <div style={{width: '50%'}}>
                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Name</span> {userData.name}</div>
                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Email</span> {userData.email}</div>

                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Age</span> {userData.age}</div>
              </div>

              <div style={{width: '50%'}}>
                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Weight</span> {userData.weight}</div>
                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Height </span>{userData.height}</div>
                <div style={{display:'flex', gap:'1rem',alignItems:'center', borderRadius:'8px',marginBottom:'1rem',paddingLeft:'0.5rem',height:'30px'}}><span style={{color:'gray'}}>Gender</span> {userData.gender}</div>
              </div>

            </div>
          )}

        <div style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold',color:'green',width:'100%' }}>Patient pressure data</div>
        <div style={{display: 'flex',gap:'8rem',width:'100%'}}>

            <div style={{display: 'flex',flexDirection: 'column',gap: '1rem',width:'50%'}}>
            <p style={{color:'green',fontSize:'1rem'}}>History list</p>
              {History.map((history,index) => (
                <li key={index} onClick={() => handleHistoryclick(history)} style={{
                  cursor: 'pointer',

                  marginBottom: '0.2rem',
                  border: selectedHistory === history ? '2px solid green' : '1px solid black',
                  padding: '0.2rem',
                  width:'50%',
                  borderRadius: '0.375rem'
                }}>{history.date}</li>
              ))}
            </div>

            <div style={graphStyle}>
              
              <Line id="pressure" options={options} data={canvasData} />
            </div>
      </div>
        

      </div>
    </div>
  );
};

export default History;



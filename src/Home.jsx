
import {useState} from 'react';
import './Home.css';
import DatePicker from './DatePicker';
import Graph from './Graph';



function Home() {
  function getExchangeData() {
    const apiURL = `https://api.exchangerate.host/timeseries?base=KWD&symbols=USD,EUR&start_date=${startDate}&end_date=${endDate}`;
    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const { rates } = data;
      const dateList = Object.keys(rates);
      const dataList = Object.values(rates);
      const usdData = [];
      const eurData = [];
      dataList.map(dataItem => {
        return Object.keys(dataItem).map((currencyKey) => {
          return currencyKey.toUpperCase() === 'USD'
          ? usdData.push(dataItem[currencyKey])
          : eurData.push(dataItem[currencyKey]);
        })
      });
      setGraphData({dateList, usdData, eurData});
    }).catch(err => {
      // Can replace this with logging and showing error message to user
      console.log(err);
    });
  }

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [graphData, setGraphData] = useState({});
  return (
    <div className="home-container">
      <header className="home-header">
        Welcome to USD and EUR exchange rate calculator
      </header>
      <div className="home-content">
      <DatePicker placeholderText="Start date" date={startDate} onDateChange={setStartDate}/>
      <DatePicker placeholderText="End date" date={endDate} onDateChange={setEndDate}/>
      <input type="submit" calue="Submit" onClick={() => getExchangeData()}/>
      </div>
      <Graph graphData={graphData}/>
    </div>
  );
}

export default Home;

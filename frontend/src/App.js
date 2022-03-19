import React, { useEffect, useState } from 'react'
// import * as ReactBootStrap from 'react-bootstrap';
import Data from './screens/Data';

const App = () => {
  
  const [actualData, setData] = useState([]);
  
  useEffect(() => {
   const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    const getData = async () => {
    try {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);

    } catch(err) {
      console.log("the error is ",err);
    }
  };

  getData();
  },[]);



  return (
    
    <div className='coin-app'>
      {actualData.map(item => {
        return (
          <Data
            key={item.id}
            name={item.name}
            price={item.current_price}
            symbol={item.symbol}
            marketcap={item.total_volume}
            volume={item.market_cap}
            image={item.image}
            priceChange={item.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App
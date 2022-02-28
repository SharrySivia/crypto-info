import { useEffect, useState } from "react";

import FormInput from "../../Components/Forminput/Forminput.component";
import CoinDetails from "../../Components/Coindetails/Coindetails.component";

import { getCoindata } from "../../Api/coindata";

import "./Dashboard.styles.scss";

function Dashboard() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCoindata();
      setCoins(data);
    };

    getData();
  }, [setCoins]);

  return (
    <div className="dashboard">
      <div className="header">
        <h3 className="heading">Dashboard</h3>
        <FormInput type="text" placeholder="Search" />
      </div>
      <div className="headings">
        <span>Cryptocurrency</span>
        <span>Low</span>
        <span>Current Price (US$)</span>
        <span>Action</span>
      </div>
      {coins.map((coin) => (
        <CoinDetails
          coinIcon={coin.image}
          coinName={coin.name}
          coinLow={coin.low_24h}
          coinCurrent={coin.current_price}
        />
      ))}
    </div>
  );
}

export default Dashboard;

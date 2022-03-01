import { useEffect, useContext } from "react";

import { CoinsContext } from "../../Context/coinsContext.js";

import FormInput from "../../Components/Forminput/Forminput.component";
import CoinDetails from "../../Components/Coindetails/Coindetails.component";

import { getCoindata, subscribeToWSCoinData } from "../../Api/coindata";

import "./Dashboard.styles.scss";

function Dashboard() {
  const [state, dispatch] = useContext(CoinsContext);
  const { coinsData } = state;

  useEffect(() => {
    const getData = async () => {
      const data = await getCoindata();
      const coinsIndex = {};
      const assests = [];
      const coinsData = data.map((coin, index) => {
        coinsIndex[coin.id] = index;
        assests.push(coin.id);
        return {
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          low_24h: coin.low_24h,
          status: "steady",
        };
      });

      dispatch({
        type: "ADD_COINS_DATA",
        payload: {
          coinsData,
          coinsIndex,
        },
      });

      const conn = subscribeToWSCoinData(assests.join(","));
      conn.onmessage = (event) => {
        const updatedCoinsData = coinsData;
        const eventData = JSON.parse(event.data);
        console.log(eventData);
        for (const coin in eventData) {
          const prevPrice = updatedCoinsData[coinsIndex[coin]].current_price;
          let status = "";
          if (Number(prevPrice) > Number(eventData[coin])) {
            status = "Decreasing";
          } else if (Number(prevPrice) < Number(eventData[coin])) {
            status = "Increasing";
          } else {
            status = "Steady";
          }
          updatedCoinsData[coinsIndex[coin]].current_price = eventData[coin];
          updatedCoinsData[coinsIndex[coin]].status = status;
        }

        dispatch({
          type: "UPDATE_COINS_DATA",
          payload: updatedCoinsData,
        });
      };

      setTimeout(() => {
        conn.close();
      }, 10000);
    };

    getData();
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="header">
        <h3 className="heading">Dashboard</h3>
        <FormInput type="text" placeholder="Search" />
      </div>
      <div className="cryptocurrency-details-container">
        <div className="row headings">
          <span>Cryptocurrency</span>
          <span>Low (-24h)</span>
          <span>Current Price (US$)</span>
          <span>Action</span>
        </div>
        {coinsData.map((coin) => (
          <CoinDetails
            coinIcon={coin.image}
            coinName={coin.name}
            coinLow={coin.low_24h}
            coinCurrent={coin.current_price}
            status={coin.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

import { useContext, useState } from "react";

import { CoinsContext } from "../../Context/coinsContext.js";
import { UserContext } from "../../Context/userContext.js";

import FormInput from "../../Components/Forminput/Forminput.component";
import CoinDetails from "../../Components/Coindetails/Coindetails.component";

import "./Dashboard.styles.scss";

function Dashboard() {
  const [state] = useContext(CoinsContext);
  const { coinsData, isLoading, coinsIndex } = state;
  const [searchQuery, setSearchQuery] = useState(null);
  const [, dispatch] = useContext(UserContext);

  const handleChange = (inputText) => {
    setSearchQuery(inputText);
  };

  const handleClick = (data) => {
    dispatch({
      type: "ADD_TO_WATCHLIST",
      payload: data,
    });
  };

  const filteredCoinsData = searchQuery
    ? coinsData.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : coinsData;

  return (
    <div className="dashboard">
      <div className="header">
        <h3 className="heading">Dashboard</h3>
        <FormInput
          type="text"
          placeholder="Search"
          handleChange={handleChange}
        />
      </div>
      <div className="cryptocurrency-details-container">
        <div className="row headings">
          <span>Cryptocurrency</span>
          <span>Low (-24h)</span>
          <span>Current Price (US$)</span>
          <span>Action</span>
        </div>
        {filteredCoinsData.map((coin) => (
          <CoinDetails
            key={coin.index}
            id={coin.id}
            index={coin.index}
            coinIcon={coin.image}
            coinName={coin.name}
            coinLow={coin.low_24h}
            coinCurrent={coin.current_price}
            status={coin.status}
            isLoading={isLoading}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

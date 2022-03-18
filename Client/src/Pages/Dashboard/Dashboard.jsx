import { useContext, useState } from "react";

import { CoinsContext } from "../../Context/coinsContext.js";
import { UserContext } from "../../Context/userContext.js";
import { addToWatchlist } from "../../Api/user.js";

import FormInput from "../../Components/Forminput/Forminput.component";
import CoinDetails from "../../Components/Coindetails/Coindetails.component";

import "./Dashboard.styles.scss";

function Dashboard() {
  const [{ coinsData, isLoading }] = useContext(CoinsContext);
  const [{ user, watchlist }, dispatch] = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleChange = (input) => {
    setSearchQuery(input.value);
  };

  const handleClick = async (data) => {
    const { watchlist, err } = await addToWatchlist({
      userId: user.id,
      watchlist: data,
    });

    if (!err) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      dispatch({
        type: "ADD_TO_WATCHLIST",
        payload: watchlist,
      });
    } else {
      console.log(err.message);
    }
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
          name="search"
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
        {filteredCoinsData.map((coin) => {
          const inWatchlist =
            watchlist.findIndex((c) => c.index === coin.index) >= 0;
          return (
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
              buttonText={inWatchlist ? "In watchlist" : "Add to watchlist"}
              inWatchlist={inWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
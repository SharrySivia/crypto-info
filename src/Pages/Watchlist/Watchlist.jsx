import { useContext } from "react";
import { UserContext } from "../../Context/userContext.js";
import { CoinsContext } from "../../Context/coinsContext.js";

import CoinDetails from "../../Components/Coindetails/Coindetails.component";

import "./Watchlist.styles.scss";

function Watchlist() {
  const [coinsState] = useContext(CoinsContext);
  const [state, dispatch] = useContext(UserContext);

  const handleClick = ({ index }) => {
    const updatedWatchlist = state.watchlist.filter((coin) => {
      return coin.index !== index;
    });

    localStorage.setItem("Watchlist", JSON.stringify(updatedWatchlist));
    dispatch({
      type: "REMOVE_FROM_WATCHLIST",
      payload: updatedWatchlist,
    });
  };

  return (
    <div className="watchlist">
      <h3 className="heading">Watchlist</h3>
      <div className="container">
        <div className="row headings">
          <span>Cryptocurrency</span>
          <span>Low (-24h)</span>
          <span>Current Price (US$)</span>
          <span>Action</span>
        </div>
        {state.watchlist.map((coin) => {
          const coinData = coinsState.coinsData[coin.index];
          return (
            <CoinDetails
              key={coin.index}
              id={coinData.id}
              coinIcon={coinData.image}
              coinName={coinData.name}
              coinLow={coinData.low_24h}
              coinCurrent={coinData.current_price}
              status={coinData.status}
              isLoading={false}
              index={coin.index}
              handleClick={handleClick}
              buttonText="Remove from list"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Watchlist;

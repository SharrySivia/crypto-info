import { useContext, useState } from "react";

import { UserContext } from "../../Context/userContext.js";
import { CoinsContext } from "../../Context/coinsContext.js";
import { updateWatchlist } from "../../Api/user.js";

import CoinDetails from "../../Components/Coindetails/Coindetails.component";
import EmptyImage from "../../Assets/empty.png";

import "./Watchlist.styles.scss";

function Watchlist() {
  const [coinsState] = useContext(CoinsContext);
  const [loading, setLoading] = useState(false);
  const [{ user, watchlist }, dispatch] = useContext(UserContext);

  const handleClick = async ({ index }) => {
    setLoading(true);
    const updatedWatchlist = watchlist.filter((coin) => {
      return coin.index !== index;
    });

    const { err } = await updateWatchlist({
      userId: user.id,
      watchlist: updatedWatchlist,
    });

    if (!err) {
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      dispatch({
        type: "REMOVE_FROM_WATCHLIST",
        payload: updatedWatchlist,
      });
    } else {
      console.log(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="watchlist">
      <h3 className="heading">Watchlist</h3>
      {!user ? (
        <div className="error-container">
          <p className="error">Please signin to use this feature!</p>
        </div>
      ) : watchlist.length ? (
        <div className="container">
          <div className="row headings">
            <span>Cryptocurrency</span>
            <span>Low (-24h)</span>
            <span>Current Price (US$)</span>
            <span>Action</span>
          </div>
          {watchlist &&
            watchlist.map((coin) => {
              const coinData = coinsState.coinsData[coin.index];
              console.log(coin);
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
                  loading={loading}
                  index={coin.index}
                  handleClick={handleClick}
                  buttonText="Remove from list"
                />
              );
            })}
        </div>
      ) : (
        <div className="error-container">
          <img src={EmptyImage} alt="empty" className="image" />
          <p className="error">
            oops! No coins in your watchlist go to dashboard and add some coins
            to watchlist to keep track of them!
          </p>
        </div>
      )}
    </div>
  );
}

export default Watchlist;

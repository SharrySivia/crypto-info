import { useContext, useEffect, useRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar.component";
import Dashboard from "../Dashboard/Dashboard";
import Watchlist from "../Watchlist/Watchlist";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

import { CoinsContext } from "../../Context/coinsContext.js";
import { UserContext } from "../../Context/userContext";
import {
  getAllCoindata,
  subscribeToWSCoinData,
  getCoinData,
} from "../../Api/coindata";

import { updateWatchlist } from "../../Api/user";

import "./Homepage.styles.scss";

function Homepage() {
  const [, dispatch] = useContext(CoinsContext);
  const [{ user, watchlist }] = useContext(UserContext);

  const connectionRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCoindata();
      const coinsIndex = {};
      const assests = [];
      const coinsData = data.map((coin, index) => {
        coinsIndex[coin.id] = index;
        assests.push(coin.id);
        return {
          id: coin.id,
          index: index,
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          low_24h: coin.low_24h,
          status: "steady",
        };
      });

      //Checking if the coins in the watchlist are present in the fetched coins list
      // let watchlistUpdated = false;
      //   watchlist.forEach(async (coin) => {
      //     const currentCoinIndex = coinsIndex[coin.id];
      //     if (currentCoinIndex >= 0) {
      //       if (coin.index !== currentCoinIndex) {
      //         coin.index = currentCoinIndex;
      //         watchlistUpdated = true;
      //         console.log("Coin is present, but index is different");
      //       } else {
      //         console.log("Coin is present and index is same");
      //       }
      //     } else {
      //       console.log("Coin is not present in the fetched list");
      //       console.log("Fetching");
      //       const data = await getCoinData(coin.id);

      //       const fetchedCoin = {
      //         id: data.id,
      //         index: coinsData.length,
      //         symbol: data.symbol,
      //         name: data.name,
      //         image: data.image.thumb,
      //         current_price: data.market_data.current_price.usd,
      //         low_24h: data.market_data.low_24h.usd,
      //         status: "steady",
      //       };
      //       assests.push(coin.id);
      //       coinsIndex[coin.id] = coinsData.length;
      //       coinsData.push(fetchedCoin);
      //       watchlistUpdated = true;
      //     }
      //   });

      // if (watchlistUpdated) {
      //   console.log(watchlist);
      //   // const {watchlist, err} = await updateWatchlist({userId: user.id, watchlist: watchlist});
      // }
      // console.log(coinsData);
      dispatch({
        type: "ADD_COINS_DATA",
        payload: {
          coinsData,
          coinsIndex,
        },
      });

      // const conn = subscribeToWSCoinData(assests.join(","));
      // connectionRef.current = conn;
      // conn.onmessage = (event) => {
      //   const eventData = JSON.parse(event.data);
      //   // console.log(eventData);
      //   for (const coin in eventData) {
      //     const coinIndex = coinsIndex[coin];
      //     const prevPrice = Number(coinsData[coinIndex].current_price);
      //     const updatedPrice = Number(eventData[coin]);
      //     let status = "";
      //     if (prevPrice > updatedPrice) {
      //       status = "Decreasing";
      //     } else if (prevPrice < updatedPrice) {
      //       status = "Increasing";
      //     } else {
      //       status = "Steady";
      //     }
      //     coinsData[coinIndex].current_price = updatedPrice;
      //     coinsData[coinIndex].status = status;
      //   }

      //   dispatch({
      //     type: "UPDATE_COINS_DATA",
      //     payload: coinsData,
      //   });
      // };
    };

    getData();

    // window.addEventListener("beforeunload", () => {
    //   connectionRef.current.close();
    // });
  }, [dispatch, watchlist]);

  return (
    <div className="homepage">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route
          path="signin"
          element={user ? <Navigate replace to="/" /> : <Signin />}
        />
        <Route
          path="signup"
          element={user ? <Navigate replace to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default Homepage;

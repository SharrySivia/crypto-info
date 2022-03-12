import { useContext } from "react";
import { UserContext } from "../../Context/userContext.js";
import { CoinsContext } from "../../Context/coinsContext.js";

import "./Watchlist.styles.scss";

function Watchlist() {
  const [state, dispatch] = useContext(UserContext);

  return (
    <div className="watchlist">
      <h3 className="heading">Watchlist</h3>
      {state.watchlist.map((wl) => (
        <div>
          {wl.index},{wl.id}
        </div>
      ))}
    </div>
  );
}

export default Watchlist;

import CustomButton from "../Custombutton/Custombutton.component";
import "./Coindetails.styles.scss";

function CoinDetails({ coinIcon, coinName, coinLow, coinCurrent }) {
  return (
    <div className="coin-details">
      <div className="coin-title">
        <img src={coinIcon} alt="Coin icon" className="icon" />
        <span className="coin-name">{coinName}</span>
      </div>
      <span className="coin-low">{coinLow}</span>
      <span className="coin-current">{coinCurrent}</span>
      <CustomButton text="Add to watchlist" />
    </div>
  );
}

export default CoinDetails;

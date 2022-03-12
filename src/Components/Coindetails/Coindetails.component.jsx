import CustomButton from "../Custombutton/Custombutton.component";
import "./Coindetails.styles.scss";

function CoinDetails({
  id,
  coinIcon,
  coinName,
  coinLow,
  coinCurrent,
  status,
  isLoading,
  index,
  handleClick,
}) {
  return (
    <div className="coin-details row">
      <div className="coin-title">
        <img src={coinIcon} alt="Coin icon" className="icon" />
        <span className="coin-name">{coinName}</span>
      </div>
      <span className="coin-low">{coinLow}</span>
      <span className={`coin-current ${status.toLowerCase()}`}>
        {isLoading ? "..." : coinCurrent}
        {!isLoading
          ? status === "Increasing"
            ? " \u2191"
            : status === "Decreasing"
            ? " \u2193"
            : " -"
          : ""}
      </span>
      <CustomButton
        text="Add to watchlist"
        handleClick={() => handleClick({ index, id })}
      />
    </div>
  );
}

export default CoinDetails;

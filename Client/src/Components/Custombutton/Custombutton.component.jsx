import "./Custombutton.styles.scss";

function CustomButton({ text, handleClick, isDisabled }) {
  return (
    <button
      className="custom-btn"
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default CustomButton;

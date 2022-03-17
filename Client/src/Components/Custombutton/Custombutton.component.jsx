import "./Custombutton.styles.scss";

function CustomButton({ text, handleClick, isDisabled, varient }) {
  return (
    <button
      className={`custom-btn ${varient ? `custom-btn-${varient}` : ""}`}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default CustomButton;

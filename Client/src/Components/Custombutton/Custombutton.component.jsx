import "./Custombutton.styles.scss";

function CustomButton({ text, handleClick, isDisabled, varient, isLoading }) {
  return (
    <button
      className={`custom-btn ${varient ? `custom-btn-${varient}` : ""}`}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isLoading ? <i class="fas fa-circle-notch fa-spin"></i> : text}
    </button>
  );
}

export default CustomButton;

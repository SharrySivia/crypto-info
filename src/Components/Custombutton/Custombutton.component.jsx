import "./Custombutton.styles.scss";

function CustomButton({ text, handleClick }) {
  return (
    <button className="custom-btn" type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomButton;

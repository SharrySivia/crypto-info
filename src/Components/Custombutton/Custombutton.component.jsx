import "./Custombutton.styles.scss";

function CustomButton({ text }) {
  return (
    <button className="custom-btn" type="button">
      {text}
    </button>
  );
}

export default CustomButton;

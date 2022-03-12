import "./Forminput.styles.scss";

function FormInput({ type, placeholder, handleChange }) {
  return (
    <input
      className="form-input"
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default FormInput;

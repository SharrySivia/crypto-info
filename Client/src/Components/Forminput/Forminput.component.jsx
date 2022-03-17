import "./Forminput.styles.scss";

function FormInput({
  type,
  value,
  name,
  placeholder,
  handleChange,
  isRequired,
}) {
  return (
    <input
      className="form-input"
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      required={isRequired}
      onChange={(e) => handleChange(e.target)}
    />
  );
}

export default FormInput;

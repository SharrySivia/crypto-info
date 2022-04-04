import "./Forminput.styles.scss";

function FormInput({
  type,
  value,
  name,
  placeholder,
  handleChange,
  isRequired,
  err,
}) {
  return (
    <input
      className={`form-input ${
        err.message ? (!err.type || err.type === name ? "err" : "") : ""
      }`}
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

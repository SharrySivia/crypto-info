import "./Forminput.styles.scss";

function FormInput({ type, placeholder }) {
  return <input className="form-input" type={type} placeholder={placeholder} />;
}

export default FormInput;

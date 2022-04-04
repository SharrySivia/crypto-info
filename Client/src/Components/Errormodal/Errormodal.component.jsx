import "./Errormodal.styles.scss";

function ErrorModal({ varient, text }) {
  return <div className={`error-modal ${varient}`}>{text}</div>;
}

export default ErrorModal;

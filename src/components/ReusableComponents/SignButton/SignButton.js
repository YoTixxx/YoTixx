import "./SignButton.scss";

const SignButton = (props) => {
  return (
    <div>
      <button disabled={props.isDisabled} onClick={props.handleClick} className="sign-button">{props.name}</button>
    </div>
  );
};

export default SignButton;

import "./SignButton.scss";

const SignButton = (props) => {
  return (
    <div>
      <button className="sign-button">{props.name}</button>
    </div>
  );
};

export default SignButton;

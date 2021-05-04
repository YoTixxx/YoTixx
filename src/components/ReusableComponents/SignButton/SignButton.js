import "./SignButton.scss";

const SignButton = (props) => {
  return (
    <div>
      <button className="sign-button" style={props.style}>
        {props.name}
      </button>
    </div>
  );
};

export default SignButton;

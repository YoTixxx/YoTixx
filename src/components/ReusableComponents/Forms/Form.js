import "./Form.scss";

const Form = (props) => {
  return (
    <form>
      <label>
        <input
          className="form-style"
          style={props.style}
          type={props.type}
          name="name"
          placeholder={props.placeholder}
        />
      </label>
    </form>
  );
};

export default Form;

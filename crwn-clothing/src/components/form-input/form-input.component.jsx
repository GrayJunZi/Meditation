import "./form-input.styles.scss";
const FormInput = ({ label, ...optherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...optherProps} />
      {label && (
        <label
          className={`${
            optherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;

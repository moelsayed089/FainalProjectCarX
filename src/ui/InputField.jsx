import ErrorMeg from "./ErrorMeg";

const InputField = ({
  label,
  value,
  id,
  type,
  className,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div>
      <label className={className} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-control shadow-none mb-2 py-2 inputRes"
        value={value}
        id={id}
        autoComplete="off"
        {...rest}
      />
      {error ? <ErrorMeg msg={error} /> : null}
    </div>

  );
};
export default InputField;
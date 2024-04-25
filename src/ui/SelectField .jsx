import ErrorMeg from "./ErrorMeg";

const SelectField = ({ name,id, value, className, options, error, ...rest }) => {
    return <>
        <select
            id={id}
            name={name}
            value={value}
            className="form-select form-control serv-border shadow-none mb-2"
            {...rest}
        >
            <option value="">Enter Your {name}</option>
            {options.map((option, index) => (
                <option key={index} value={option} className="serv-border">
                    {option}
                </option>
            ))}
        </select>
        {error ? <ErrorMeg msg={error} /> : null}
    </>
}
export default SelectField;
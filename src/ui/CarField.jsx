import ErrorMeg from "./ErrorMeg";

const CarField = ({ name, id, value, label, className, options, error, ...rest }) => {
    return (
        <>
           
            <select
                id={id}
                name={name}
                value={value}
                className="form-select form-control py-2 mb-2 mt-2 shadow-none "
                {...rest}
            >
                <option value="">Enter Your {name}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error ? <ErrorMeg msg={error} /> : null}
        </>
    );
};
export default CarField;
import ErrorMeg from "./ErrorMeg";


const TextareaField = ({
    label,
    value,
    id,
    type,
    className,
    placeholder,
    rows,
    cols,
    error,
    ...rest
}) => {
    return (
        <div>
            <label className={className} htmlFor={id}>
                {label}
            </label>
            <textarea
                type={type}
                placeholder={placeholder}
                className="form-control shadow-none mb-2 inputArea"
                value={value}
                id={id}
                rows={rows}
                cols={cols}
                autoComplete="off"
                {...rest}
                />
                {error ? < ErrorMeg msg = { error } /> : null}
        </div>
        )
}

export default TextareaField;

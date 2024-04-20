

const Button = ({ width, label,type,color, disable, ...rest  }) => {
    return <>
        <button type={type} className={`btn ${color} py-3 px-4 mb-3 mt-2 shadow-none ${width}`} disabled={disable} {...rest}>
            {label}
        </button>
    </>
}

export default Button;

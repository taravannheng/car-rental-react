const Button = ({
  children,
  id,
  className,
  type,
  handleClick,
  // isDisabled = false
}) => {
  return (
    <button
      id={id}
      className={`button ${className}`}
      type={type}
      onClick={handleClick}
      // disabled={isDisabled && 'disabled'}
    >
      {children}
    </button>
  );
}

export default Button;

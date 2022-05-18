function Button({ children, id, className, type, handleClick}) {
  return (
    <button id={id} className={`button ${className}`} type={type} onClick={handleClick}>{children}</button>
  )
}

export default Button
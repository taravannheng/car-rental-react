function Button({ children, type, level, isDisabled, handleClick, isBlockLevel, isSelected }) {
  const getClassName = () => {
    return `button button--${level} ${isDisabled && 'button--disabled'} ${isBlockLevel && 'button--block'} ${isSelected && 'button--selected'}`
  }

  return (
    <button className={getClassName()} type={type} onClick={handleClick}>{children}</button>
  )
}

export default Button
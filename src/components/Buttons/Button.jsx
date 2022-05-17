function Button({ children, id, type, level, isDisabled = false, handleClick, isBlockLevel = false, isSelected = false, isWarning = false }) {
  const getClassName = () => {
    return `button button--${level} ${isDisabled && 'button--disabled'} ${isBlockLevel && 'button--block'} ${isSelected && 'button--selected'} ${isWarning && 'button--warning'}`
  }

  return (
    <button id={id} className={getClassName()} type={type} onClick={handleClick}>{children}</button>
  )
}

export default Button
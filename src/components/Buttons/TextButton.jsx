function TextButton({ children, isDisabled, isRequired }) {
  return (
    <button type="button" className={`button text-button ${isDisabled && 'button--disabled'}`}  required={isRequired && 'required'}>{children}</button>
  )
}

export default TextButton
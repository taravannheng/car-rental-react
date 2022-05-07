function TextButton({ children, isDisabled }) {
  return (
    <button type="button" className={`button text-button ${isDisabled && 'button--disabled'}`}>{children}</button>
  )
}

export default TextButton
function PrimaryButton({ children, isDisabled }) {
  return (
    <button className={`button primary-button ${isDisabled === "True" && 'primary-button--disabled'}`} type="button">{children}</button>
  )
}

export default PrimaryButton
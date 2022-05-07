function PrimaryButton({ children, isDisabled, isRequired }) {
  return (
    <button className={`button primary-button ${isDisabled && 'button--disabled'}`} type="button">{children}</button>
  )
}

export default PrimaryButton
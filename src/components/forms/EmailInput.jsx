import { useState } from 'react'

function EmailInput({ label, placeholder, isRequired }) {
  const [emailInput, setEmailInput] = useState('')

  const handleChange = (e) => {
    setEmailInput(e.target.value)
  }

  return (
    <div className="form__control">
      <label className='form__label'>{label}</label>
      <input type="email" placeholder={placeholder} onChange={handleChange} value={emailInput} className="form__input input__text" required={isRequired && 'required'}/>
    </div>
  )
}

export default EmailInput
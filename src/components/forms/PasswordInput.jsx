import { useState } from 'react'

function PasswordInput({ label, isRequired }) {
  const [passwordInput, setPasswordInput] = useState('')

  const handleChange = (e) => {
    setPasswordInput(e.target.value)
  }

  return (
    <div className="form__control">
      <label className='form__label'>{label}</label>
      <input type="password" onChange={handleChange} value={passwordInput} className="form__input input__password" required={isRequired && 'required'}/>
    </div>
  )
}

export default PasswordInput
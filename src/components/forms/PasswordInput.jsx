import { useState } from 'react'

function PasswordInput({ label, placeholder }) {
  const [passwordInput, setPasswordInput] = useState('')

  const handleChange = (e) => {
    setPasswordInput(e.target.value)
  }

  return (
    <label className='form__label'>
      {label}
      <input type="password" placeholder={placeholder} onChange={handleChange} value={passwordInput} className="form__input input__password"/>
    </label>
  )
}

export default PasswordInput
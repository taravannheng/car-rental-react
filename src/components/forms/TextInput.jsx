import { useState } from 'react'

function TextInput({ label, placeholder, isRequired }) {
  const [textInput, setTextInput] = useState('')

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }

  return (
    <div className="form__control">
      <label className='form__label'>{label}</label>
      <input type="text" placeholder={placeholder} onChange={handleChange} value={textInput} className="form__input input__text" required={isRequired && 'required'}/>
    </div>
  )
}

export default TextInput
import { useState } from 'react'

function TextInput({ label, placeholder }) {
  const [textInput, setTextInput] = useState('')

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }

  return (
    <label className='form__label'>
      {label}
      <input type="text" placeholder={placeholder} onChange={handleChange} value={textInput} className="form__input input__text"/>
    </label>
  )
}

export default TextInput
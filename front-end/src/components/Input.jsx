import React from 'react'

function Input({id, text, value, name, type, placeholder, onChange}) {
  return (
    <label htmlFor={ id }>
      {text}
      <input
        type={ type }
        placeholder={ placeholder }
        value={ value }
        id={ id }
        name={ name }
        onChange={ onChange }
        />
        <br/>
      </label>
  )
}

export default Input
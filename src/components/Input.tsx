import React from 'react'

const Input = ({ register, type, placeholder, error }) => {
    return (
        <input
            {...register}
            type={type}
            placeholder={placeholder}
            minLength={2}
            maxLength={60}
            // required
            aria-invalid={error ? "true" : "false"}
        />
    )
}

export default Input
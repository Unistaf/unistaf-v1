import React from 'react'

const OptionListItem = ({ faculty }) => {
    const { id, name } = faculty
    return (
        <option key={id} value={id}>{name}</option>
    )
}

export default OptionListItem
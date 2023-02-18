import React from 'react'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const FacultyCard = ({ title, description }) => {
    return (
        <div style={{
            minWidth: '300px',
            maxWidth: '370px',
            backgroundColor: 'white',
            boxShadow: '-1px 4px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '1rem',
            flex: '1'
        }}
        >
            <div className="head flex space-between align-items-center">
                <h2>{title}</h2>
                <AccountBalanceRoundedIcon />
            </div>
            <p>{description}</p>
            <p><span style={{ fontWeight: 'bold' }}>Nombre de filiere: </span> 5</p>
        </div>
    )
}

export default FacultyCard
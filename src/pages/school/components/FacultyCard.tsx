import React from 'react'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const FacultyCard = () => {
    return (
        <div style={{
            maxWidth: '370px',
            backgroundColor: 'white',
            boxShadow: '-1px 4px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '1rem'
        }}
        >
            <div className="head flex space-between align-items-center">
                <h2>Nom de la faculté</h2>
                <AccountBalanceRoundedIcon />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, velit!</p>
            <p><span style={{ fontWeight: 'bold' }}>Nombre de filiere: </span> 5</p>
        </div>
    )
}

export default FacultyCard
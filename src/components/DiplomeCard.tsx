import { LocationCityOutlined } from '@mui/icons-material'
import React from 'react'
import bakeli from '../assets/img/bakeli.png'

const DiplomeCard = () => {
    return (
        <div style={{backgroundColor:'white', boxShadow: '0px 0px 5px rgba(10, 14, 16, 0.15)', borderRadius: '15px'}} className='w-100 flex justify-content-between p-2 mt-2'>
            <img style={{ minWidth: '200px', objectFit: 'cover' }} src={bakeli} alt="Bakeli" />
            <div>
                <h3 className='flex justify-content-between align-items-center gap-2'>
                    <span>BTS Marketing Digital et communication</span>
                    <span style={{
                        display: 'inline-block',
                        padding: '0rem 0.5rem',
                        border: '1px solid gray',
                        borderRadius: '50px',
                        fontSize: '0.7rem',
                        fontWeight: '300'
                    }}
                    >Bac</span>
                </h3>
                <p>ANAQ-SUP</p>
                <p className='lieu flex gap-2 align-items-center'>
                    <span className='flex align-items-center' ><LocationCityOutlined /> Thies</span>
                    <span style={{
                        display: 'inline-block',
                        padding: '0rem 0.5rem',
                        border: '1px solid gray',
                        fontSize: '0.7rem',
                        borderRadius: '50px'
                    }}>Presentiel</span>
                </p>
            </div>
            <div className="date">
                <p>Jan 2023</p>
                <p>A votre rythme</p>
            </div>
            <div className="actions">
                <button className='btn'>Modifier</button>
            </div>
        </div>
    )
}

export default DiplomeCard
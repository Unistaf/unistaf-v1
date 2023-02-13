import { LocationCityOutlined } from '@mui/icons-material'
import React from 'react'
import bakeli from '../assets/img/bakeli.png'

const DiplomeCard = () => {
    return (
        <div className='diplome-card w-100 flex gap-2 p-2 mt-2'>
            <div className='diplome-img--container text-700-center'>
                <img className='diplome-card--img' src={bakeli} alt="Bakeli" />
            </div>
            <div>
                <h3 className='flex justify-content-between align-items-center gap-2 m-0'>
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
                <p className='m-0'>ANAQ-SUP</p>
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
            <div className="date m-0">
                <p className='m-0'>Jan 2023</p>
                <p className='m'>A votre rythme</p>
            </div>
            <div className="diplome-actions">
                <button className='btn btn-secondary btn-100'>Modifier</button>
            </div>
        </div>
    )
}

export default DiplomeCard
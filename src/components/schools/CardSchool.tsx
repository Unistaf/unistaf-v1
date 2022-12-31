import React from 'react'
import logo from '../../assets/img/icon-logo.jpg'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import star from '../../assets/img/star.png'

const CardSchool = () => {
  return (
    <div className='card'>
      <div style={{height: '150px'}} className="school_image">
        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={logo} alt="School image" />
      </div>
      <div className="card_body">
        <h2 className='school_name'>School name</h2>
        <div className="habilitation flex justify-content-between">
          <p>Habilitation</p>
          <p>ANAQ-SUP</p>
        </div>
        <div className="notation flex justify-content-between align-items-center">
          <div className='flex notation-items '>
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
          </div>
          <p>3,500 Etudiants</p>
        </div>
      </div>
      <div className="card_footer flex align-items-center justify-content-center">
        <VisibilityRoundedIcon /> <span>Voir l'école</span>
      </div>
    </div>
  )
}

export default CardSchool
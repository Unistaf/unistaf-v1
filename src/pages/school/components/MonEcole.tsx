import React from 'react'

const MonEcole = () => {
  return (
    <section>
      <h2>Mon école</h2>
      <div className="mon-ecole">
        <div className="left">
          <div style={{ 
            background: "linear-gradient(to right, rgba(14, 15, 14, 0.5), rgba(14, 15, 14, 0.4) 50%, rgba(14, 15, 14, 0.2) 100%), url('https://www.socialnetlink.org/wp-content/uploads/2022/09/universite-cheikh-anta-diop-de-dakar.jpeg')",
            height: '50vh',
            backgroundPosition: 'center',
            boxShadow: 'box-shadow: -1px 5px 10px rgba(14, 15, 14, 0.1)',
            padding: '2rem',
            color: 'white'
             }} className='school-presentation'>
              <h1>Bakeli school of technologie</h1>
              <p>L'école des opportunités</p>
          </div>

        </div>
        <div className="right">
          <p><span className='desc-bold'>Bakeli</span></p>
          <p><span className='desc-bold'>Status: </span> Privé</p>
          <p><span className='desc-bold'>Facultés: </span>45</p>
          <p><span className='desc-bold'>Diplômes: </span>75</p>
          <p><span className='desc-bold'>Habilitation: </span>75</p>
          <p><span className='desc-bold'>Organisation: </span>85</p>
        </div>
      </div>
    </section>
  )
}

export default MonEcole
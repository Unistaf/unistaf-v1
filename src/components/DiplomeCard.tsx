import { CalendarMonth, CalendarMonthOutlined, LocationCityOutlined, Timelapse } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setCurrentDiplome } from 'src/redux/slices/diplome.slice'
import { unistafColors } from 'src/utils/colors'
import bakeli from '../assets/img/bakeli.png'
// import { ADMIN_DIPLOME_DETAILS_NAVIGATION } from 'src/navigation_paths'

const DiplomeCard = ({ branche }: { branche: { name: string, id: number } }) => {
    const { id, name } = branche
    // console.log({ branche });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const seeDetails = () => {
        dispatch(setCurrentDiplome(branche))
        navigate(`${id}/details`)
    }

    return (
        <div className='diplome-card w-100 flex gap-2 p-2 mt-2'>
            <div className='diplome-img--container text-700-center'>
                <img className='diplome-card--img' src={bakeli} alt="Bakeli" />
            </div>
            <div>
                <h3 className='flex justify-content-between align-items-center gap-2 m-0'>
                    <span>{name}</span>
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
                {/* <p className='m-0'>ANAQ-SUP</p> */}
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
                <p className='m-0 flex align-items-center gap-0'><CalendarMonth style={{ color: unistafColors[1] }} />Jan 2023</p>
                <p className='flex align-items-center gap-0'> <Timelapse style={{ color: unistafColors[1] }} /> A votre rythme</p>
            </div>
            <div className="diplome-actions">
                <button onClick={seeDetails} className='p-1 btn-edit btn-100'>Details</button>
            </div>
        </div>
    )
}

export default DiplomeCard
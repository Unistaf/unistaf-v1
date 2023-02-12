import React from 'react'
import { Link } from 'react-router-dom'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION } from 'src/navigation_paths';

const CreateSchoolCardLink = ({setOpenDrawer}: {setOpenDrawer: () => void}) => {
  return (
    <div onClick={setOpenDrawer} className='add-school'>
        <AddRoundedIcon/>
      <p>Ajouter une nouvelle ecole</p>
    </div>
  )
}

export default CreateSchoolCardLink
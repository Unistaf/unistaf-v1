import React from 'react'
import { Link } from 'react-router-dom'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION } from 'src/navigation_paths';

const CreateSchoolCardLink = () => {
  return (
    <div className='add-school'>
      <Link to={SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION}>
        <AddRoundedIcon />
      </Link>
      <p>Ajouter une nouvelle ecole</p>
    </div>
  )
}

export default CreateSchoolCardLink
import React from 'react'
import UnistafButton from 'src/components/reusable/UnistafButton'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddFacultyForm from 'src/components/AddFacultyForm';

const AddFaculty = () => {
  return (
    <section>
      <div className='flex align-items-center space-between'>
        <h2 className='h2--title'>Liste des facultés</h2>
        <UnistafButton
          className='google-btn btn--font-size'
          bgColor="#000"
          color="#fff"
          disabled={false}
          handleSubmit={null}
          loading={false}
          icon={<AddCircleOutlineRoundedIcon />}
        >
          Ajouter
        </UnistafButton>
      </div>
      <AddFacultyForm />
    </section>
  )
}

export default AddFaculty
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import InputReuse from './reusable/InputReuse'
import { Mail, Save } from '@mui/icons-material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import UnistafButton from './reusable/UnistafButton';
import { unistafColors } from 'src/utils/colors';
import AddBranche from './AddBranche';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { stringRegexFunc } from '../helpers/stringRegex';

interface State {
  name: string;
  description: string;
  school_id: number | string;
}

const AddFacultyForm = () => {
  const [name, setName] = useState('')
  const [domaine, setDomaine] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState({
    name: '',
    domaine: '',
    description: '',
    school_id: ''
  })

  const handleSubmit = () => {
    console.log('submit');
    if (!name) {
      setError(error => ({
        ...error,
        description: '',
        name: 'Veuillez renseigner le nom'
      }))
      return
    }
    if (!description) {
      setError(error => ({
        ...error,
        name: '',
        description: 'Veuillez renseigner la description'
      }))
      return
    }

  }

  return (
    <div className='p-2'>
      <h2>Ajouter une faculté</h2>
      <form action="">
        <div className='flex flex-column mt-1'>
          <input
            value={name}
            onChange={(e) => {
              if (stringRegexFunc(e.target.value) || e.target.value === '') {
                setError(error => ({
                  ...error,
                  name: '',
                  description: ''
                }))
                setName(e.target.value)
              }
            }}
            type="text" placeholder='Nom de la faculté'
          />
          {
            error.name && <p className='error-text'>{error.name}</p>
          }
        </div>
        <div className="more-branches mt-2">
          <select onChange={(e) => {
            setDomaine(e.target.value)
          }}
            name=""
            id="">
            <option value="">Domaine d'étude</option>
          </select>
        </div>
        <div className="more-branches mt-2">
          <textarea
            value={description}
            onChange={(e) => {
              if (stringRegexFunc(e.target.value) || e.target.value === '') {
                setDescription(e.target.value)
              }
            }}
            placeholder='desciption'
            name="description" id=""
            cols={30}
            rows={10}>
          </textarea>
        </div>
        <UnistafButton
          className='google-btn btn--font-size'
          bgColor={unistafColors[1]}
          color={unistafColors[0]}
          disabled={false}
          handleSubmit={null}
          loading={false}
          icon={<Save />}
        >
          Ajouter
        </UnistafButton>
      </form>
    </div>
  )
}

export default AddFacultyForm
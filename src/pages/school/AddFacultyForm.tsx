import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import InputReuse from '../../components/reusable/InputReuse'
import { Save } from '@mui/icons-material';
import UnistafButton from '../../components/reusable/UnistafButton';
import { unistafColors } from 'src/utils/colors';
import { stringRegexFunc } from '../../helpers/stringRegex';
import { useAddFacultiesMutation } from 'src/redux/services/extendedFacultyApi';
import { useCurrentUserId } from 'src/hooks/useCurrentUserId';
import { useToken } from '../../hooks/useToken';
import axios from 'axios';
import { API } from 'src/routes/api';
import { useGetDomainesQuery } from 'src/redux/services/extendedDomainsApi';

interface State {
  name: string;
  description: string;
  school_id: number | string;
}

const AddFacultyForm = ({ setIsOpenDrawer }) => {
  const { token } = useToken()
  const { data: domaines } = useGetDomainesQuery({ token })
  const { userId } = useCurrentUserId()
  const [addFaculty] = useAddFacultiesMutation()
  const [name, setName] = useState('')
  const [domaine_id, setDomaineId] = useState<number>()
  const [description, setDescription] = useState('')
  const [error, setError] = useState({
    name: '',
    domaine: '',
    description: '',
    school_id: ''
  })

  const handleSubmit = () => {
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

    const data = { name, description, school_id: userId, domain_id: domaine_id }
    // console.log({data});


    // axios.post(API + '/faculties', data, {
    //   headers: {
    //     "Authorization": `bearer ${token}`
    //   },
    // })
    //   .then(res => {
    //     console.log({ res });

    //   })
    //   .catch(err => {
    //     console.log({ err });

    //   })
    addFaculty({ data, token })
      // .unwrap()
      .then(res => {
        // console.log({ res });
        setIsOpenDrawer(false)
      })
      .catch(error => {
        console.log({ error });

      })

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
          <select
            onChange={(e) => {
              setDomaineId(Number(e.target.value))
            }}
            required
            name=""
            id="">
            <option value="">Selectionner le domaine</option>
            {
              domaines?.data.length ?
                domaines?.data.map((domaine: { id: number, name: string }) => {
                  return <option key={domaine.id} value={domaine.id}>{domaine.name}</option>
                }) : <p>Pas encore de domaine</p>
            }
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
          handleSubmit={handleSubmit}
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
import React, { useState } from 'react'
import { unistafColors } from './utils/colors'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import InputReuse from './components/reusable/InputReuse';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CREATE_SCHOOL_API_PATH } from './routes/app_paths';
import { useSelector } from 'react-redux';
import { ICurrenUser, iFile, initialFile } from './utils/interfaces';
import { iStore } from './redux/store';
// import successMessage from './utils/successMessage';
// import SuccessMessage from './utils/successMessage';
import { errorMessage } from './utils/errorMessage';

const AddSchool = () => {
  const currentUser: ICurrenUser | any = useSelector((state: iStore) => state.user.currentUser);
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: '',
      // logo: [],
      banner: []
    }
  });
  const [logo, setLogo] = useState<iFile | File | any>(initialFile)
  const [banner, setBanner] = useState<File | iFile | any>(initialFile)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setErrors] = useState({
    logo: '',
    banner: ''
  })

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const submit = async (data: { name: string, email: string, description: string, banner: (string | Blob)[] }) => {
    // console.log(banner);
    // return
    if (!logo.name) {
      return setErrors((error) => ({
        ...error,
        logo: "Veuillez selectionner un logo"
      }))
    }
    if (!banner.name) {
      return setErrors((error) => ({
        ...error,
        banner: "Veuillez selectionner une bannière"
      }))
    }

    setLoading(true)
    let formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('description', data.description)
    formData.append('logo', logo)
    formData.append('banner', banner)
    formData.append('address', "")
    formData.append('empowerment', "1")

    // "slug": "mons-scho",
    // "name": "Mons scho",
    // "logo": "images/MXifOCamDGV11doWoIlpqPQ6Hi9AGo8f07iWNeyU.jpg",
    // "description": "lorem ipsum",
    // "banner": "images/62Z23i8fJfJd9BeUwBWbRlm3brSf86hLnNk60O9b.jpg",
    // "address": "Dakar",
    // "longitude": "2",
    // "latitude": "1",
    // "advantages": "lorem",
    // "cgu": "lorem",
    // "empowerment": "1",

    try {
      await axios.post(CREATE_SCHOOL_API_PATH, formData, {
        headers: {
          "accept": "application/json",
          // "content-type": "application/json",
          "Authorization": `bearer ${currentUser.access_token}`
        }
      })

      window.location.reload()
      setOpen(true)
      setMessage("Création d'école réussie")

    } catch (error) {
      console.log(error);
      setLoading(false)
      if (error?.response?.data?.message === 'Unauthenticated.') {
        setOpen(true)
        // TODO: utiliser les alertes de mui
        setMessage("Votre session a expiré. Veuillez vous reconnectez!")
      }
      if (error?.response?.data?.errors?.name) {
        setOpen(true)
        errorMessage("Il y a déjà une école avec ce nom")
        // setMessage("Il y a déjà une école avec ce nom")
        return
      }
      if (error?.response?.data?.errors?.logo) {
        // setError("logo", { type: 'custom', message: "" })
        setOpen(true)
        errorMessage("Erreur de chargement du logo")
        // setMessage("Erreur de chargement du logo")
        return
      }
      if (error?.response?.data?.errors?.banner) {
        // setError("logo", { type: 'custom', message: "" })
        setOpen(true)
        errorMessage("Erreur de chargement de la bannière")
        // setMessage("Erreur de chargement de la bannière")
        return
      }
    }
    setLoading(false)
    console.log(data);
  }

  return (
    <div style={{ padding: '1.5rem', backgroundColor: `${unistafColors[2]}`, color: 'white', height: '' }}>
      <h2 className='text-uppercase text-center'>Ajouter une école</h2>
      <form style={{ height: '100%' }} onSubmit={handleSubmit(submit)}>
        <label htmlFor='logo'>
          <div style={{ maxWidth: '150px', cursor: 'pointer' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
            {
              !logo.name ? <>
                <AddRoundedIcon />
                <span>Ajouter un logo</span><span>(500x500px)</span>
              </> : <p>{logo.name}</p>
            }
          </div>
          <input
            name='logo'
            onChange={(e) => {
              setErrors({
                logo: '',
                banner: ''
              })
              setLogo(e.target.files[0])
            }}
            // {...register('logo')}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //   setLogo(e.target.files[0])
            // }}
            id="logo"
            type="file"
            hidden
            accept='image/*'
          />
          {
            error.logo && <p style={{ fontSize: '0.8rem', color: 'red', textAlign: 'center' }}>{error.logo}</p>
          }
          {/* {
            errors.logo && <p>{errors.logo.message}</p>
          } */}
        </label>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <InputLabel htmlFor="outlined-adornment-name">Nom de l'école</InputLabel>
          <input
            className='admin-input'
            {...register('name')}
            type="text"
            placeholder='Nom école'
          />
        </div>
        <div style={{ width: '100%', margin: '0', padding: 0 }}>
          <input
            className='admin-input'
            {...register('email')}
            type="text"
            placeholder='Email'
          />
        </div>

        <textarea
          {...register('description')}
          required
          placeholder="A propos de  l'école"
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: "#55535E",
            marginTop: '1rem',
            color: 'white',
            padding: '0.5rem'
          }}
        >

        </textarea>
        <label htmlFor="banner">
          <div style={{ width: '100%', marginTop: '1rem', cursor: 'pointer' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
            {
              !banner?.name ? <>
                <AddRoundedIcon />
                <span>Ajouter une bannière</span>
                <span>(500x500px)</span>
              </> : <p>{banner?.name}</p>
            }
          </div>
          <input
            name='banner'
            onChange={(e) => {
              setErrors({
                logo: '',
                banner: ''
              })
              setBanner(e.target.files[0])
            }}
            // {...register('banner')}
            // onChange={(e) => {
            //   setBanner(e.target.files[0])
            // }}
            id="banner"
            type="file"
            hidden accept='image/*'
          />
          {
            error.banner && <p style={{ fontSize: '0.8rem', color: 'red', textAlign: 'center' }}>{error.banner}</p>
          }
        </label>
        <button
          disabled={loading}
          className='text-uppercase'
          style={{
            backgroundColor: '#359323',
            color: 'white',
            padding: '1rem 2rem',
            border: 'none',
            marginTop: '1rem',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
          type='submit'
        >
          {!loading ? "Ajouter" : "AJOUT EN COURS..."}
        </button>
      </form>
      {/* {
        open && <SuccessMessage open={open} message={message} handleClose={handleClose} />
      } */}
    </div>
  )
}

export default AddSchool
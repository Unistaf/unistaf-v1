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
import { ICurrenUser } from './utils/interfaces';
import { iStore } from './redux/store';
import successMessage from './utils/successMessage';
import SuccessMessage from './utils/successMessage';


const AddSchool = () => {
  const currentUser: ICurrenUser | any = useSelector((state: iStore) => state.user.currentUser);
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors }, setError, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: '',
      logo: [],
      banner: []
    }
  });
  const [open, setOpen] = useState(false)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const submit = async (data: { name: string, email: string, description: string, logo: (string | Blob)[], banner: (string | Blob)[] }) => {
    setLoading(true)
    let formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('description', data.description)
    formData.append('logo', data.logo[0])
    formData.append('banner', data.banner[0])

    try {
      const result = await axios.post(CREATE_SCHOOL_API_PATH, formData, {
        headers: {
          "Authorization": `bearer ${currentUser.access_token}`
        }
      })

      setOpen(true)

    } catch (error) {
      console.log(error);
    }
    setLoading(false)
    console.log(data);
  }

  return (
    <div style={{ width: '500px', padding: '1.5rem', backgroundColor: `${unistafColors[2]}`, color: 'white', height: '' }}>
      <h2 className='text-uppercase text-center'>Ajouter une école</h2>
      <form style={{ height: '100%' }} onSubmit={handleSubmit(submit)}>
        <label htmlFor='logo'>
          <div style={{ maxWidth: '150px', cursor: 'pointer' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
            <AddRoundedIcon />
            <span>Ajouter un logo</span>
            <span>(500x500px)</span>
          </div>
          <input {...register('logo')} id="logo" type="file" hidden accept='image/*' />
        </label>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <InputLabel htmlFor="outlined-adornment-name">Nom de l'école</InputLabel>
          <OutlinedInput
            {...register('name')}
            sx={{
              backgroundColor: '#55535E',
              color: 'white'
            }}
            className="add-school-placehlder"
            disabled={false}
            fullWidth={true}
            error={null}
            required
            id="outlined-adornment-name"
            // value={null}
            type="text"
            // onChange={null}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  arial-label="name"
                  onClick={null}
                  edge="end"
                >
                  {null}
                </IconButton>
              </InputAdornment>
            }
            label="Nom de l'ecole"
          />
        </div>
        <div style={{ width: '100%', margin: '0', padding: 0 }}>
          <InputLabel htmlFor="outlined-adornment-name">Nom de l'ecole</InputLabel>
          <OutlinedInput
            {...register('email')}
            sx={{
              backgroundColor: '#55535E',
              color: 'white'
            }}
            className="add-school-placehlder"
            disabled={false}
            fullWidth={true}
            error={null}
            required
            id="outlined-adornment-name"
            // value={null}
            type="text"
            // onChange={null}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  arial-label="name"
                  onClick={null}
                  edge="end"
                >
                  {null}
                </IconButton>
              </InputAdornment>
            }
            label="Nom de l'ecole"
          />
        </div>

        <TextareaAutosize
          {...register('description')}
          className="add-school-placehlder p-2"
          aria-label="empty textarea"
          placeholder="A propos de  l'école"
          style={{ width: '100%', height: '200px', backgroundColor: "#55535E", marginTop: '1rem', color: 'white' }}
        />
        <label htmlFor="banner">
          <div style={{ width: '100%', marginTop: '1rem', cursor: 'pointer' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
            <AddRoundedIcon />
            <span>Ajouter une bannière</span>
            <span>(500x500px)</span>
          </div>
          <input {...register('banner')} id="banner" type="file" hidden accept='image/*' />
        </label>
        <button disabled={loading} className='text-uppercase' style={{ backgroundColor: '#359323', color: 'white', padding: '1rem 2rem', border: 'none', marginTop: '1rem', borderRadius: '10px' }} type='submit'>{!loading ? "Ajouter" : "AJOUT EN COURS..."}</button>
      </form>
      {
        open && <SuccessMessage open={open} message="Creation d'ecole reussie" handleClose={handleClose} />
      }
    </div>
  )
}

export default AddSchool
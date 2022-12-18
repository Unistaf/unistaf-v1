import React, { useEffect, useState } from 'react'
import InputReuse from './reusable/InputReuse'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { useForm } from 'react-hook-form';
import { Button, Checkbox } from '@mui/material';
import { Save } from '@mui/icons-material';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

interface State {
  saved: boolean,
  name: string;
  image: string;
}

const AddBranche = ({ setBranches, branches, saved: itemSaved, id, image, name }) => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    defaultValues: {
      id: (Math.random() * 100) + 100,
      saved: false,
      name: '',
      image: ''
    }
  });
  const [saved, setsaved] = React.useState(true);

  // useEffect(() => {
  //   if (saved) {
  //     console.log(saved);

  //   }
  // })

  const [branche, setBranche] = useState({
    id: (Math.random() * 100) + 100,
    name: '',
    image: '',
    saved: false,
  });

  const handleChange =
    (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setBranche({ ...branche, saved: e.target.checked })
        return
      }
      setBranche({ ...branche, [prop]: e.target.value });
    };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsaved(event.target.checked);
  };

  const addBranch = () => {
    setBranche({ ...branche, saved: true })

    setBranches((prev: object[]) => [...prev, { ...branche, saved: true }])
  }

  const editBranch = (id: number) => {
    const brancheCopy = [...branches]
    let selectedBranch = branches.find((branch: {id: number}) => branch.id === id)
    console.log('selected: ', selectedBranch);
    
    let indexOfranch = branches.indexOf(selectedBranch)
    console.log(selectedBranch, indexOfranch);
    
    selectedBranch = {...selectedBranch, saved: false}

    brancheCopy[indexOfranch] = selectedBranch

    setBranches(brancheCopy)
  }

  return (
    <>
      <section className='select-branche gap-2'>
        <InputReuse
          disabled={itemSaved}
          error={errors.image?.message ? true : false}
          htmlFor="outlined-adornment-description"
          inputLabel="Image"
          id="outlined-adornment-description"
          value={branche.image}
          type="file"
          handleChangeValues={handleChange('image')}
          position="end"
          ariaLabel="image"
          icon={<DescriptionRoundedIcon />}
          label="Image"
          onClick={null}

        />
        <InputReuse
          disabled={itemSaved}
          error={errors.name?.message ? true : false}
          htmlFor="outlined-adornment-description"
          inputLabel="Nom de la branche"
          id="outlined-adornment-description"
          value={branche.name}
          type="text"
          handleChangeValues={handleChange('name')}
          position="end"
          ariaLabel="branche"
          icon={<DescriptionRoundedIcon />}
          label="branche"
          onClick={null}
        />
      </section>
      {/* TODO: utiliser aussi le saved du item */}
      {
        !branche.saved ? <Save onClick={addBranch} /> : <ModeEditOutlineRoundedIcon onClick={() => editBranch(id)} />
      }
      {/* <Checkbox
        saved={saved}
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'controlled' }}
      /> */}
      {/* <Button >Enregistrer</Button> */}
    </>
  )
}

export default AddBranche
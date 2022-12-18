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

interface State {
  name: string;
  description: string;
  school_id: number | string;
}

const AddFacultyForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    defaultValues: {
      name: '',
      description: '',
      school_id: null
    }
  });

  const [values, setValues] = useState({
    name: '',
    description: '',
    school_id: null,
  });

  const [currentBranch, setCurrentBranch] = useState({
    id: '',
    name: '',
    image: '',
    saved: false,
  })

  const [branches, setBranches] = useState([{
    id: '',
    name: '',
    image: '',
    saved: false,
  }])
  const [brachesItems, setBrachesItems] = useState([])

  useEffect(() => {
    branches.reverse()
    // console.log('branches: ', );
  }, [branches.length])

  const handleChange =
    (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: e.target.value });
    };

  return (
    <div>
      <form action="">
        <div className='flex flex-column gap-2'>
          <InputReuse
            error={errors.name?.message ? true : false}
            htmlFor="outlined-adornment-name"
            inputLabel="Nom de la faculté"
            id="outlined-adornment-name"
            value={values.name}
            type="text"
            handleChangeValues={handleChange('name')}
            position="end"
            ariaLabel="name"
            icon={<SchoolRoundedIcon />}
            label="Nom de la faculté"
            onClick={null}

          />
          <InputReuse
            error={errors.description?.message ? true : false}
            htmlFor="outlined-adornment-description"
            inputLabel="Description"
            id="outlined-adornment-description"
            value={values.description}
            type="text"
            handleChangeValues={handleChange('description')}
            position="end"
            ariaLabel="description"
            icon={<DescriptionRoundedIcon />}
            label="Description"
            onClick={null}

          />
        </div>
        <div className="add-branches">
          {/* ******** ajout branches ********* */}
          {
            branches.reverse().map((item, i) => (<AddBranche {...item} key={i} setBranches={setBranches} branches={branches}  />))
          }
        </div>
        <div className="more-branches">
          <UnistafButton
            className='google-btn btn--font-size'
            bgColor="#000"
            color="#fff"
            disabled={false}
            handleSubmit={null}
            loading={false}
            icon={null}
          >
            <AddCircleOutlineRoundedIcon />
          </UnistafButton>
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
          Soumettre
        </UnistafButton>
      </form>
    </div>
  )
}

export default AddFacultyForm
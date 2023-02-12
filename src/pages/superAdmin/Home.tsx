import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddSchool from 'src/AddSchool'
import CreateSchoolCardLink from 'src/components/CreateSchoolCardLink'
import AppDrawer from 'src/components/AppDrawer'
import CardSchool from 'src/components/schools/CardSchool'
import { getSchoolsThunk } from 'src/redux/services/schoolsThunk'
import { AppDispatch, iStore } from 'src/redux/store'
import { ICurrenUser } from 'src/utils/interfaces'

const Home = () => {
  const listSchools = useSelector((state: iStore) => state.schools.listSchools
  )
  const currentUser: ICurrenUser | any = useSelector((state: iStore) => state?.user?.currentUser);
  const token = currentUser.access_token

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState)
  }
  // TODO: recuperer la liste des ecoles
  useEffect(() => {
    dispatch(getSchoolsThunk(token))
  }, [])
  return (
    <section>
      <h1>Liste des écoles</h1>
      {
        <AppDrawer isOpen={isOpenDrawer} toggleDrawer={setIsOpenDrawer} direction="right" >
          <AddSchool />
        </AppDrawer>
      }
      <div className='gap-2 super-admin-grid'>
        <CreateSchoolCardLink setOpenDrawer={() => setIsOpenDrawer(true)} />
        {
          listSchools.map((school: { name: string, logo: string }, i) => (
            <CardSchool name={school.name} schoolLogo={school.logo} key={i} />
          ))
        }
      </div>
    </section>
  )
}

export default Home
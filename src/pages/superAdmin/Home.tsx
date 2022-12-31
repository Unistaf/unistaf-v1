import React, { useState } from 'react'
import AddSchool from 'src/AddSchool'
import CreateSchoolCardLink from 'src/components/CreateSchoolCardLink'
import SwipeableTemporaryDrawer from 'src/components/Drawer'
import CardSchool from 'src/components/schools/CardSchool'

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  // TODO: recuperer la liste des ecoles
  return (
    <section>
      <h1>Liste des écoles</h1>
      <div className='gap-2 super-admin-grid'>
        <CreateSchoolCardLink setOpenDrawer={() => setOpenDrawer((prev: boolean) => (!prev))} />
        {
          [1, 2, 3, 4, 5, 6, 7].map((i) => (
            <CardSchool key={i} />
          ))
        }
      </div>

      <SwipeableTemporaryDrawer anchor="right" content={<AddSchool />} />
    </section>
  )
}

export default Home
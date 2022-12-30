import React, { useState } from 'react'
import AddSchool from 'src/AddSchool'
import CreateSchoolCardLink from 'src/components/CreateSchoolCardLink'
import SwipeableTemporaryDrawer from 'src/components/Drawer'

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <section>
      <h1>Liste des écoles</h1>
      <CreateSchoolCardLink setOpenDrawer={() => setOpenDrawer((prev:boolean) => (!prev))} />
      <SwipeableTemporaryDrawer anchor="right" content={<AddSchool />}/>
    </section>
  )
}

export default Home
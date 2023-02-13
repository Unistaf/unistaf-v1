import React, { useState } from 'react'
import DiplomeCard from 'src/components/DiplomeCard'
import UnistafButton from 'src/components/reusable/UnistafButton'
import { unistafColors } from 'src/utils/colors'

const DiplomePage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  return (
    <div>
      <div className="flex justify-content-between">
        <h2>Mes Diplomes</h2>
        <UnistafButton
          bgColor={unistafColors[1]}
          disabled={false} loading={false}
          handleSubmit={() => setIsOpenDrawer(true)}
          icon={null}
          color="#FFFFFF" className="" ><span>Ajouter</span>
        </UnistafButton>
      </div>
      <div className="flex">
        <DiplomeCard />
      </div>
    </div>
  )
}

export default DiplomePage
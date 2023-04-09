import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DiplomeCard from 'src/components/DiplomeCard'
import ResourceDataMap from 'src/components/ResourceDataMap'
import UnistafButton from 'src/components/reusable/UnistafButton'
import { useToken } from 'src/hooks/useToken'
import { ADMIN_ADD_DIPLOMES_URL } from 'src/navigation_paths'
import { useGetBranchesQuery } from 'src/redux/services/extendedBrancheApi'
import { unistafColors } from 'src/utils/colors'

const DiplomePage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const { token } = useToken()
  const { data: branches } = useGetBranchesQuery({ token })
  // console.log({ branches });


  // branches?.data.forEach(branche => {
  //   console.log(branche);

  // })

  return (
    <div>
      <div className="flex justify-content-between align-items-center">
        <h2>Mes Diplomes</h2>
        <Link className='p-1 btn-edit' to={ADMIN_ADD_DIPLOMES_URL}>
          Ajouter
        </Link>
        {/* <UnistafButton
          bgColor={unistafColors[1]}
          disabled={false} loading={false}
          handleSubmit={() => setIsOpenDrawer(true)}
          icon={null}
          color="#FFFFFF" className="" ><span>Ajouter</span>
        </UnistafButton> */}
      </div>
      <div className="fle">
        <ResourceDataMap
          resourceData={branches?.data}
          resourceItem={DiplomeCard}
          resourceName="branche"
        />
      </div>
    </div>
  )
}

export default DiplomePage
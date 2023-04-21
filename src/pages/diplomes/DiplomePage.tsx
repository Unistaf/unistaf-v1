import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DiplomeCard from 'src/components/DiplomeCard'
import ResourceDataMap from 'src/components/ResourceDataMap'
import UnistafButton from 'src/components/reusable/UnistafButton'
import { useCurrentUserId } from 'src/hooks/useCurrentUserId'
import { useToken } from 'src/hooks/useToken'
import { ADMIN_ADD_DIPLOMES_URL } from 'src/navigation_paths'
import { useGetBranchesQuery } from 'src/redux/services/extendedBrancheApi'
import { adminRoutes } from 'src/router'
import { unistafColors } from 'src/utils/colors'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useSchool } from '../../hooks/useShool';

const DiplomePage = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const { token } = useToken()
  const { school } = useSchool()
  const { data: branches } = useGetBranchesQuery({ school: school.id, token })


  // const breadcrumbs = useBreadcrumbs(adminRoutes);
  // console.log({ breadcrumbs });


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
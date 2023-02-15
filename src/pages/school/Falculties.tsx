import React, { useState } from 'react'
import UnistafButton from 'src/components/reusable/UnistafButton'
import FacultyCard from './components/FacultyCard'
import { unistafColors } from '../../utils/colors';
import AppDrawer from 'src/components/AppDrawer';
import AddFacultyForm from './AddFacultyForm';
import { useToken } from '../../hooks/useToken'
import { useGetFacultiesQuery } from 'src/redux/services/extendedFacultyApi';
import { useCurrentUserId } from 'src/hooks/useCurrentUserId';

const Falculties = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const userId: { userId: number } = useCurrentUserId()
    const schoolId = userId.userId
    const { token } = useToken()
    const { data = [], isError, isLoading, isFetching, error } = useGetFacultiesQuery({ token: token, schoolId:1 })

    console.log({data});
    

    return (
        <section>
            <div className="flex justify-content-between">
                <h2>Mes facultés</h2>
                <UnistafButton
                    bgColor={unistafColors[1]}
                    disabled={false} loading={false}
                    handleSubmit={() => setIsOpenDrawer(true)}
                    icon={null}
                    color="#FFFFFF" className="" ><span>Ajouter</span>
                </UnistafButton>
            </div>
            <div className='flex wrap gap-2' style={{ marginTop: '1rem' }}>
                {
                    data?.data?.map((faculty: { name: string, description: string }, index: number) => {
                        return <FacultyCard title={faculty.name} description={faculty.description} key={index} />
                    })
                }
            </div>
            <AppDrawer isOpen={isOpenDrawer} toggleDrawer={setIsOpenDrawer} direction="right">
                <AddFacultyForm setIsOpenDrawer={setIsOpenDrawer} />
            </AppDrawer>
        </section>
    )
}

export default Falculties
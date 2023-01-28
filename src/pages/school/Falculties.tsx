import React, { useState } from 'react'
import UnistafButton from 'src/components/reusable/UnistafButton'
import FacultyCard from './components/FacultyCard'
import { unistafColors } from '../../utils/colors';
import AppDrawer from 'src/components/AppDrawer';
import AddFacultyForm from '../../components/AddFacultyForm';
import { useAddFacultiesMutation, useGetFacultiesQuery } from 'src/redux/services/unistafapi';
import { useToken } from '../../hooks/useToken'

const Falculties = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const { token } = useToken()
    const { data, isError, isLoading, isFetching, error } = useGetFacultiesQuery(token.token)
    console.log(data, isError, isLoading, isFetching, error, 'yes', {token});

    return (
        <section>
            <div className="flex justify-content-between">
                <h2>Mes facultés</h2>
                <UnistafButton
                    bgColor={unistafColors[1]}
                    disabled={false} loading={false}
                    handleSubmit={() => setIsOpenDrawer(true)}
                    icon={null}
                    color="#FFFFFF" className="" ><span>Ajouter</span></UnistafButton>
            </div>
            <div style={{ marginTop: '1rem' }}>
                <FacultyCard />
            </div>
            <AppDrawer isOpen={isOpenDrawer} toggleDrawer={setIsOpenDrawer} direction="right">
                <AddFacultyForm />
            </AppDrawer>
        </section>
    )
}

export default Falculties
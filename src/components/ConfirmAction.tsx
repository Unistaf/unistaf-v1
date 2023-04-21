import { Box, Modal } from '@mui/material'
import React from 'react'

const ConfirmAction = ({ open, handleClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className='p-3' style={{ backgroundColor: '#fff', maxWidth: '400px', margin: '10rem auto', borderRadius: '5px' }}>
                <p className='text-center'>Cette action peut être irréversible, voulez-vous continuer?</p>
                {children}
            </div>
        </Modal>
    )
}

export default ConfirmAction
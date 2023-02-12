import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'

const AppDrawer = ({ isOpen, toggleDrawer, direction, children }) => {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction={direction}
                // size="400px"
                zIndex={999}
                enableOverlay={false}
                overlayColor="rgba(0,0,0,0.8)"
                overlayOpacity={0.8}
                lockBackgroundScroll={true}
                className='custom-drawer'
            >
                <div style={{marginTop: '3.5rem'}}>
                    {children}
                </div>
            </Drawer>
        </>
    )
}

export default AppDrawer
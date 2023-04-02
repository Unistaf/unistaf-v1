import logo from '../assets/img/logo.png'

const EmptyList = ({ text }) => {
    return (
        <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
            <img
                style={{ width: '100px', margin: 'auto' }}
                src={logo}
                alt="Unistaf"
            />
            <p style={{ fontWeight: '700' }} className='m-0'>Pas encore de {text}</p>
        </div>
    )
}

export default EmptyList
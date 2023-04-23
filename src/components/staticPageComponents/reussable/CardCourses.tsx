import React from 'react';
import UnistafRoundedButton from 'src/components/reusable/UnistafRoundedButton';
import { colors } from 'src/utils/colors';

function CardCourses() {
  return (
    <div
      style={{
        width: '100%',
        padding: '50% 0',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
          position: 'absolute',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          top: 0,
          left: 0
        }}
      ></div>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '40%',
          position: 'absolute',
          bottom: 0,
          color: '#fff',
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          padding: '8px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start'
          }}
        >
          <h5>ARTS, LETTRES ET DU LANGAGE</h5>
          <h3>Baccalauréat avec majeure en mathématique</h3>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start'
          }}
        >
          <UnistafRoundedButton isOutlined={true} size="small" borderColor="#fff" largueur='90%' textColor={colors.secondary}>
            POSTULER
          </UnistafRoundedButton>
          <UnistafRoundedButton isOutlined={true} size="small" borderColor="#fff" largueur='90%' textColor={colors.secondary}>
            VOIR
          </UnistafRoundedButton>
        </div>
      </div>
    </div>
  );
}

export default CardCourses;

import React from 'react'
import ProfileIcon from '../../atoms/Profile'
import './index.css'

export default ({ showName }) => (
  <div className="UserAvatar" style={{ display: 'inline-block' }}>
    <div style={{ float: 'left' }}>
      <ProfileIcon />
    </div>
    { showName && <p className="UserName">Nome do Candidato</p> }
  </div>
)

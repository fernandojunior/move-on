import React from 'react'
import Icon from '../../atoms/Icon'
import './index.css'

export default ({ showName }) => (
  <div className="UserAvatar" style={{ display: 'inline-block' }}>
    <div style={{ float: 'left' }}>
      <Icon icon="avatar" circle width={32} />
    </div>
    { showName && <p className="UserName">Nome do Candidato</p> }
  </div>
)

import React from 'react'
import {Image} from 'react-bootstrap'
import profilePicture from '../img/profile.png'

const Profile = () => {
    return (
        <div>
        <Image  src={profilePicture} circle responsive style={{width: 32, height:32, float: "right", marginRight: 20, marginTop: 28}}></Image>

        </div>
    )
}

export default Profile
import React, { useState, useEffect } from 'react'
import '../styles/Nav.css'

export default function Nav() {
    return (
        <nav className={'nav'}>
            <img 
                className='nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
                alt="netflix-logo"
            />

            <img
                className='nav-avatar'
                src={process.env.PUBLIC_URL + '/Netflix-avatar.png'}
                alt="netflix-avatar"
            />
        </nav>
)
}

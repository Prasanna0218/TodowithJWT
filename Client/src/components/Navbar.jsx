import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FaFaceSmileWink , FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div className='maindiv'>
            <div>
                <p className='logo'>To Do<span><FaFaceSmileWink /></span></p>
            </div>
            <div className='uldiv'>
                <ul className='ullists'>
                    <li>
                        <Link to={'/signup'}>Register</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <a href="">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
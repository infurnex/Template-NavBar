import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [permanentul1, setpermanentul1] = useState('')
  const [permanentul2, setpermanentul2] = useState('')
  const [permanentul3, setpermanentul3] = useState('')
  const [permanentul4, setpermanentul4] = useState('')

  const setPermanentClass = (setter , className)=>{
    setpermanentul1('')
    setpermanentul2('')
    setpermanentul3('')
    setpermanentul4('')
    setter(className)
  }

  const setClass = (classname , setter , classs)=>{
    if(classname != ''){
    }
    else{
     setter(classs)
    }
  }


  return (
    <div className='nav-bar'>
      <div className='company-title'>
        <img className='company-logo'>
        </img>
        <div className='company-name'>
          Land Registry
        </div>
      </div>
      <div className='navigators'>

        <div onPointerEnter={()=>{setClass( permanentul1 ,setpermanentul1 , 'underline')}} onClick={()=>{setPermanentClass(setpermanentul1 , 'permanentunderline')}}>
            Home
          <div className={permanentul1}></div>
        </div>
          <div onPointerEnter={()=>{setClass(permanentul2, setpermanentul2 , 'underline')}} onClick={()=>{setPermanentClass(setpermanentul2 , 'permanentunderline')}}>
            Land
            <div className={permanentul2}></div>
          </div>


        <div onPointerEnter={()=>{setClass( permanentul3,setpermanentul3 , 'underline')}} onClick={()=>{setPermanentClass(setpermanentul3 , 'permanentunderline')}}>
            Contact
          <div className={permanentul3}></div>
        </div>


        <div onPointerEnter={()=>{setClass( permanentul4,setpermanentul4 , 'underline')}} onClick={()=>{setPermanentClass(setpermanentul4 , 'permanentunderline')}}>
            About
          <div className={permanentul4}></div>
        </div>


      </div>
      <div className='Utils'>
        {/* <div className='login-register'>
          <div>
            login
          </div>
          <div>
            register
          </div>
        </div> */}
        <div>
            <div className='profile'>
              <div className='profile-main'>
                <div>
                  profile_name
                </div>
                <img>
                </img>
              </div>
                <div className='logout'>
                  Logout
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

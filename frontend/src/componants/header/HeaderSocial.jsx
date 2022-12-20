import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header-social'>
      <a href="https://www.linkedin.com/in/kishoren2572" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Kishore-2572" target="_blank"><FaGithub/></a>
      <a href="https://instagram.com/kishore_.n._?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial

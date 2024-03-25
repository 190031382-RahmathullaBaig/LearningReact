import React from 'react'
import user from '../Images/user.svg';

const ContactCard =(props)=>{
const {id,name,email}=props.contact;
    return(
        <div className='item'>
    <div className='content'>
    <img className='ui avatar image'src={user} alt="user" />
<div className='Header'>
  <div className='ui name'>
    {name}
   
  </div>
  <div>{email}</div>
  </div>
    </div>
    <i className='trash alternate outline icon'></i>
  </div>
    )
}

export  default ContactCard ;
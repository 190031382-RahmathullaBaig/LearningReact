import React, { Component } from 'react'
import ContactCard from './ContactContent'

const ContactList = (props) =>{
  // console.log(props);

const renderContacts = props.contacts.map(contact =>{
 return(
  <ContactCard contact={contact}></ContactCard>
 )
})
return(
  
<div className='ui cellled list'>{renderContacts}</div>
)
}

export default ContactList ;

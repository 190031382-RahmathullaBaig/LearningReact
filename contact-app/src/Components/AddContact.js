import React from 'react'

export default class AddContact extends React.Component {
  state ={
    name:"",
    email:""
  }

  
  add = (e) =>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email ===""){
      alert("All Feilds Mandatory");
      return;
    }
    this.props.AddContactHandler(this.state)
    this.setState({name:"",email:""})
  // console.log(this.state)
    
  }
  render() {
    return (
        <div className='ui main flex'>
        <h2 className='ui h2'>Contact List</h2>
        <form className='ui form flex2' onSubmit={this.add}>
        <div className='feild'>
          <label>Name</label>
          <input 
          name='name' 
          placeholder='Name' 
          type='text'
          value={this.state.name} 
          onChange={(e) => this.setState({name:e.target.value})} />  
        </div>
        <div className='feild'>
          <label>Email</label>
          <input 
          name='email' 
          placeholder='Email' 
          type='email'
          value={this.state.email}
          onChange={
            (e)=> this.setState({email:e.target.value})
          }
          />  
        </div>
        <button className='ui button blue'>Add</button>
        </form>
        <a href='https://www.youtube.com/watch?v=0riHps91AzE'>38:00</a>
      </div>
    )
  }
}

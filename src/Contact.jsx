import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className='contact_card'>
      <div className='contact_input'>
      <label>Name :</label>
      <input type="text" placeholder='ABC' />
      </div>
      <div className='contact_input'>
        <label>Email :</label>
        <input type="email" placeholder='abc@gmail.com'/>
      </div>
      <div className='contact_input'>
        <label>Message :</label>
        <input type="text" placeholder='Write your suggetion' />
        </div>
      </div>
    </div>
  )
}

export default Contact
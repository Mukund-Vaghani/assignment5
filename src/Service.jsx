import React from 'react';

const Service = () => {
  return (
    <>
      {/* <div className='slider'>
        <div className="sliderImg">
        </div>
        <div className="slideImg">
        </div>
        <div className="sliderImg">
        </div>
      </div> */}

      <div className='container'>
        <input type="radio" name='images' id='i1' checked/>
        <input type="radio" name='images' id='i2' />
        <input type="radio" name='images' id='i3' />

        <div className="slider_img" id='one'>
      <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGNvbnN1bHRhbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Service Img" />  
          <label htmlFor="i3" className='pre'></label>
      <label htmlFor="i2" className='nxt'></label>
        </div>
        <div className="slider_img" id='two'>
      <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2glMjBjb25zdWx0YW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Service Img" />
      <label htmlFor="i1" className='pre'></label>
      <label htmlFor="i3" className='nxt'></label>
        </div>
        <div className="slider_img" id='three'>
      <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMGNvbnN1bHRhbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Service Img" />
      <label htmlFor="i2" className='pre'></label>
      <label htmlFor="i1" className='nxt'></label>
        </div>

        <div className="nav">
          <label htmlFor="i1" className='dots' id='dot1'></label>
          <label htmlFor="i2" className='dots' id='dot2'></label>
          <label htmlFor="i3" className='dots' id='dot3'></label>
        </div>
      </div>
      
    </>
  )
}

export default Service
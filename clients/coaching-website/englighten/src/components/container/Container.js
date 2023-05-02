import React from 'react'
import './Container.scss'
import Button from '../button/Button'
function Container() {
  return (
    <>
        <div className='container'>

            <div className='container__text-cont'> 
            <h1 className='container__text_headline'>
            Unlock Your English Speaking Potential with Our Expert Coaching Program
            </h1>
            <div className='container__text_p'>
                <p>Join a community of learners and master English speaking with our interactive and engaging coaching sessions</p>
            </div>
                <Button/>
            </div>
           
            <div className='container__img-cont'> 
              <img src='/student.png' />
            </div>

        </div>
    </>
  )
}

export default Container

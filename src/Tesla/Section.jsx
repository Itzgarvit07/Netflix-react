import React from 'react'
import './section.css'
function Section(props) {
  return (
    <>
      <section style={{ backgroundImage: "url( ../src/Tesla/teslaImages/" + props.background + " )" }}>
        <div className='modelsname'>
          <h1>{props.name}</h1>
          <p>{props.tagline}</p>
        </div>
        <div className='call'>
          <div className='buttons'>

            <a href="#" className='left'>{props.leftbtn}</a>
            {/* conditional rendering  */}
            {props.rightbtn && <a href="#" className='right'>{props.rightbtn}</a>}

          </div>
          {props.arrow && <img src="src/Tesla/teslaImages/down-arrow.svg" alt="" />}



        </div>

      </section>
    </>
  )
}

export default Section
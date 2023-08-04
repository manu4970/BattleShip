import React from 'react'
import '../styles/Ships.css'

function Ships (props) {
  const { ships } = props

  let angle = 0

  function handleClick (e) {
    e.preventDefault()
    const shipContainer = Array.from(document.querySelector('.shipContainer').children)
    angle = angle === 0 ? 90 : 0
    shipContainer.forEach(ship => (ship.style.transform = `rotate(${angle}deg)`))
  }

  return (
    <section>
      <h2>Ships</h2>
      <div className='shipContainer '>
        {ships.map(ship => {
          return (
            <span key={ship} className={ship} />
          )
        })}
      </div>
      <button onClick={handleClick}>Rotate</button>
    </section>
  )
}

export default Ships

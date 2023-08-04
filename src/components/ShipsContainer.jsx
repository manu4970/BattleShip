// import React from 'react'
// import '../styles/Ships.css'

// function ShipsContainer (props) {
//   const { shipsList, selectShip } = props

//   let angle = 0
//   function handleClick (e) {
//     e.preventDefault()
//     const shipContainer = Array.from(document.querySelector('.shipContainer').children)
//     angle = angle === 0 ? 90 : 0
//     shipContainer.forEach(ship => (ship.style.transform = `rotate(${angle}deg)`))
//   }

//   return (
//     <section>
//       <h2>Ships</h2>
//       <div className='shipContainer '>
//         {shipsList.map(ship => {
//           return (
//             <span key={ship.id} className={ship.name} onClick={() => selectShip(ship)} />
//           )
//         })}
//       </div>
//       <button onClick={handleClick}>Rotate</button>
//     </section>
//   )
// }

// export default ShipsContainer

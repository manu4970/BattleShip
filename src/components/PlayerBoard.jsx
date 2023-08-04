// import React from 'react'

// function PlayerBoard (props) {
//   const { board, setShip, selectedShip, posicion, getPosition } = props

//   console.log('Selected Ship :', selectedShip)
//   return (
//     <>
//       <div className='board-container'>
//         {board.map((row, x) => {
//           return (
//             <div
//               className='row'
//               key={x}
//               onClick={(e) => getPosition(e)}
//             >
//               {row.map((cell, y) => {
//                 return (
//                   <div
//                     className={`cell ${cell === 1 ? 'alive' : 'dead'}`}
//                     key={y}
//                     y={y}
//                     x={x}
//                     onClick={() => setShip(selectedShip, posicion.x, posicion.y, 'horizontal')}
//                   />
//                 )
//               })}
//             </div>
//           )
//         })}
//       </div>
//     </>

//   )
// }
// export default PlayerBoard

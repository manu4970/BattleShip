import React from 'react'

function PlayerBoard (props) {
  const board = props.playerBoard
  return (
    <>
      <h1>You</h1>
      <div className='board-container'>
        {board.map((row, i) => {
          return (
            <div className='row' key={i}>
              {row.map((cell, j) => {
                return (
                  <div
                    className={`cell ${cell === 1 ? 'alive' : 'dead'}`}
                    key={j}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </>

  )
}
export default PlayerBoard

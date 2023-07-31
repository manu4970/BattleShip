import React from 'react'

function CpuBoard (props) {
  const board = props.cpuBoard
  return (
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
  )
}
export default CpuBoard
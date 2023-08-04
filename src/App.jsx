import { useState } from 'react'
import Info from './components/Info'
import './styles/App.css'
import './styles/Ships.css'

function App () {
  const [playerBoard, setPlayerBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])

  class Ships {
    constructor (name, length, color) {
      this.id = Math.random()
      this.name = name
      this.length = length
      this.color = color
      // this.positionX = 0
      // this.positionY = 0
      // this.hits = 0
      // this.sunk = false
    }
  }
  const carrier = new Ships('Carrier', 5, 'green')
  const battleship = new Ships('Battleship', 3, 'blue')
  const cruiser = new Ships('Cruiser', 3, 'yellow')
  const submarine = new Ships('Submarine', 2, 'pink')
  const destroyer = new Ships('Destroyer', 4, 'red')

  const [selectedShip, setSelectedShip] = useState()

  const shipsList = [carrier, battleship, cruiser, submarine, destroyer]

  function setShip (ship, x, y, orientation) {
    console.log(ship, x, y, orientation)
    const newBoard = [...playerBoard]
    if (orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        const maxAlowY = playerBoard.length - ship.length
        if (y > maxAlowY) {
          y = maxAlowY
        }
        if (newBoard[x][y + i] === 1) {
          return newBoard
        } else {
          newBoard[x][y + i] = 1
        }
      }
    }
    if (orientation === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        const maxAlowX = playerBoard.length - ship.length
        if (x > maxAlowX) {
          x = maxAlowX
        }
        newBoard[x + i][y] = 1
      }
    }

    setPlayerBoard(newBoard)
    console.log(newBoard)
  }

  return (
    <>
      <Info />
      <div className='boards-container'>
        <div className='board-container'>
          {playerBoard.map((row, x) => {
            return (
              <div
                className='row'
                key={x}
                // onClick={(e) => getPosition(e)}
              >
                {row.map((cell, y) => {
                  return (
                    // console.log(selectedShip)
                    <div
                      className={` cell ${cell === 1 ? 'alive' : 'dead'}`}
                      style={cell === 1 ? { backgroundColor: selectedShip.color } : {}}
                      key={y}
                      y={y}
                      x={x}
                      onClick={() => setShip(selectedShip, x, y, 'vertical')}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
        <h1> VS </h1>
        {/* <PlayerBoard board={cpuBoard} /> */}
      </div>
      <section>
        <h2>Ships</h2>
        <div className='shipContainer '>
          {shipsList.map(ship => {
            return (
              <span key={ship.id} className={ship.name} onClick={() => setSelectedShip(ship)} />
            )
          })}
        </div>
        {/* <button onClick={handleClick}>Rotate</button> */}
      </section>
    </>
  )
}

export default App

import { useState } from 'react'
import Info from './components/Info'
import './styles/Ships.css'
// import PlayerBoard from './components/PlayerBoard'
// import ShipsContainer from './components/ShipsContainer'
import './styles/App.css'

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
    constructor (name, length) {
      this.id = Math.random()
      this.name = name
      this.length = length
      // this.positionX = 0
      // this.positionY = 0
      // this.hits = 0
      // this.sunk = false
    }
  }
  const carrier = new Ships('Carrier', 5)
  const battleship = new Ships('Battleship', 3)
  const cruiser = new Ships('Cruiser', 3)
  const submarine = new Ships('Submarine', 2)
  const destroyer = new Ships('Destroyer', 4)

  // const [selectedShip, setSelectedShip] = useState()

  const shipsList = [carrier, battleship, cruiser, submarine, destroyer]

  // function selectShip (ship) {
  //   setSelectedShip(ship)
  //   console.log(selectedShip)
  // }

  let selectedShip = {}

  const selectShip = (ship) => {
    selectedShip = ship
    console.log(selectedShip)
  }

  let posicion = {}

  function getPosition (e) {
    const cell = e.target
    const x = parseInt(cell.getAttribute('x'))
    const y = parseInt(cell.getAttribute('y'))
    posicion = { x, y }
    console.log(posicion)
  }

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
                onClick={(e) => getPosition(e)}
              >
                {row.map((cell, y) => {
                  return (
                    <div
                      className={`cell ${cell === 1 ? 'alive' : 'dead'}`}
                      key={y}
                      y={y}
                      x={x}
                      onClick={() => setShip(selectedShip, posicion.x, posicion.y, 'horizontal')}
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
              <span key={ship.id} className={ship.name} onClick={() => selectShip(ship)} />
            )
          })}
        </div>
        {/* <button onClick={handleClick}>Rotate</button> */}
      </section>
    </>
  )
}

export default App

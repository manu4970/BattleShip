import { useEffect, useState } from 'react'
import Info from './components/Info'
import './styles/App.css'
import './styles/Ships.css'

function App () {
  const [playerBoard, setPlayerBoard] = useState([...Array(10)].map(() => Array(10).fill(null)))
  const [shipsPlaced, setShipsPlaced] = useState([])

  const [cpuBoard, setCpuBoard] = useState([...Array(10)].map(() => Array(10).fill(null)))

  class Ships {
    constructor (name, length, color) {
      this.id = Math.random()
      this.name = name
      this.length = length
      this.color = color
      this.selected = false
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

  const [selectedShip, setSelectedShip] = useState(null)

  const shipsList = [carrier, battleship, cruiser, submarine, destroyer]

  const [selected, setSelected] = useState(false)

  function setShip (ship, x, y, orientation) {
    if (!ship || shipsPlaced.includes(ship)) return

    const newBoard = [...playerBoard]

    if (orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= playerBoard.length || newBoard[x][y + i]) {
          return
        } else {
          newBoard[x][y + i] = ship
        }
      }
    }

    if (orientation === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= playerBoard.length || newBoard[x + i][y]) {
          return
        } else {
          newBoard[x + i][y] = ship
        }
      }
    }
    setPlayerBoard(newBoard)
    setShipsPlaced([...shipsPlaced, ship])
  }

  function setShipOnCpuBoard (ship, x, y, orientation, board) {
    if (orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= board.length || board[x][y + i]) {
          return false
        } else {
          board[x][y + i] = ship
        }
      }
    }

    if (orientation === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= board.length || board[x + i][y]) {
          return false
        } else {
          board[x + i][y] = ship
        }
      }
    }

    return true
  }
  useEffect(() => {
    const cpuShips = [carrier, battleship, cruiser, submarine, destroyer]
    const newCpuBoard = [...cpuBoard]

    cpuShips.forEach((ship) => {
      let placed = false
      while (!placed) {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical'

        placed = setShipOnCpuBoard(ship, x, y, orientation, newCpuBoard)
      }
    })

    setCpuBoard(newCpuBoard)
  }, [])

  return (
    <>
      <Info />
      <div className='boards-container'>
        <div className='board-container'>
          <h2>You</h2>
          {playerBoard.map((row, x) => {
            return (
              <div className='row' key={x}>
                {row.map((cell, y) => {
                  return (
                    <div
                      className={`cell ${cell ? 'alive' : 'dead'}`}
                      style={cell ? { backgroundColor: cell.color } : {}}
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
        <h2>CPU</h2>
        <div className='board-container'>
          {cpuBoard.map((row, x) => {
            return (
              <div className='row' key={x}>
                {row.map((cell, y) => {
                  return (
                    <div
                      className={`cell ${cell && !cell.visible ? 'hidden' : cell ? 'alive' : 'dead'}`}
                      style={cell && cell.visible ? { backgroundColor: cell.color } : {}}
                      key={y}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <section>
        <h2>Ships</h2>
        <div className='shipContainer '>
          {shipsList.map((ship) => {
            return (
              <span
                key={ship.id}
                onClick={() => setSelectedShip(ship)}
                className={`${ship.name} ${!ship.selected ? '' : 'selected'}`}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App

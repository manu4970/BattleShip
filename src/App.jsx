import { useEffect, useState } from 'react'
import CpuBoard from './components/CpuBoard'
import Info from './components/Info'
import PlayerBoard from './components/PlayerBoard'
import Ships from './components/Ships'
import './styles/App.css'

function App () {
  const [playerBoard, setPlayerBoard] = useState([])
  const [cpuBoard, setCpuBoard] = useState([])

  const ships = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']

  const player = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  ]

  const cpu = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  ]

  useEffect(() => {
    setPlayerBoard(playerBoard)
    setCpuBoard(cpuBoard)
  }, [])

  return (
    <>
      <Info />
      <div className='boards-container'>
        <PlayerBoard playerBoard={player} />
        <CpuBoard cpuBoard={cpu} />
      </div>
      <Ships ship={ships} />
    </>
  )
}

export default App

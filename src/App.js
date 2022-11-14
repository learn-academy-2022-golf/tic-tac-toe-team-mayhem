import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const firstPerson = (index) => {
    let updatedBoard = [...squares] 
    updatedBoard[index]="🌴"
    setSquares(updatedBoard)
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
        <div className='gameboard'>
        {squares.map((value,index)=>{

        return (
        <Square firstPerson={firstPerson}value={value} key={index}
        index={index}/>
        ) 
        })}
      </div>
    </>
  )
}

export default App
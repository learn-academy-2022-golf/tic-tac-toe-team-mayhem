import React, { useState } from 'react'
import picture from './components/picture'
import Square from './components/Square'
import './App.css'


const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const reset = () => {setSquares(Array(9).fill(null))}
  const firstPerson = (index) => {
    let updatedBoard = [...squares] 

    

    if(updatedBoard[0]==="X" && updatedBoard[1]==="X" && updatedBoard[2]==="X" || updatedBoard[3]==="X" && updatedBoard[4]==="X" && updatedBoard[5]==="X" || updatedBoard[6]==="X" && updatedBoard[7]==="X" && updatedBoard[8]==="X" ||updatedBoard[0]==="X" && updatedBoard[3]==="X" && updatedBoard[6]==="X" || updatedBoard[1]==="X" && updatedBoard[4]==="X" && updatedBoard[7]==="X" ||updatedBoard[2]==="X" && updatedBoard[5]==="X" && updatedBoard[8]==="X" ||
    updatedBoard[0]==="X" && updatedBoard[4]==="X" && updatedBoard[8]==="X" ||updatedBoard[2]==="X" && updatedBoard[4]==="X" && updatedBoard[6]==="X"){
      alert("X wins!").preventDefault()
    } 
    else if(updatedBoard[0]==="O" && updatedBoard[1]==="O" && updatedBoard[2]==="O" || updatedBoard[3]==="O" && updatedBoard[4]==="O" && updatedBoard[5]==="O" || updatedBoard[6]==="O" && updatedBoard[7]==="O" && updatedBoard[8]==="O" ||updatedBoard[0]==="O" && updatedBoard[3]==="O" && updatedBoard[6]==="O" || updatedBoard[1]==="O" && updatedBoard[4]==="O" && updatedBoard[7]==="O" ||updatedBoard[2]==="O" && updatedBoard[5]==="O" && updatedBoard[8]==="O" ||
    updatedBoard[0]==="O" && updatedBoard[4]==="O" && updatedBoard[8]==="O" ||updatedBoard[2]==="O" && updatedBoard[4]==="O" && updatedBoard[6]==="O"){
      alert("O wins!").preventDefault()
    } 

    const firstPlayer = updatedBoard.filter((value)=>value==="X") 

    const secondPlayer = updatedBoard.filter((value)=>value==="O") 

    for(let i=0;i<updatedBoard.length;i++)
    if((firstPlayer.length + secondPlayer.length) === 9){
      return alert("Game has ended").preventDefault()
    }

    if(firstPlayer.length > secondPlayer.length)
    {
    updatedBoard[index]="O"
    setSquares(updatedBoard)
    } 
    else {
    updatedBoard[index]="X"
    setSquares(updatedBoard)
    }
    
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <body>
        <picture/>
        <div className='gameboard'>
          
        {squares.map((value,index)=>{

        return (
        <Square 
        firstPerson={firstPerson} 
        value={value} 
        key={index}
        index={index}
        />
        ) 
        })}
      </div>
      <button onClick={firstPerson}>Click for Final Result</button>
      <button onClick={reset}>Play Again</button>
      </body>
    </>
  )
}

export default App
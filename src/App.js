import React, { useState } from 'react'
import picture from './components/picture'
import Square from './components/Square'
import './App.css'


const App = () => {

  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const reset = () => {setSquares(Array(9).fill(null))}
  
  const firstPerson = (index) => {
    let updatedBoard = [...squares] 
    
    // if(updatedBoard[0]==="X" && updatedBoard[1]==="X" && updatedBoard[2]==="X" || updatedBoard[3]==="X" && updatedBoard[4]==="X" && updatedBoard[5]==="X" || updatedBoard[6]==="X" && updatedBoard[7]==="X" && updatedBoard[8]==="X" ||updatedBoard[0]==="X" && updatedBoard[3]==="X" && updatedBoard[6]==="X" || updatedBoard[1]==="X" && updatedBoard[4]==="X" && updatedBoard[7]==="X" ||updatedBoard[2]==="X" && updatedBoard[5]==="X" && updatedBoard[8]==="X" ||
    // updatedBoard[0]==="X" && updatedBoard[4]==="X" && updatedBoard[8]==="X" ||updatedBoard[2]==="X" && updatedBoard[4]==="X" && updatedBoard[6]==="X"){
    //   alert("X wins!").preventDefault()
    // } 
    // else if(updatedBoard[0]==="O" && updatedBoard[1]==="O" && updatedBoard[2]==="O" || updatedBoard[3]==="O" && updatedBoard[4]==="O" && updatedBoard[5]==="O" || updatedBoard[6]==="O" && updatedBoard[7]==="O" && updatedBoard[8]==="O" ||updatedBoard[0]==="O" && updatedBoard[3]==="O" && updatedBoard[6]==="O" || updatedBoard[1]==="O" && updatedBoard[4]==="O" && updatedBoard[7]==="O" ||updatedBoard[2]==="O" && updatedBoard[5]==="O" && updatedBoard[8]==="O" ||
    // updatedBoard[0]==="O" && updatedBoard[4]==="O" && updatedBoard[8]==="O" ||updatedBoard[2]==="O" && updatedBoard[4]==="O" && updatedBoard[6]==="O"){
    //   alert("O wins!").preventDefault()
    // } 
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      
      if (updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        return (alert(`${updatedBoard[a]} is the winner!`).preventDefault())
      }
    }
    const firstPlayer = updatedBoard.filter((value)=>value==="X") 

    const secondPlayer = updatedBoard.filter((value)=>value==="O") 
   
  
    if(firstPlayer.length > secondPlayer.length)
    {
    updatedBoard[index]="O"
    setSquares(updatedBoard)
    } 
    else {
    updatedBoard[index]="X"
    setSquares(updatedBoard)
    }
    if((firstPlayer.length + secondPlayer.length) === 9){
      return alert("Game has ended")
    
    

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
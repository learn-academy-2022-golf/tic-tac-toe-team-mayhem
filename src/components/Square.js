import React from 'react'

const Square = (props) => {
  const handleClick = () => {
    props.firstPerson(props.index)
  }
  return (
    <div onClick = {handleClick} className="square">{props.value}</div>
  )
}
export default Square

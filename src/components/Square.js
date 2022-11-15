import React from 'react'

const Square = (props) => {
  const handleClick = () => {
    if (props.value !== "X" && props.value !== "O")
    {return props.firstPerson(props.index)}
    else if(props.value === "X" || props.value === "O"){return (alert("This spot is taken"))
    }}
  return (
    <div onClick = {handleClick} className="square">{props.value}</div>
  )
}
export default Square

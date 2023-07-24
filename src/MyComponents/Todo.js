import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h5>{todo.Title}</h5> 
      <p>{todo.Des}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default Todo



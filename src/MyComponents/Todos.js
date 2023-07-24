import React from 'react'
import Todo from '../MyComponents/Todo'
const Todos = (props) => {
  const mys ={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={mys}>
        <h2 className="my-3">Todos List</h2>
        {
          props.todo.length===0?"NO TODOS TO DISPLAY!!":
          props.todo.map((ele)=>
          { 
            return(
              <>
              <Todo todo={ele} key={ele.Sno} onDelete={props.onDelete}/> <hr/> 
              </>
              )
          })
        }
        
    </div>
  )
}

export default Todos

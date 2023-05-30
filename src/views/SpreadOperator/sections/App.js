import React, { useState } from "react";
import Input from './ToDo'
import '../styles.css'

function App() {
 

  const [toDo, setToDo] = useState()
  const [list, setList] = useState([])
  
  function handleChange (event){
    setToDo(event.target.value)
    
  }

  function handleClick (event){
    setList((prevItem)=>{
      return(
        [...prevItem, toDo]
      )
    })
    setToDo("")
    event.preventDefault()
    
  }

  function handleDelete(id){
   setList((prevItem) => {
    return prevItem.filter((item, index)=>{
      return index !== id
    })
   })

  }
    
  return (
    <div className="container">
      
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="todo" value={toDo}/>
        <button className="add-button" onClick={handleClick}>
        <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
              <Input 
                text={item}
                key={index}
                id={index}
                onChecked={handleDelete}
              />
          ))}
        </ul>
      </div>  
    </div>
  );
}

export default App;

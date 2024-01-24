import React, { useRef, useState } from 'react'
import Card from './Card'

const App = () => {
  const todoval = useRef()
  const [data , setdata] = useState([])

function addtodo(event) {
  event.preventDefault()
  console.log(todoval.current.value);
  data.push(todoval.current.value)
  setdata([...data])
  
}
const edittodo = (index,value)=>{
console.log('editedtodo called',value,index);
data.splice(index , 1 ,value)
setdata([...data])
}

const deletetodo = (index) =>{
  console.log('deleted called' ,index);
  data.splice(index, 1);
  setdata([...data])
}

  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={addtodo}>
      <input type="text" ref={todoval} placeholder='Enter Todo' />
  <button type="submit">Add</button>
      </form> 
      {data.length > 0 ? data.map((item ,index)=>{
      return <Card title={item} key={index} deletetodo={()=>
        deletetodo(index)} edittodo={edittodo} index ={index}/>
      }): <h1>No data Found</h1>}
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import Card from './Card';

const App = () => {
const [data , setdata] = useState([])


  const todoval = useRef();
const addtodo = (event) =>{
  event.preventDefault()
  data.push(todoval.current.value)
  setdata([...data])

}
const deletetodo = (index)=>{
  console.log('deletetodo called',index);
  data.splice(index,1);
  setdata([...data])
}

const edittodo = (index,value)=>{
  console.log('edittodo called', value,index);
 data.splice(index ,1 ,value)
 setdata([...data])
}
  return (
    
    <>
     <h1>Todo App</h1>
     <form onSubmit={addtodo}>
      <input type="text"  ref={todoval}/>
      <button type="submit">Add</button>
      </form> 
      {data.length > 0 ? data.map((item,index)=>{
        return <Card title={item} key={index} deletetodo={()=>deletetodo(index)} edittodo ={edittodo} index={index}/>
      }) : <h1>No data found</h1>}
    </>
  )
}

export default App

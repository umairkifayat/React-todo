import React, { useRef, useState } from 'react'

const Card = ({title, deletetodo, edittodo,index}) => {
    const [showdata, setshowdata] = useState(true)
    const editedvalue = useRef()
function savetodo(params) {
    edittodo(index,editedvalue.current.value)
    setshowdata(true)
}

  return (
    <>
     {showdata ? <div> {title} <br />
      <button onClick={deletetodo}>delete</button>
      <button onClick={()=>setshowdata(false)}>edit</button> </div> : <div>
        <input type="text" ref={editedvalue} />
        <button onClick={savetodo} >save</button>
        </div>}
    </>
  )
}

export default Card

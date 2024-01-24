import React, { useRef, useState } from 'react'

const Card = ({title,deletetodo ,edittodo,index}) => {
const [shoedata , setdhowdata] = useState(true)
const editval = useRef()
function edit() {
    edittodo(index,editval.current.value)
    setdhowdata(true)
}
  return (
   <>
  {shoedata ?   <div>
      {title}
      <button onClick={ () =>setdhowdata(false)}>edit</button>
      <button onClick={deletetodo}>delete</button>

    </div> : <div>
        <input type="text" ref={editval}/>
        <button onClick={edit}>save</button>
        </div>}
   </>
  )
}

export default Card

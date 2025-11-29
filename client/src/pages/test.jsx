import React, { useContext, useEffect } from 'react'
import { Access } from '../context/access'

function Test() {
  const value=useContext(Access)
  // function handle(){
  //   if(value.access == 'pratham'){
  //     value.setAccess('shubhu')
  //   }
  //   else{
  //     value.setAccess('pratham')
  //   }
  // }
  return (
    <div>
      <pre>
      hello world
      <br />
      made by 
      <br />
      {value.access}
      <br />
      <button onClick={handle}>click me</button>
      </pre>
    </div>
  )
}

export default Test

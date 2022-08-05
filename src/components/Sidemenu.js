// 

import React from 'react'
import sidedata from './sidedata'

const Sidemenu = () => {
  return (
    <div className='sidebar'>
      {sidedata.map((key,val)=>{
        return(
          <li key={key} onClick={()=>{window.location.pathname=val.link}}>
            {""}
            <div> {val.icon}</div>{""}
            <div>{val.title}</div>
          </li>
        )

      })}
    </div>

  )
}

export default Sidemenu
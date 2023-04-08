import React, { useState } from 'react'
import Connect from './Connect';



export default function Home() {
    const[page, setPage] = useState(0);

if(page === 0) {
  return (
    <div className='Home'>
      <img  alt='logo' style={{width: "50%", marginTop: "0%", marginLeft: "-4%"}} src={(require("/Users/macbook/woof/src/assets/d.png"))} />
      <div className='content'>
      <h1>WOof Settlers</h1>
      <div>
      <button onClick={ () => {
        setPage(page +1)
      }}>Apply For Whitelist...</button>
      </div>
      </div>
    </div>
  )
}
if(page === 1) {
    return(
        <Connect />
    )
}
}

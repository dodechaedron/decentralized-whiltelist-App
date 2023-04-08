import React, { useState } from 'react'
import {AiOutlineRetweet} from "react-icons/ai"
import Claim from './Claim';
import Comment from './Comment';

export default function Twitter() {

  const[page, setPage] = useState(0);
    if(page === 1) {
    return(
      <Comment />
    )
  }
  return (
    <div className='Twitter'>
      <butto onClick={()=> { setPage(page +1)}}>          {
<a  target="blank" href='https://twitter.com/intent/tweet/?text=I just Apply for Whitelist to join the early WOof Settlers on @CantoWoof. Let furking WOof %23Canto %23CantoWoof %23CWOof %23WOofSettlers'><button  onClick={ () => {setPage(page + 1)}} >Tweet About Us <AiOutlineRetweet  style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "5px", left: "5px" }} /></button> </a>
           
          }</butto>
    </div>
  )



}

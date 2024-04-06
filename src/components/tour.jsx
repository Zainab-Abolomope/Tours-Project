import React, { useState } from "react"


export default function tour({id, imgUrl, title, price, info, removeTours}) {
    const [readMore, setReadMore] = useState(false)
    function readInfo(){
        return setReadMore(!readMore)
    }
  return (
   <article className="siingle-tour"> 
   <img src={imgUrl} alt={title} />
   <footer>
    <div className="tour-info">
        <h4>{title}</h4>
        <h4 className="tour-price">${price}</h4>
    </div>
    <p>{ readMore? info: `${info.substring(0,200)}`}
    <button onClick={readInfo}>
        {readMore? 'show less': 'read more'}
    </button>
    </p>
    <button className="delete-btn" onClick={()=>removeTours(id)}>
        Not Interested
    </button>
   </footer>
   


   </article>
  )
}

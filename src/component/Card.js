import React from "react";
export const Card = ({dataprops}) => {

  return (
    <>
    <h1>card</h1>
    {dataprops.map( item => (
    <div className='container-card' key={item.id}>
        
        <div className='card-left'>
            <div className='picture-header'>
  
              </div>
            <div className='card-bottom'>Exp: {item?.stock}</div>
        </div> 
        <div className='card-right'>
            <div className='card-name'>{item?.name}</div>
            <div className='card-role'>Role: <span>{item?.category}</span> </div>
            <div className='card-price'>Salarie: <span>${item?.price}</span></div>
        </div> 
        
    </div>
    )
    )
  }
  </>
  )
}

export default Card ;
 




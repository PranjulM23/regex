import React, { useState } from 'react'

function Imgprievew({file}) {
    const [img,setimg]=useState(null);
    const Reader = new FileReader()
    Reader.readAsDataURL(file);
    Reader.onload=()=>{
        setimg(Reader.result);
    }
  return (
    <div>
      <img src={img} alt="" srcset="" width={"200px"} height={"200px"}/>
    </div>
  )
}

export default Imgprievew

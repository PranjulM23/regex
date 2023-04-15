import React, { useEffect, useState } from 'react';
import "../css/home.css"
function Home() {

    const getitem = ()=>{
        let list = localStorage.getItem('list');
        console.log(list);
        if(list){
            return JSON.parse(localStorage.getItem('list'));
        }else{
            return [];
        }
    }
const [image,setimg] = useState(null);
const[title,settitle] = useState(null);
const[des,setdes] = useState(null);
const[geti,seitem] = useState(getitem());

useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(geti))
},[geti])
const handle1 = () =>{
    seitem([...geti,{
        id:new Date().getTime().toString(),
        titl: title,
        desc:des,
        url:image,
    }])

}
const handle = (e)=>{
    const Reader = new FileReader()
    Reader.readAsDataURL(e.target.files[0]);
    Reader.onload=()=>{
        setimg(Reader.result);
    }
}
const handle2 = (e)=>{
    settitle(e.target.value);
}

const delete1 = (id)=>{
    const updatei = geti.filter((elem) => {
        console.log("h")
    })
}
const handle3 = (e)=>{
    setdes(e.target.value);
}
  return (
    <>
        <div className="form">
            <input onChange={handle} type="file" placeholder='Input Box' />
                <input onChange={handle2} type="text" name="title" id="title" placeholder='Title'/>
                <input onChange={handle3} type="text" name="title" id="desr" placeholder='Description'/>
            <button onClick={handle1}>submit</button>

        </div>
        <div className="imgblock">
           {geti.map( (item)=>{
            return <>
                <div className="cl">
                    <h3>{item.titl}</h3>
                    <img src={item.url} alt="" srcSet="" width={"200px"} height={"200px"}/>
                    <div className="descri">
                        <div className="scdiv">

                    <p className='desc'>{item.desc}</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={delete1(item.id)}>Delete</button>
                    </div>
                </div>
            </>
           })}
        </div>
    </>
  )
}

export default Home

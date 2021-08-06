import {useState} from 'react'

export default function Toggle(){
    var [toggle, setToggle] = useState(false)

    return <div style={{borderRadius: 50, height: 25, width: 25, border: '1px solid black', 
        backgroundColor: toggle ? 'white' : 'black' }}
        onClick = {()=>setToggle(!toggle)}/>
}
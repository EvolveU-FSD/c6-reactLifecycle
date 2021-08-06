import { useState, useEffect } from "react"
import PropsPlayChild from './propsPlayChild'

export default function PropsPlayParent(){
    const [parentCounter, setParentCounter] = useState(0)
    return <div style={{margin: 25}}>
        Props Play 
        <div style={{border: '1px solid black', padding: 10, backgroundColor: 'lightgray', margin: 25}}
            onClick ={()=>{setParentCounter(parentCounter+1)}}>
            Increment
        </div>
        Parent Counter: {parentCounter}
        <div style={{border: '1px solid gray', margin: 25, height: 200}}>
            <PropsPlayChild parentCounter={parentCounter} setParentCounter={setParentCounter}/>
        </div>
    </div>
}
import { useState, useEffect } from "react"

export default function StatePlay(){
    var [counter, setCounter] = useState(2)
    var beforeChange = <div>Counter state's  value: {counter}</div>
    counter = counter+1 // watch for this
    var afterChange = <div>Counter's variable value: {counter}</div>

    return <div style={{padding: 25}}>
        {beforeChange}
        {afterChange}
       <div style={{border: '1px solid black', padding: 10, backgroundColor: 'lightgray', margin: 25}}
            onClick ={()=>{setCounter(counter)}}>
            Increment Counter
        </div>  
    </div>
}
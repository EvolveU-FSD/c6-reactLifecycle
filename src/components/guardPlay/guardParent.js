import {useState} from 'react'
import GuardChild from './guardChild'

export default function GuardParent(){
    const [value, setValue] = new useState(null)



    return <div style={{margin: 25}}>
        Guard Parent
        
        <div style={{border: '1px solid black', padding: 10, backgroundColor: 'lightgray', margin: 10}}
            onClick ={()=>{setValue({value: 'a thing'})}}>
            SetValue
        </div>

        <GuardChild value={value} />
    </div>
}
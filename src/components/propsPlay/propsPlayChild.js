import {useState} from 'react'

// same as the below
// export default function PropsPlayChild(props){
//     const parentCounter = props.parentCounter
//     const setParentCounter = props.setParentCounter

export default function PropsPlayChild({parentCounter, setParentCounter}){

    const [childCounter, setChildCounter] = useState(0)
    return <div style={{padding: 25}}>
        Child

        <div style={{border: '1px solid black', padding: 5, backgroundColor: 'lightgray', margin: 10}}
            onClick ={()=>{setParentCounter(parentCounter+1)}}>
            Increment Parent
        </div>

        {childCounter}
        <div style={{border: '1px solid black', padding: 5, backgroundColor: 'lightgray', margin: 10}}
            onClick ={()=>{setChildCounter(childCounter+1)}}>
            Increment Child
        </div>

    </div>
}
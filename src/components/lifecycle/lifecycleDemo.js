import {useEffect, useState} from 'react'

export default function LifeCycleDemo(){
    
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('this fires every time state changes even if in the parent')
    })

    // useEffect(()=>{
    //     console.log('this fires once when it starts then the guard never changes')
    // }, [])

    // useEffect(()=>{
    //     console.log('this fires when the counter changes. Counter value is currenty:', counter)
    // }, [counter])

    // useEffect(()=>{
    //     // console.log('this fires once when it starts then the guard never changes')
    //     return ()=> {
    //         console.log('this fires when the page unmounts')
    //     }
    // }, [])

    // useEffect(()=>{
    //     return ()=> {
    //         console.log('this fires after the counter value changes. Counter value is currently:', counter)
    //     }
    // }, [counter])


    return <div style={{margin:25}}>
        <div style={{border: '1px solid black', padding: 10, backgroundColor: 'lightgray', margin: 25}}
            onClick ={()=>{setCounter(++counter)}}>
            Increment
        </div>
        Counter: {counter}
    </div>
}
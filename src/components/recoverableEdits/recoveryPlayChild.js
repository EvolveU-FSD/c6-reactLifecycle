import {useState} from 'react'

export default function RecoveryPlayChild({name, setName}){
    const [editingName, setEditingName] = useState(name)

    function storeName(){
        // will often be an api call
        setName(editingName)
    }
    
    return <div style={{margin:25}}>
        Editing Window
        <br/>
        <input type="text" value={editingName} onChange={(e)=>setEditingName(e.target.value)} style={{margin:10}}/>

        <div style={{border: '1px solid black', padding: 10, backgroundColor: 'lightgray', margin: 10}}
            onClick ={()=>{setEditingName(name)}}>
            Reset
        </div>
        <div style={{border: '1px solid black', padding: 10, backgroundColor: 'cyan', margin: 10}}
            onClick ={storeName}>
            Save
        </div>
    </div>
}
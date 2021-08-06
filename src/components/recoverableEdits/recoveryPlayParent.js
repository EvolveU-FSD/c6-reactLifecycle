import {useState} from 'react'
import RecoveryPlayChild from './recoveryPlayChild'

export default function RecoveryPlayParent(){
    const [name, setName] = useState('Chris')
    return <div style={{margin: 25}}>
        Recovery Play
        Stored Name: {name}
        <div style={{border: '1px solid black', margin: 25, height: 300}}>
            <RecoveryPlayChild name={name} setName={setName} />
        </div>
    </div>
}
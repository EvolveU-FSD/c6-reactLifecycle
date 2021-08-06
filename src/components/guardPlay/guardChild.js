export default function GuardChild({value}){

    if (!value) return null // make sure the value is set before we try to use it in the real jsx
    
    return <div>
        {value.value}
    </div>
}
export default function updateHandleInput(e,value,setValue){
    const newValue = {...value}
    newValue[e.target.name] = Number(e.target.value)
    setValue(newValue)
}
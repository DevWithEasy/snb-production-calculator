export default function handleInput(e, value, setValue) {
    if (e.target.name === 'amount') {
        const newValue = { ...value }
        newValue[e.target.name] = Number(e.target.value)
        setValue(newValue)
    } else {
        const newValue = { ...value }
        newValue[e.target.name] = e.target.value
        setValue(newValue)
    }
}
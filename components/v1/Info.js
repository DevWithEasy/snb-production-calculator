export default function Info({ text, value, unit }) {
    return (
        <div className='info'>
            <p className='text'>{text}</p>
            <p className='value'>{value} {unit}</p>
        </div>
    )
}
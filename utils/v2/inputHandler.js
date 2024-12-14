const handleFocus = (e) => {
    e.target.type = 'tel'
    e.target.setAttribute('inputmode', 'numeric')
}

const handleBlur = (e) => {
    e.target.type = 'text'
}

export {handleBlur,handleFocus}
function checkAddtionIndex(string) {
    const plusIndex = String(string).indexOf('+')
    const minusIndex = String(string).indexOf('-')
    const devideIndex = String(string).indexOf('/')
    const multiIndex = String(string).indexOf('*')

    if (plusIndex !== -1 || minusIndex !== -1 || devideIndex !== -1 || multiIndex !== -1) {
        return true
    } else {
        return false
    }
}

export default checkAddtionIndex
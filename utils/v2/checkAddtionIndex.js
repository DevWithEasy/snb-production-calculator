function checkAddtionIndex(string) {
    const plusIndex = String(string).indexOf('+');

    if (plusIndex !== -1) {
        return true
    } else {
        return false
    }
}

export default checkAddtionIndex
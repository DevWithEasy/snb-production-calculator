function getFormatNumber(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return Number(num.toFixed(2))
    }
}

export default getFormatNumber
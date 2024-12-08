function getConsumptionItemsString(object) {
    
    const keys = Object.keys(object)

    let str = ''
    keys.forEach((key, i) => {
        const item_str = i === 0 ? key + '-' + object[key] : ',' + key + '-' + object[key]
        str = str.concat(item_str)
    })

    return str

}

export default getConsumptionItemsString
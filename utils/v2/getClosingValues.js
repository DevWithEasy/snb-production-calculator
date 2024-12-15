import getFormatNumber from "./getFormatNumber"

function getClosingValues(keys,data,closing){
    let closingValues = {}
    keys.forEach(key => {
        closingValues[key] = getFormatNumber(closing[key] - data[key] )
    })
    return closingValues
}

export default getClosingValues
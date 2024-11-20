const getItemsString=(items)=>{  
    let str = ''
  
    items.forEach((item,i)=>{
      const item_str = i===0? item.product+'-'+item.batch : ','+item.product+'-'+item.batch
      str = str.concat(item_str)
    })

    return str
}

export default getItemsString
function getBreadCrumbArray(string){
    const string_array = string.split('/').slice(1)
    const path_array = []
    let path_text = ''
    string_array.forEach(path=>{
      path_text = `${path_text}/${path}`
      path_array.push({
        name : path,
        href : path_text
      })
    })
    return path_array
}

export default getBreadCrumbArray
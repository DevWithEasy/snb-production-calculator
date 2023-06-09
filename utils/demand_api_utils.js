import axios from "axios"

export const addField=async(id)=>{
    try {
        const res = await axios.post(`/api/db_apply?id=${id}`)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const getProduct=async(id,carton,setCarton,demand,addDemand,toast,setLoading)=>{
    if(!id || !carton){
        return toast.error('Feild Empty')
    }
    setLoading(true)
    try {
        const res = await axios.get(`/api/item_demand/?id=${id}&carton=${carton}`)

        const find = demand.find(product => product.id === res.data.data.id)
        if(find){
            setLoading(false)
            return toast.error( `${find.name} is already added.`)
        }else{
            setLoading(false)
            setCarton('')
            addDemand(res.data.data)
        }
        
    } catch (error) {
        setLoading(false)
        console.log(error)
    }

}

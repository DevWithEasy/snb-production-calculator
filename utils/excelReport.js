class ExcelReport{
    constructor(data){
        this.data = data
    }

    getNames=()=>{
        return this.data.map(data=>data?.info?.name)
    }

    getIngedient=(rawName)=>{
        let rm = []
        const names = this.getNames()
        names.forEach(name => {
            const product= this.data.find(data=> data.info.name === name)
            rm.push(product.recipe[rawName])
        });
        return rm
    }
    getInfo=(infoProperty)=>{
        let info = []
        const names = this.getNames()
        names.forEach(name => {
            const product= this.data.find(data=> data.info.name === name)
            info.push(product.info[infoProperty])
        });
        return info
    }
}

export default ExcelReport
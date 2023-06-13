class Recipe{
    constructor(product){
        this.product = product
        this.ingredients = this.product.ingredients
    }
    ingredientsArray(){
        const keys = Object.keys(this.ingredients)
        const array = keys.map(key =>{
          return {[key] : this.ingredients[key] }
        })
        return array
    }

    totalInput(){
        const keys = Object.values(this.ingredients)
        const total = keys.reduce((a,i)=>a+i,0).toFixed(2)
        return total
    }

    totalProcessLoss(){
        return Number((this.totalInput()*this.product.processLoss/100).toFixed(2))
    }
    
    totalOutput(){
        return Number((this.totalInput()-this.totalProcessLoss()).toFixed(2))
    }
    
    totalCarton(){
        return (this.totalOutput()/(this.product.packetWeight/1000)/this.product.packetPerCarton).toFixed(2)
    }

}

export default Recipe;
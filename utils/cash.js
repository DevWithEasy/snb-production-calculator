class Cash{
    constructor(entries){
        this.entries = entries;
    }

    getTotalCashIn(){
        return this.entries
        .filter(entry => entry.type === 'cash_in')
        .reduce((total, entry) => total + entry.amount, 0)
    }

    getTotalCashOut(){
        return this.entries
        .filter(entry => entry.type === 'cash_out')
        .reduce((total, entry) => total + entry.amount, 0)
    }

    getBalance(){
        return this.getTotalCashIn() - this.getTotalCashOut()
    }

    getEntriesWithBalance(){
        // console.log(this.entries.sort((a,b)=>a-b))
        let stock =0
        const newEntries = []
        this.entries.sort((a,b)=>b-a).forEach(entry => {

            if(entry.type === 'cash_in'){
                stock = stock + entry.amount
            }else{
                stock = stock - entry.amount
            }

            newEntries.unshift({
                ...entry,
                stock: stock
            })
        });
        console.log(newEntries)
        return newEntries.sort((a,b)=>b-a)
    }
}

export default Cash;
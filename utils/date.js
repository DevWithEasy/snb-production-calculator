class GetDate{
    constructor(){
        this.date = new Date();
    }
    getMonth(){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[this.date.getMonth()]} ${this.date.getFullYear()}`;
    }
    getDay(){
            return this.date.toLocaleString() 
    }
}
export default GetDate;
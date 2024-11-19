class Toast{
    constructor(store){
        this.store = store
    }
    active(msg){
        this.store.setLoading()
        this.store.setMessage('pending',msg)
    }
    success(msg){
        this.store.setMessage('success',msg)
        setTimeout(() => {
            this.store.setLoading()
            this.store.setMessage()
        }, 2000);
    }
    error(msg){
        this.store.setMessage('error',msg)
        setTimeout(() => {
            this.store.setLoading()
            this.store.setMessage()
        }, 2000);
    }
}

export default Toast;
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    app_user : {},
    loading : false,
    message : '',
    message_type : '',
    setLoading : () =>{
        set((state)=>({
            loading : !state.loading,
        }))
    },
    setMessage : (type='',message='') =>{
        set((state)=>({
            message : message,
            message_type : type
        }))
    },
    loged : (userData) =>{
        set((state)=>({
            app_user : userData
        }))
    },
    logout : () =>{
        set((state)=>({
            app_user : {}
        }))
    }
})
const appStore = create(
    devtools(
        persist(userStore,{
            name : "app",
        })
    )
)
export default appStore;
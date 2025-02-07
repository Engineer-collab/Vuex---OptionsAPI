export default {
       
    login(context){
        context.commit('auth',{isAuth:true})
    },
    logout(context){
        context.commit('auth',{isAuth:false})
    }
}
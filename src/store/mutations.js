export default {
       
    auth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    }
}
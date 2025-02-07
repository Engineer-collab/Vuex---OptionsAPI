export default {
    increment(context) {
        setTimeout(
            context.commit('increment',)
            , 2000)

    },
    increase(context, payload) {
        setTimeout(function () {

            context.commit('increase', payload)
        }, 3000)
    },
}
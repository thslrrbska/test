// store/index.js
export const state = () => ({
    user: {}
})

export const mutations = {
    setUser(state, user) {
        state.user = user;
    }
}

export const actions = {
    nuxtServerInit(context, { req }) {
        // console.log('1241241');
        // console.log(process.env.TEST);
      }
}


import {
    SET_TOKEN,
    SET_NAME,
    SET_AVATAR,
    SET_ROLES
} from './mutation-types'
export default {
    [SET_TOKEN]: (state, token) => {
        state.token = token
    },
    [SET_NAME]: (state, name) => {
        state.name = name
    },
    [SET_AVATAR]: (state, avatar) => {
        state.avatar = avatar
    },
    [SET_ROLES]: (state, roles) => {
        state.roles = roles
    }
}
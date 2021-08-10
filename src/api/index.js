import axios from "../utils/http";
import store from "../store"

export function fetchPermission() {
    return axios.get('/api/get_permission?user=' + store.state.UserToken);
}

export function login(user) {
    return axios.get('/api/login?user=' + user)
}

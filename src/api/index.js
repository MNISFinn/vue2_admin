import axios from "../utils/http";
import store from "../store"

export function fetchPermission() {
    // return axios.get('/api/get_permission?user=' + store.state.UserToken);
    return axios.get('/get_permission?user=' + store.state.UserToken);
}

export function login(user, password) {
    // return axios.get('/api/admin_login?name=' + user + '&password=' + password)
    return axios.get('/login?user=' + user + '&password=' + password)
}

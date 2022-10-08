import axios from "axios"

export const getApi = async (email) => {
    let response = await axios.get(`https://everhour-backend-production.up.railway.app/users/${email}`)
    return response.data
}


export const patchApi = async (params, email) => {
    let response = await axios.patch(`https://everhour-backend-production.up.railway.app/users/${email}`, params)

    return response.data
}


export const patchTasks = async (params, email) => {
    let response = await axios.patch(`https://everhour-backend-production.up.railway.app/users/tasks/${email}`, params)

    return response.data
}

export const postTask = async (params, email) => {
    let response = await axios.post(`https://everhour-backend-production.up.railway.app/users/tasks/${email}`, params)

    return response.data
}
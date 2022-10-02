import axios from "axios"

export const getApi = async (email) => {
    let response = await axios.get(`https://everhour-backend-production.up.railway.app/users/${email}`)
    return response.data
}


export const patchApi = async (params, email) => {
    let response = await axios.patch(`https://everhour-backend-production.up.railway.app/users/${email}`, params)

    return response.data
}
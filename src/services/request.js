/*import axios from 'axios'

const baseurl="http://localhost:8080/rpgwiki/"
export const logIn = async (
    endpoint,
    body,
    setData,
    setError
) => {


    try {
        const response = await axios.post(baseurl + endpoint, body)
        setData(response.data.token)

    } catch (error) {
      
        setError(error.response?.data?.error || error.message)
    }
}

export const signup = async (
    endpoint,
    body,
    setData,
    setError
) => {
    try {
        console.log(body)
        const response = await axios.post(baseurl + endpoint, body)
        setData(true)
    } catch (error) {
        setError(error.response?.data?.error || error.message)
    }
}
*/
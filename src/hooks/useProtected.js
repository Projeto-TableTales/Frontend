import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const tokenNow = window.localStorage.getItem('token')
        !tokenNow && navigate('/login')

    },[navigate])
    
}
import axios from "axios";

export const checkAuth = async() => {
    axios.defaults.withCredentials = true;
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/checkAuth`, {
        withCredentials: true,
    });

    const data = await res.data;
    return data.success;
}









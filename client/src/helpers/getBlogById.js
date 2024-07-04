import axios from "axios";

export const getBlogById = async(id) => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getBlogById/${id}`);
    const data = await res.data;
    return data.blog;
};















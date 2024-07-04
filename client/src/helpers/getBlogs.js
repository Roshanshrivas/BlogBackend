import axios from "axios";

export const getBlogs = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/allBlogs`);
    const data = await res.data;
    return data.blogs;
};






















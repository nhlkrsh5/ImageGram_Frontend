import axios from "axios"

export const fetchAllPost = async (params) => {
    try {
        const response = await axios.get("https://imagegram-2-pi20.onrender.com/api/v1/post");
        return response.data.data.posts;
    } catch (error) {
        return error;
    }
}

export const fetchSinglePost = async (id) => {
    try {
        const response = await axios.get(`https://imagegram-2-pi20.onrender.com/api/v1/post/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error");
           
    }
}


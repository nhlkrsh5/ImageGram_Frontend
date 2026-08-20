import axios from "axios";

export const UploadPost = async (caption,file,userId,tocken) => {
   try {
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('image', file);
        formData.append('user', userId);

        const response = await axios.post("https://imagegram-2-pi20.onrender.com/api/v1/post",
            formData,
            {
                headers: {
                    'x-access-tocken': tocken,
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.log("Upload problem:", error.response?.data || error.message);
        throw error;  // Re
    }
}

export const PostDelete = async(id,tocken)=>{
    try {
        const response = await axios.delete(`https://imagegram-2-pi20.onrender.com/api/v1/post/${id}`,{
            headers:{
                'x-access-tocken': tocken
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const LikeOnAPost = async (postId,tocken) => {
    console.log("Tocken from LIke: "+tocken);
    
    try {
       const response = await axios.post(
        `https://imagegram-2-pi20.onrender.com/api/v1/post/${postId}/likes`,
        {}, //for body
        {
            headers: {
                //'Authorization': `Bearer ${tocken}`,
                'x-access-tocken': tocken
            }
       });
       return response.data;
    } catch (error) {
        throw error
    }
}
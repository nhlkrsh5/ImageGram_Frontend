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
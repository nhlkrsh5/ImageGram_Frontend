import axios from "axios"

export const UserRegister = async(username,email,password)=>{
    try {
        const response = await axios.post("https://imagegram-2-pi20.onrender.com/api/v1/user/signup",{
            username: username,
            email: email,
            password: password
        });

        return response;
    } catch (error) {
        console.log("USer register problem:",error);
        
    }
}

export const UserSignIN = async (email,password) => {
    try {
        const response = await axios.post("https://imagegram-2-pi20.onrender.com/api/v1/user/signin",{
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.log("USer Sign in problem:",error);
    }
}
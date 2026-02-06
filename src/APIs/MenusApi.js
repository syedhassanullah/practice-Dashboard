import axios from "axios";
import API_BASE_URL from '../config/apiConfig'


const API_URL = `${API_BASE_URL}/Menus`;


const getmenuss = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data
        // console.log("helo-----------------", response.data)
    } catch (error) {

        console.error("Error", error)
        throw error;
    }

};

export default getmenuss;
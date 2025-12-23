import axios from "axios";


const API_URL = 'http://localhost:5132/api/Menu';


const getmenus = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data
        // console.log("helo-----------------", response)
    } catch (error) {

        console.error("Error", error)
        throw error;
    }

};

export default getmenus;
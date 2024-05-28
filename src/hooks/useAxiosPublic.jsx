import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://final-food-casestudy2.onrender.com/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

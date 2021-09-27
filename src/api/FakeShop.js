import axios from "axios";

const fakeAPI = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const getProducts = async () => {
    return await fakeAPI
        .get(`/products`)
        .catch((err) => {
            console.log("err", err);
        })
}
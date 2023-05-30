import { API } from "../constants";
import axios from "axios";

const blogDetailServices = {
    getBlogDetails: async () => {
        const response = await axios.get(API.MANAGE_BLOG_DETAILS + "/get");
        return response.data;
    },
    insertBlogDetail: async (blogDetail) => {
        const response = await axios.post(API.MANAGE_BLOG_DETAILS + "/insert", blogDetail);
        return response.data;
    },
    updateBlogDetail: async (blogDetail) => {
        const response = await axios.post(API.MANAGE_BLOG_DETAILS + "/update", blogDetail);
        return response.data;
    },
    deleteBlogDetail: async (blogDetail) => {
        const response = await axios.post(API.MANAGE_BLOG_DETAILS + "/delete", blogDetail);
        return response.data;
    },
};

export default blogDetailServices;

import { API } from "../constants";
import axios from "axios";

 const contactServices = {
  sendMessage: async (contact) => {
    // console.log(user);
    const response = await axios.post(API.CONTACT.SEND_MESSAGE, contact);
    return response.data;
  },
 
};

export default contactServices;

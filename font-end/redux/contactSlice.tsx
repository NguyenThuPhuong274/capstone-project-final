import React from "react";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactServices } from "../services";
import { toast } from 'react-toastify';

export const sendMessage = createAsyncThunk("signin", async (contact) => {
  const response = await contactServices.sendMessage(contact);
  return response;
});


const contactSlice = createSlice({
  name: "contact",
  initialState: {
    response_status: false,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      const { response_status } = action.payload;
      state.response_status = response_status;
      console.log("Send message successfully", action.payload);
      toast.success("Gửi thông điệp thành công");
    });
  },
});

export default contactSlice;

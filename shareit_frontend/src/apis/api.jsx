import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonQuestionResource = {
  instance: axios.create({
    baseURL: "/",
    withCredentials: true,
  }),
  fetchBooking: async () => {
    const response = await JsonQuestionResource.instance.get("/booking");
    return response.data;
  },

  fetchBookingId: async (number) => {
    const response = await JsonQuestionResource.instance.get(
      `/booking/${number}`
    );
    return response.data;
  },

  fetchBookingAry: async () => {
    const response = await JsonQuestionResource.instance.get("/booking/");
    return response.data.content;
  },

  fetchBookingPassAry: async (number) => {
    const response = await JsonQuestionResource.instance.get(
      `/booking?pass=${number}`
    );
    return response.data.content;
  },

  fetchBookingUserAry: async (number) => {
    const response = await JsonQuestionResource.instance.get(
      `/booking?user=${number}`
    );
    return response.data.content;
  },
};

export default JsonQuestionResource;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

let number = 1;

const JsonQuestionResource = {

    instance: axios.create({
        baseURL: `${BASE_URL}/`,
        //withCredentials: true,
    }),
    fetchBooking: async () => {
        const response = await JsonQuestionResource.instance.get(`/question/${number}`);
        return response.data;
    },

    // fetchBookingId: async (number) => {
    //     const response = await JsonQuestionResource.instance.get(
    //         `${BASE_URL}/booking/${number}`
    //     );
    //     return response.data;
    // },

    // fetchBookingAry: async () => {
    //     const response = await JsonQuestionResource.instance.get("/booking/");
    //     return response.data.content;
    // },

    // fetchBookingPassAry: async (number) => {
    //     const response = await JsonQuestionResource.instance.get(
    //         `${BASE_URL}/booking?pass=${number}`
    //     );
    //     return response.data.content;
    // },

    // fetchBookingUserAry: async (number) => {
    //     const response = await JsonQuestionResource.instance.get(
    //         `${BASE_URL}/booking?user=${number}`
    //     );
    //     return response.data.content;
    // },
};

export default JsonQuestionResource;
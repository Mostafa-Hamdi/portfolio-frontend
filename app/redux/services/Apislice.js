// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// ===== Token Refresh State =====
let isRefreshing = false;
let subscribers = [];

const onTokenRefreshed = (newToken) => {
  subscribers.forEach((callback) => callback(newToken));
  subscribers = [];
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

// ===== Axios instance for refresh =====
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

// ===== Custom baseQuery with refresh logic =====
const baseQuery = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem("token");
      //   const language = localStorage.getItem("Lan") || "en";

      //   headers.set("lang", language);
      headers.set("Accept", "application/json");

      if (token && endpoint !== "login") {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  let result = await rawBaseQuery(args, api, extraOptions);

  // ===== Handle token expired =====
  if (result?.error?.data?.message === "This token is expired.") {
    if (!isRefreshing) {
      isRefreshing = true;

      axiosInstance
        .post(
          "/refresh-token",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        )
        .then((response) => {
          const newToken = response?.data?.data?.token;
          if (newToken) {
            localStorage.setItem("token", newToken);
            localStorage.setItem("isLogin", "true");
            onTokenRefreshed(newToken);
          }
        })
        .catch(() => {
          localStorage.setItem("isLogin", "false");
        })
        .finally(() => {
          isRefreshing = false;
        });
    }

    return new Promise((resolve) => {
      addSubscriber((newToken) => {
        rawBaseQuery(args, api, extraOptions).then(resolve);
      });
    });
  }

  return result;
};

// ===== Create RTK Query API instance =====
export const api = createApi({
  reducerPath: "api",
  baseQuery, // ✅ Using the custom baseQuery
  tagTypes: ["Projects", "Subscribers", "Services", "Experiences"], // ✅ Add this line

  endpoints: () => ({}), // inject endpoints from other files
});

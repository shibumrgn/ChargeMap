import axios from "axios";
import rateLimit from "axios-rate-limit";

const BASE_URL =
  process.env.REACT_APP_API_URL || "https://api.openchargemap.io/v3";

const http = rateLimit(
  axios.create({
    baseURL: BASE_URL,
    headers: {
      "X-API-Key": process.env.ACCESS_KEY,
    },
  }),
  {
    maxRequests: 1,
    perMilliseconds: 5000,
  }
);

export { http };

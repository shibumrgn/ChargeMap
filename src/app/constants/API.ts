const BASE_URL = process.env.BASE_API_URL;

export const API = {
  GET_USERS: `${BASE_URL}/users`,
  GET_CHARGING_STATIONS: `${BASE_URL}/poi`,
};

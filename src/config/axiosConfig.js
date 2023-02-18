import Axios from "axios";
export const axiosConnect = (
  token = "",
  fileAttached = false,
  timeout = 50000
) => {
  contenType = fileAttached ? "multipart/form-data" : "application/json";
  let baseUrl = "http://localhost:3333/";
  const apiClient = Axios.create({
    baseURL: baseUrl,
    timeout: timeout ? timeout : 50000,
    headers: {
      "Content-Type": contenType,
      Authorization: `Bearer ${token}`,
    },
  });
  return apiClient;
};

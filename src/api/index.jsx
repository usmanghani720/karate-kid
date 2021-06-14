import axios from "axios";
import { message } from "antd";
import Defender from "../helpers/defender";
import { getOr } from "lodash/fp";
let options = {
	baseURL: `https://staging-backend.hirex.us`
};

if (Defender.isAuthenticated()) {
  options["headers"] = {
    Authorization: Defender.token(),
  };
}
const axiosClient = axios.create(options);
axios.create({ withCredentials: true });
axiosClient.interceptors.request.use(
  (config) => {
    if (Defender.isAuthenticated()) {
      config.headers.Authorization = Defender.token();
    }
    return config;
  },
  function (error) {
    if (getOr(200, "response.status", error) === 401) {
      if (
        window.location.href.split("/")[3] === "" ||
        window.location.href.split("/")[3] === "login"
      ) {
        message.error(`Invalid email or password`);
      } else {
        Defender.logout();
        window.location = "/login";
      }
    }
  }
);

axiosClient.interceptors.response.use(null, function (config) {
  if (getOr(200, "response.status", config) === 401) {
    if (
      window.location.href.split("/")[3] === "" ||
      window.location.href.split("/")[3] === "login"
    ) {
      message.error(`Invalid email or password`);
    } else {
      Defender.logout();
      window.location = "/login";
    }
    return Promise.reject(config);
  }
  return Promise.resolve(config);
});

export default axiosClient;

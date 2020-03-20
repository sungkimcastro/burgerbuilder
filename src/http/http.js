import axios from "axios";

export const http = axios.create({
  baseURL: "https://burger-25531.firebaseio.com/"
});

export default http;

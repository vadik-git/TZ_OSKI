import axios from "axios";

export const BackendUrl="/";

export default axios.create({
  baseURL: BackendUrl,
  headers: {
    "Content-type": "application/json"
  }
});
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async sendContactEmail(name, email, message) {
    let response = await apiClient.post("/contact", {
      name: name,
      email: email,
      message: message
    });

    let payload = response.data;

    if (payload.status == "success") {
      return payload.data;
    }

    return null;
  }
};

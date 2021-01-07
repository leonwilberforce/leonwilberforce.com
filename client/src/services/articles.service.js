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
  async getLatestArticles(limit) {
    let response = await apiClient.get("/articles", {
      params: { limit: limit }
    });

    let payload = response.data;

    if (payload.status == "success") {
      return payload.data;
    }

    return null;
  },
  
  async getArticle(url) {
    let response = await apiClient.get("/articles", {
      params: { url: url, limit: 1 }
    });

    let payload = response.data;

    if (payload.status == "success") {
      return payload.data;
    }

    return null;
  }
};

const API_URL = "http://localhost:3001";

export const apiClient = {
  login: async (email, password) => {
    const res = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const users = await res.json();
    if (users.length === 0) {
      throw new Error("Invalid credentials");
    }
    const user = users[0];
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  getCurrentUser: async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      return null;
    }
    return JSON.parse(userStr);
  },

  logout: async () => {
    localStorage.removeItem("user");
  },

  get: async (path) => {
    const res = await fetch(`${API_URL}/${path}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    return res.json();
  },
};

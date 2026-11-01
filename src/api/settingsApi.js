import { apiRequest } from "./client.js";
export const settingsApi = {
  list: () => apiRequest("/settings"),
  update: (key, value) => apiRequest(`/settings/${key}`, { method: "PATCH", body: { value } }),
};

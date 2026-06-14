import { apiClient } from "../api/apiSong";
import { ENDPOINTS } from "../api/endpoints";

export const uploadSong = async (formData) => {
  return apiClient(ENDPOINTS.SONG.UPLOAD, {
    method: "POST",
    body: formData,
  });
};

import { apiClient } from "../api/apiClient";
import { ENDPOINTS } from "../api/endpoints";

export const getSongs = () =>
  apiClient(ENDPOINTS.SONG.GET_ALL);

export const getSongById = (id) =>
  apiClient(
    ENDPOINTS.SONG.GET_BY_ID(id)
  );

export const createSong = (songData) =>
  apiClient(
    ENDPOINTS.SONG.CREATE,
    {
      method: "POST",
      body: JSON.stringify(songData),
    }
  );

export const updateSong = (
  id,
  songData
) =>
  apiClient(
    ENDPOINTS.SONG.UPDATE(id),
    {
      method: "PUT",
      body: JSON.stringify(songData),
    }
  );

export const deleteSong = (id) =>
  apiClient(
    ENDPOINTS.SONG.DELETE(id),
    {
      method: "DELETE",
    }
  );
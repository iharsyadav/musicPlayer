export const ENDPOINTS = {
  USER: {
    GET_ALL: "/users",
    GET_BY_ID: "/users",
    CREATE: "/users",
    UPDATE: "/users",
    DELETE: "/users",
  },
   SONG: {
    GET_ALL: "/songs",
    GET_BY_ID: (id) => `/songs/${id}`,
    CREATE: "/songs",
    UPDATE: (id) => `/songs/${id}`,
    DELETE: (id) => `/songs/${id}`,
    UPLOAD: "/songs/upload",
  },
};
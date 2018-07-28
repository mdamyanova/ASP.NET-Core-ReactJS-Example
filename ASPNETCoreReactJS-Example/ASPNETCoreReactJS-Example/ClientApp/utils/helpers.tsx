const storage = window.localStorage;

export const getAccessToken = () => storage.getItem("access_token");

export const getUser = () => storage.getItem("user");

export const setUser = (user: any) => storage.setItem("user", user);

export const setAccessToken = (token: any) => storage.setItem("access_token", token);

export const removeAccessToken = () => storage.removeItem("access_token");

export const isLoggedIn = () => Boolean(getAccessToken());
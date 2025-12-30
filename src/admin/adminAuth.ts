export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem("admin_logged_in") === "true";
};

export const adminLogin = () => {
  localStorage.setItem("admin_logged_in", "true");
};

export const adminLogout = () => {
  localStorage.removeItem("admin_logged_in");
};

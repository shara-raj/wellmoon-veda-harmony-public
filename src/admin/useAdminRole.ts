export type AdminRole = "admin" | "editor";

export const getAdminRole = (): AdminRole => {
  const storedRole = localStorage.getItem("admin_role");
  return storedRole === "editor" ? "editor" : "admin";
};

export const setAdminRole = (role: AdminRole) => {
  localStorage.setItem("admin_role", role);
};

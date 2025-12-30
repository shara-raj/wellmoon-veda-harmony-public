export type AdminRole = "admin" | "editor";

// TEMPORARY role source (will be replaced by Supabase later)
export const useAdminRole = (): AdminRole => {
  // Change this to "editor" to test editor UI
  return "admin";
};

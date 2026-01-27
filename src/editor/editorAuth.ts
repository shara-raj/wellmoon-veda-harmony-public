export const isEditorLoggedIn = (): boolean => {
  return localStorage.getItem("editor_logged_in") === "true";
};

export const editorLogin = () => {
  localStorage.setItem("editor_logged_in", "true");
};

export const editorLogout = () => {
  localStorage.removeItem("editor_logged_in");
};

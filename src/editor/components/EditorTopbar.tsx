import { useNavigate } from "react-router-dom";
import { editorLogout } from "../editorAuth";

const EditorTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    editorLogout();
    navigate("/editor/login");
  };

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      <div />

      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="text-sm px-4 py-2 rounded-full border border-border hover:bg-muted"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default EditorTopbar;

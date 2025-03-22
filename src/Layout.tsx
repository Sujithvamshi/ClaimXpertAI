import { Outlet, useNavigate } from "react-router-dom";
import ChatBot from "./Chatbot/ChatBot";
export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-y-auto flex flex-col bg-white text-black">
      <div className="flex justify-between px-20 py-2 border-b border-zinc-400">
        <a href="/" className=" space-x-2">
          <p className="text-5xl font-thin">ClaimXpert</p>
          <p className="text-xs font-bold text-center">Powered by AI.</p>
        </a>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => navigate("/login")}
            className="btn transitions"
          >
            Login
          </button>
          {/* <button className="btn transitions">Register</button> */}
        </div>
      </div>
      <Outlet />
      <ChatBot />
    </div>
  );
}

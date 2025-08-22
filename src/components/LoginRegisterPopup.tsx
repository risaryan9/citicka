import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface LoginRegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginRegisterPopup: React.FC<LoginRegisterPopupProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<"login" | "register">("login");

  const handleGoogleLogin = () => {
    console.log("Google OAuth login triggered");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-[350px] p-6 relative font-[Poppins]"
            initial={{ scale: 0.8, opacity: 0, y: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[#8c8c8c] hover:text-[#000d1a]"
            >
              ✕
            </button>

            {/* Tabs */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveTab("login")}
                className={`px-4 py-2 font-semibold border-b-2 transition ${
                  activeTab === "login"
                    ? "text-[#000d1a] border-[#000d1a]"
                    : "text-[#8c8c8c] border-transparent hover:border-[#000d1a]"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`px-4 py-2 font-semibold border-b-2 transition ${
                  activeTab === "register"
                    ? "text-[#000d1a] border-[#000d1a]"
                    : "text-[#8c8c8c] border-transparent hover:border-[#000d1a]"
                }`}
              >
                Register
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {activeTab === "login" ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                >
                  <form className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg text-[#000d1a] focus:outline-none focus:border-[#000d1a]"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg text-[#000d1a] focus:outline-none focus:border-[#000d1a]"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#000d1a] text-white py-2 rounded-lg hover:bg-black"
                    >
                      Login
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <form className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg text-[#000d1a] focus:outline-none focus:border-[#000d1a]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg text-[#000d1a] focus:outline-none focus:border-[#000d1a]"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-[#8c8c8c] rounded-lg text-[#000d1a] focus:outline-none focus:border-[#000d1a]"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#000d1a] text-white py-2 rounded-lg hover:bg-black"
                    >
                      Register
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-[#8c8c8c]" />
              <span className="px-2 text-[#8c8c8c] text-sm">OR</span>
              <hr className="flex-grow border-[#8c8c8c]" />
            </div>

            {/* Google OAuth Button */}
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 w-full border border-[#8c8c8c] rounded-lg py-2 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-[#000d1a] font-medium">Continue with Google</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginRegisterPopup;

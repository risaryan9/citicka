import { User, FileText, MessageCircle, Shield, FileCheck, LogOut, ChevronRight } from "lucide-react";

interface ProfilePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfilePopup = ({ isOpen, onClose }: ProfilePopupProps) => {
  if (!isOpen) return null;

  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-lg z-50 overflow-hidden">
        {/* User Profile Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-lg font-semibold text-purple-600">U</span>
            </div>
            <div>
              <h3 className="font-medium text-navy">User</h3>
              <p className="text-sm text-gray">+91 7760290528</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {/* View all bookings */}
          <button 
            onClick={handleItemClick}
            className="w-full flex items-center justify-between px-6 py-3 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-gray" />
              <span className="text-navy font-medium">View all bookings</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray" />
          </button>

          {/* Support Section */}
          <div className="px-6 py-2">
            <h4 className="text-sm font-medium text-navy mb-2">Support</h4>
          </div>
          
          <button 
            onClick={handleItemClick}
            className="w-full flex items-center justify-between px-6 py-3 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-gray" />
              <span className="text-navy font-medium">Chat with us</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray" />
          </button>

          {/* More Section */}
          <div className="px-6 py-2 mt-4">
            <h4 className="text-sm font-medium text-navy mb-2">More</h4>
          </div>
          
          <button 
            onClick={handleItemClick}
            className="w-full flex items-center justify-between px-6 py-3 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileCheck className="h-5 w-5 text-gray" />
              <span className="text-navy font-medium">Terms & Conditions</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray" />
          </button>
          
          <button 
            onClick={handleItemClick}
            className="w-full flex items-center justify-between px-6 py-3 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-gray" />
              <span className="text-navy font-medium">Privacy Policy</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray" />
          </button>

          {/* Logout */}
          <div className="border-t border-border mt-4">
            <button 
              onClick={handleItemClick}
              className="w-full flex items-center space-x-3 px-6 py-4 hover:bg-secondary transition-colors"
            >
              <LogOut className="h-5 w-5 text-gray" />
              <span className="text-navy font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePopup;
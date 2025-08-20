import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Citicka</h3>
            <p className="text-gray-light">
              Discover amazing events, movies, and activities in your city. 
              Your premier destination for entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                Terms and Conditions
              </Button>
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                Privacy Policy
              </Button>
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                Contact Us
              </Button>
            </div>
          </div>

          {/* For Organizers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Organizers</h4>
            <div className="space-y-2">
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                List Your Events
              </Button>
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                Organizer Dashboard
              </Button>
              <Button variant="link" className="text-gray-light hover:text-white p-0 h-auto font-normal">
                Support
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-light hover:text-white hover:bg-navy-light">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-light hover:text-white hover:bg-navy-light">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-light hover:text-white hover:bg-navy-light">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-light hover:text-white hover:bg-navy-light">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-light text-sm">
              © 2024 Citicka. All rights reserved.
            </p>
            <p className="text-gray-light text-sm mt-2 md:mt-0">
              Made with ❤️ for event enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { MapPin, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Location */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-navy">Citicka</h1>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray" />
              <Select defaultValue="gurugram">
                <SelectTrigger className="w-32 border-none bg-transparent text-navy font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gurugram">Gurugram</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <Button variant="ghost" className="text-navy font-medium hover:text-navy hover:bg-secondary">
                Curated
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="ghost" className="text-navy font-medium hover:text-navy hover:bg-secondary">
                Events
              </Button>
            </Link>
            <Button variant="ghost" className="text-navy font-medium hover:text-navy hover:bg-secondary">
              Movies
            </Button>
            <Button variant="ghost" className="text-navy font-medium hover:text-navy hover:bg-secondary">
              Activities
            </Button>
          </div>

          {/* Right Section - Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-secondary rounded-xl px-3 py-2">
              <Search className="h-4 w-4 text-gray mr-2" />
              <Input 
                placeholder="Search events, movies and restaurants"
                className="border-none bg-transparent text-navy placeholder:text-gray focus-visible:ring-0 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-navy hover:bg-secondary">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
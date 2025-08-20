import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  category: string;
}

const EventCard = ({ title, image, date, time, location, price, category }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card border-0">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-navy px-3 py-1 rounded-full text-xs font-bold">
            {price}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-navy text-lg line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        
        <Button className="w-full bg-navy hover:bg-navy-light text-white rounded-xl font-medium transition-colors">
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
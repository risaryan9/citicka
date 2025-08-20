import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  upcomingEvents: number;
  nextShow: string;
}

interface ArtistSectionProps {
  artists: Artist[];
}

const ArtistSection = ({ artists }: ArtistSectionProps) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-navy mb-2">Artists Nearby</h2>
          <p className="text-gray">Discover talented artists performing in your city</p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="flex-shrink-0 w-72 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 gradient-overlay opacity-60" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {artist.upcomingEvents} Events
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">{artist.name}</h3>
                  <p className="text-gray text-sm mb-4">{artist.genre}</p>
                  
                  <div className="flex items-center text-sm text-gray mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Next show: {artist.nextShow}</span>
                  </div>

                  <Button className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 rounded-xl transition-colors">
                    View All Events
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
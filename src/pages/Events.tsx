import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import EventsCalendar from "@/components/EventsCalendar";
import ArtistSection from "@/components/ArtistSection";

// Import images
import concertImage from "@/assets/concert-event.jpg";
import comedyImage from "@/assets/comedy-event.jpg";
import foodImage from "@/assets/food-event.jpg";
import sportsImage from "@/assets/sports-event.jpg";
import theaterImage from "@/assets/theater-event.jpg";
import nightlifeImage from "@/assets/nightlife-event.jpg";
import workshopImage from "@/assets/workshop-event.jpg";

const Events = () => {
  // Hero carousel data for big events
  const heroEvents = [
    {
      id: 1,
      title: "Coldplay Music of the Spheres World Tour",
      subtitle: "Delhi",
      date: "15 Jan 2025, 7PM",
      location: "DY Patil Stadium, Navi Mumbai",
      price: "₹4999 onwards",
      image: concertImage
    },
    {
      id: 2,
      title: "IPL Final 2025",
      subtitle: "Cricket Championship",
      date: "28 May 2025, 7:30PM",
      location: "Eden Gardens, Kolkata",
      price: "₹8999 onwards",
      image: sportsImage
    },
    {
      id: 3,
      title: "Comedy Central Live",
      subtitle: "International Comedy Festival",
      date: "10 Feb 2025, 8PM",
      location: "Nehru Centre, Mumbai",
      price: "₹2499 onwards",
      image: comedyImage
    },
    {
      id: 4,
      title: "Sunburn Festival 2025",
      subtitle: "Electronic Dance Music Festival",
      date: "29 Dec 2024, 4PM",
      location: "Vagator Beach, Goa",
      price: "₹3999 onwards",
      image: nightlifeImage
    }
  ];

  // Event categories
  const eventCategories = [
    { id: 1, title: "Music", image: concertImage, count: "150+ Events" },
    { id: 2, title: "Theatre", image: theaterImage, count: "80+ Events" },
    { id: 3, title: "Sports", image: sportsImage, count: "45+ Events" },
    { id: 4, title: "Comedy", image: comedyImage, count: "95+ Events" },
    { id: 5, title: "Art & Culture", image: workshopImage, count: "60+ Events" },
    { id: 6, title: "Nightlife", image: nightlifeImage, count: "120+ Events" },
    { id: 7, title: "Food & Drinks", image: foodImage, count: "75+ Events" }
  ];

  // Artists nearby data
  const nearbyArtists = [
    {
      id: 1,
      name: "Arijit Singh",
      genre: "Bollywood Playback Singer",
      image: concertImage,
      upcomingEvents: 3,
      nextShow: "Dec 15, 2024"
    },
    {
      id: 2,
      name: "Kapil Sharma",
      genre: "Stand-up Comedian",
      image: comedyImage,
      upcomingEvents: 5,
      nextShow: "Nov 28, 2024"
    },
    {
      id: 3,
      name: "Nucleya",
      genre: "Electronic Music Producer",
      image: nightlifeImage,
      upcomingEvents: 2,
      nextShow: "Jan 8, 2025"
    },
    {
      id: 4,
      name: "Zakir Khan",
      genre: "Hindi Stand-up Comedian",
      image: comedyImage,
      upcomingEvents: 4,
      nextShow: "Dec 5, 2024"
    },
    {
      id: 5,
      name: "Divine",
      genre: "Indian Rapper",
      image: concertImage,
      upcomingEvents: 3,
      nextShow: "Feb 14, 2025"
    },
    {
      id: 6,
      name: "Biswa Kalyan Rath",
      genre: "Stand-up Comedian",
      image: comedyImage,
      upcomingEvents: 2,
      nextShow: "Jan 20, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-2">Discover Events</h1>
              <p className="text-gray text-lg">Find amazing events happening in your city</p>
            </div>
            <HeroCarousel slides={heroEvents} />
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Browse by Category</h2>
              <p className="text-gray">Explore events by your favorite categories</p>
            </div>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4">
                {eventCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex-shrink-0 w-48 h-32 rounded-2xl overflow-hidden cursor-pointer group transition-transform hover:scale-105 shadow-card"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <h3 className="text-lg font-bold mb-1">{category.title}</h3>
                        <p className="text-sm opacity-90">{category.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Artists Nearby */}
        <ArtistSection artists={nearbyArtists} />

        {/* Monthly Events Calendar */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Events Calendar</h2>
              <p className="text-gray">Discover events happening throughout the month</p>
            </div>
            <EventsCalendar />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
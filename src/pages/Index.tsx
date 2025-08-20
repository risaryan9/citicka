import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";

// Import images
import concertImage from "@/assets/concert-event.jpg";
import comedyImage from "@/assets/comedy-event.jpg";
import foodImage from "@/assets/food-event.jpg";
import sportsImage from "@/assets/sports-event.jpg";
import theaterImage from "@/assets/theater-event.jpg";

const Index = () => {
  // Hero carousel data
  const heroSlides = [
    {
      id: 1,
      title: "Akon India Tour 2025",
      subtitle: "Delhi",
      date: "9 Nov, 7PM",
      location: "Gate No 14, Jawaharlal Nehru Stadium, Delhi/NCR",
      price: "₹2999 onwards",
      image: concertImage
    },
    {
      id: 2,
      title: "Stand-Up Comedy Night",
      subtitle: "Live Performance by Top Comedians",
      date: "15 Nov, 8PM",
      location: "Comedy Club, Cyber City, Gurugram",
      price: "₹799 onwards",
      image: comedyImage
    },
    {
      id: 3,
      title: "Gourmet Food Festival",
      subtitle: "Taste the World's Best Cuisines",
      date: "20 Nov, 6PM",
      location: "Kingdom of Dreams, Gurugram",
      price: "₹1299 onwards",
      image: foodImage
    }
  ];

  // Happening this week events
  const happeningThisWeek = [
    {
      id: 1,
      title: "Beginner's Golf Workshop",
      image: sportsImage,
      date: "20 Aug - 20 Sep",
      time: "6AM",
      location: "ZEN Golf Range & Academy, Gurugram",
      price: "₹1400 onwards",
      category: "SPORTS"
    },
    {
      id: 2,
      title: "Broadway Musical Night",
      image: theaterImage,
      date: "25 Aug",
      time: "7PM",
      location: "Kingdom of Dreams, Gurugram",
      price: "₹1899 onwards",
      category: "THEATER"
    },
    {
      id: 3,
      title: "Skydiving Experience",
      image: sportsImage,
      date: "30 Aug",
      time: "10AM",
      location: "Skydiving Center, Narnaul",
      price: "₹15999 onwards",
      category: "ADVENTURE"
    },
    {
      id: 4,
      title: "Wine Tasting Evening",
      image: foodImage,
      date: "2 Sep",
      time: "6PM",
      location: "The Wine Company, DLF Phase 4",
      price: "₹2500 onwards",
      category: "FOOD & DRINKS"
    }
  ];

  // Music events
  const musicEvents = [
    {
      id: 5,
      title: "Bollywood Night Live",
      image: concertImage,
      date: "10 Sep",
      time: "8PM",
      location: "Airia Mall, Gurugram",
      price: "₹999 onwards",
      category: "MUSIC"
    },
    {
      id: 6,
      title: "Classical Music Concert",
      image: theaterImage,
      date: "15 Sep",
      time: "7PM",
      location: "Siri Auditorium, Delhi",
      price: "₹1500 onwards",
      category: "MUSIC"
    },
    {
      id: 7,
      title: "DJ Night Party",
      image: concertImage,
      date: "20 Sep",
      time: "9PM",
      location: "Cyber Hub, Gurugram",
      price: "₹1299 onwards",
      category: "MUSIC"
    },
    {
      id: 8,
      title: "Indie Music Festival",
      image: concertImage,
      date: "25 Sep",
      time: "6PM",
      location: "Leisure Valley Park, Gurugram",
      price: "₹799 onwards",
      category: "MUSIC"
    }
  ];

  // Comedy events
  const comedyEvents = [
    {
      id: 9,
      title: "Kapil Sharma Live",
      image: comedyImage,
      date: "5 Sep",
      time: "8PM",
      location: "Talkatora Stadium, Delhi",
      price: "₹1999 onwards",
      category: "COMEDY"
    },
    {
      id: 10,
      title: "Open Mic Night",
      image: comedyImage,
      date: "12 Sep",
      time: "7PM",
      location: "Canvas Laugh Club, DLF Mall",
      price: "₹599 onwards",
      category: "COMEDY"
    },
    {
      id: 11,
      title: "Stand-up Comedy Workshop",
      image: comedyImage,
      date: "18 Sep",
      time: "6PM",
      location: "The Comedy Store, Cyber City",
      price: "₹1200 onwards",
      category: "COMEDY"
    },
    {
      id: 12,
      title: "Improv Comedy Show",
      image: comedyImage,
      date: "22 Sep",
      time: "8PM",
      location: "Improv Comedy Mumbai, Delhi Branch",
      price: "₹899 onwards",
      category: "COMEDY"
    }
  ];

  // Food & Drinks events
  const foodEvents = [
    {
      id: 13,
      title: "Street Food Festival",
      image: foodImage,
      date: "8 Sep",
      time: "5PM",
      location: "Cyber Hub, Gurugram",
      price: "₹500 onwards",
      category: "FOOD"
    },
    {
      id: 14,
      title: "Masterchef Cooking Class",
      image: foodImage,
      date: "14 Sep",
      time: "3PM",
      location: "Culinary Academy, Gurugram",
      price: "₹2999 onwards",
      category: "FOOD"
    },
    {
      id: 15,
      title: "Craft Beer Tasting",
      image: foodImage,
      date: "21 Sep",
      time: "7PM",
      location: "7 Barrel Brew Pub, Delhi",
      price: "₹1499 onwards",
      category: "DRINKS"
    },
    {
      id: 16,
      title: "Italian Food Festival",
      image: foodImage,
      date: "28 Sep",
      time: "6PM",
      location: "Hotel Leela Ambience, Gurugram",
      price: "₹3500 onwards",
      category: "FOOD"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroCarousel slides={heroSlides} />
          </div>
        </section>

        {/* Happening This Week */}
        <CategorySection title="Happening this week" events={happeningThisWeek} />

        {/* Music Events */}
        <CategorySection title="Live Music & Concerts" events={musicEvents} />

        {/* Comedy Events */}
        <CategorySection title="Comedy Shows" events={comedyEvents} />

        {/* Food & Drinks Events */}
        <CategorySection title="Food & Drinks" events={foodEvents} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
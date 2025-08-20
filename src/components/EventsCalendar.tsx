import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Ticket } from "lucide-react";
import { format } from "date-fns";

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  venue: string;
  price: string;
  category: string;
}

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [showModal, setShowModal] = useState(false);

  // Sample events data for the calendar
  const calendarEvents: CalendarEvent[] = [
    {
      id: 1,
      title: "Arijit Singh Live Concert",
      date: new Date(2024, 11, 15), // December 15, 2024
      time: "7:00 PM",
      venue: "Indira Gandhi Indoor Stadium, Delhi",
      price: "₹2999 onwards",
      category: "Music"
    },
    {
      id: 2,
      title: "Stand-up Comedy Night",
      date: new Date(2024, 11, 20), // December 20, 2024
      time: "8:30 PM",
      venue: "Comedy Club, Cyber City",
      price: "₹899 onwards",
      category: "Comedy"
    },
    {
      id: 3,
      title: "New Year's Eve Party",
      date: new Date(2024, 11, 31), // December 31, 2024
      time: "9:00 PM",
      venue: "Cyber Hub, Gurugram",
      price: "₹1999 onwards",
      category: "Party"
    },
    {
      id: 4,
      title: "Classical Music Concert",
      date: new Date(2025, 0, 5), // January 5, 2025
      time: "6:30 PM",
      venue: "Siri Fort Auditorium, Delhi",
      price: "₹1500 onwards",
      category: "Music"
    },
    {
      id: 5,
      title: "Food Festival",
      date: new Date(2025, 0, 12), // January 12, 2025
      time: "5:00 PM",
      venue: "Kingdom of Dreams, Gurugram",
      price: "₹1299 onwards",
      category: "Food"
    },
    {
      id: 6,
      title: "Tech Conference",
      date: new Date(2025, 0, 18), // January 18, 2025
      time: "10:00 AM",
      venue: "Convention Centre, Delhi",
      price: "₹3999 onwards",
      category: "Conference"
    }
  ];

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return calendarEvents.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Get dates that have events
  const getEventDates = () => {
    return calendarEvents.map(event => event.date);
  };

  const handleDateClick = (date: Date | undefined) => {
    if (date) {
      const eventsOnDate = getEventsForDate(date);
      if (eventsOnDate.length > 0) {
        setSelectedDate(date);
        setShowModal(true);
      }
    }
  };

  const eventDates = getEventDates();
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <>
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateClick}
          className="w-full"
          modifiers={{
            hasEvents: eventDates
          }}
          modifiersStyles={{
            hasEvents: {
              backgroundColor: 'hsl(var(--navy))',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 'bold'
            }
          }}
        />
        <div className="mt-4 text-center">
          <p className="text-sm text-gray">
            Click on highlighted dates to view events
          </p>
        </div>
      </div>

      {/* Event Details Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-navy">
              Events on {selectedDate && format(selectedDate, "MMMM dd, yyyy")}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedDateEvents.map((event) => (
              <div key={event.id} className="border border-border rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-navy text-lg">{event.title}</h3>
                  <span className="text-xs bg-secondary text-navy px-2 py-1 rounded-full font-medium">
                    {event.category}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-sm text-navy font-semibold">
                    <Ticket className="h-4 w-4 mr-2" />
                    <span>{event.price}</span>
                  </div>
                </div>

                <Button className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-2 rounded-xl transition-colors">
                  View Details & Book
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsCalendar;
import { Calendar, MapPin, Clock, Ticket, Music, Users } from 'lucide-react';
import Image from 'next/image';
import EventsBanner from './EventsBanner';

interface Event {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
    venue: string;
    location: string;
    time: string;
    description: string;
    price?: string;
    status?: 'upcoming' | 'sold-out' | 'past';
}

const events: Event[] = [
    {
        id: 1,
        date: '15',
        month: 'JAN',
        year: '2025',
        title: 'GRUNGE LEGENDS REUNION TOUR',
        venue: 'The Underground Arena',
        location: 'Seattle, WA',
        time: '8:00 PM',
        description: 'Experience the ultimate 90s grunge revival with classic hits and rare performances. Limited merchandise available exclusively at this show.',
        price: '$45',
        status: 'upcoming'
    },
    {
        id: 2,
        date: '22',
        month: 'JAN',
        year: '2025',
        title: 'ALTERNATIVE ROCK FEST',
        venue: 'Red Rock Stadium',
        location: 'Portland, OR',
        time: '7:30 PM',
        description: 'A celebration of alternative rock featuring tribute bands and exclusive Last Legends merchandise launches.',
        price: '$55',
        status: 'upcoming'
    },
    {
        id: 3,
        date: '03',
        month: 'FEB',
        year: '2025',
        title: 'VINTAGE VINYL NIGHT',
        venue: 'The Garage Club',
        location: 'Los Angeles, CA',
        time: '9:00 PM',
        description: 'Intimate venue experience with vinyl DJ sets, vintage band tees pop-up shop, and meet & greet sessions.',
        price: '$35',
        status: 'sold-out'
    },
    {
        id: 4,
        date: '17',
        month: 'FEB',
        year: '2025',
        title: 'SOUND GARDEN TRIBUTE SHOW',
        venue: 'Electric Ballroom',
        location: 'San Francisco, CA',
        time: '8:30 PM',
        description: 'Honoring the legends of grunge with a special tribute performance and exclusive band t-shirt releases.',
        price: '$50',
        status: 'upcoming'
    },
    {
        id: 5,
        date: '05',
        month: 'MAR',
        year: '2025',
        title: 'PEARL JAM TRIBUTE NIGHT',
        venue: 'The Cavern',
        location: 'Austin, TX',
        time: '9:00 PM',
        description: 'Deep dive into Pearl Jam\'s iconic discography with special guest performances and rare merch drops.',
        price: '$48',
        status: 'upcoming'
    },
    {
        id: 6,
        date: '18',
        month: 'MAR',
        year: '2025',
        title: 'SMASHING PUMPKINS CELEBRATION',
        venue: 'Metro Hall',
        location: 'Denver, CO',
        time: '8:00 PM',
        description: 'Celebrate the alternative rock legends with hits from Siamese Dream and Mellon Collie era. Exclusive merch available.',
        price: '$52',
        status: 'upcoming'
    },
    {
        id: 7,
        date: '30',
        month: 'MAR',
        year: '2025',
        title: '90S ROCK FESTIVAL',
        venue: 'Open Air Arena',
        location: 'Phoenix, AZ',
        time: '6:00 PM',
        description: 'Full day festival celebrating the best of 90s alternative and grunge. Multiple stages, food trucks, and massive merch booth.',
        price: '$75',
        status: 'upcoming'
    },
    {
        id: 8,
        date: '28',
        month: 'DEC',
        year: '2024',
        title: 'NEW YEAR\'S GRUNGE BASH',
        venue: 'The Black Box',
        location: 'Chicago, IL',
        time: '10:00 PM',
        description: 'Ring in the new year with classic 90s rock anthems and exclusive year-end merch sales.',
        price: '$60',
        status: 'past'
    }
];

export function EventsTimeline() {
    return (
        <div className="bg-black">
            {/* Hero Banner */}
            <EventsBanner />

            {/* Main Timeline Section */}
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
                            Upcoming Shows
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
                        <p className="text-gray-400 tracking-wide max-w-2xl mx-auto">
                            Mark your calendars for these unforgettable nights of 90s rock nostalgia
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

                        {/* Events */}
                        <div className="space-y-12">
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="relative"
                                >
                                    {/* Date Circle */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                                        <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-red-600 flex flex-col items-center justify-center">
                                            <span className="text-white text-xl">{event.date}</span>
                                            <span className="text-red-600 text-xs tracking-wider">{event.month}</span>
                                        </div>
                                    </div>

                                    {/* Mobile layout - stacked */}
                                    <div className="md:hidden w-full pl-24 space-y-4">
                                        <div className={`bg-zinc-900 border border-zinc-800 p-6 ${event.status === 'upcoming' ? 'hover:border-red-600' : ''
                                            } transition-colors duration-300`}>
                                            <EventDetailsCard event={event} />
                                        </div>
                                        <div className="bg-zinc-900 border border-zinc-800 p-6">
                                            <EventDescriptionCard event={event} />
                                        </div>
                                    </div>

                                    {/* Desktop layout - side by side */}
                                    <div className="hidden md:flex gap-6 items-start">
                                        {/* Left Card - Event Details */}
                                        <div className="w-1/2 pr-12">
                                            <div className={`bg-zinc-900 border border-zinc-800 p-6 ${event.status === 'upcoming' ? 'hover:border-red-600' : ''
                                                } transition-colors duration-300`}>
                                                <EventDetailsCard event={event} />
                                            </div>
                                        </div>

                                        {/* Right Card - Description */}
                                        <div className="w-1/2 pl-12">
                                            <div className="bg-zinc-900 border border-zinc-800 p-6">
                                                <EventDescriptionCard event={event} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Event Highlight */}
            <div className="bg-zinc-900 border-y border-zinc-800 py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                            <Image
                                src="/festival.jpeg"
                                alt="Featured Event"
                                className="w-full h-full object-cover"
                                fill
                            />
                            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 uppercase tracking-wider">
                                Featured
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl text-white uppercase tracking-wider mb-4">
                                90S ROCK FESTIVAL
                            </h3>
                            <div className="w-16 h-1 bg-red-600 mb-6" />
                            <p className="text-gray-400 leading-relaxed mb-6">
                                The biggest 90s rock celebration of the year! Three stages featuring tribute bands honoring Nirvana, Pearl Jam, Soundgarden, Alice in Chains, and more.
                                Plus exclusive Last Legends merchandise booth with limited edition festival tees.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin className="w-5 h-5 text-red-600" />
                                    <span>Open Air Arena - Phoenix, AZ</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Calendar className="w-5 h-5 text-red-600" />
                                    <span>March 30, 2025 - Full Day Event</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Ticket className="w-5 h-5 text-red-600" />
                                    <span>Starting at $75</span>
                                </div>
                            </div>
                            <button className="bg-red-600 text-white px-8 py-3 uppercase tracking-wider hover:bg-red-700 transition-colors">
                                Get Festival Tickets
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mt-20 text-center">
                        <div className="bg-zinc-900 border border-zinc-800 p-8 max-w-2xl mx-auto">
                            <h3 className="text-2xl text-white uppercase tracking-wider mb-3">
                                Stay Updated
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Subscribe to our newsletter for exclusive event announcements and early merch releases
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL"
                                    className="flex-1 bg-black border border-zinc-700 px-4 py-3 text-gray-300 placeholder-gray-600 uppercase tracking-wide focus:outline-none focus:border-red-600 transition-colors"
                                />
                                <button className="bg-red-600 text-white px-8 py-3 uppercase tracking-wider hover:bg-red-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EventDetailsCard({ event }: { event: Event }) {
    return (
        <>
            {/* Status Badge */}
            {event.status === 'sold-out' && (
                <div className="inline-block bg-red-600 text-white px-3 py-1 text-xs uppercase tracking-wider mb-2">
                    Sold Out
                </div>
            )}
            {event.status === 'past' && (
                <div className="inline-block bg-zinc-700 text-gray-400 px-3 py-1 text-xs uppercase tracking-wider mb-2">
                    Past Event
                </div>
            )}

            {/* Title */}
            <h3 className="text-xl text-white uppercase tracking-wider mb-3">
                {event.title}
            </h3>

            {/* Event Details */}
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="tracking-wide">{event.venue} - {event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="tracking-wide">{event.time}</span>
                </div>
                {event.price && (
                    <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4 text-red-600" />
                        <span className="tracking-wide">Starting at {event.price}</span>
                    </div>
                )}
            </div>

            {/* Action Button */}
            {event.status === 'upcoming' && (
                <button className="w-full bg-transparent border border-gray-600 text-gray-300 px-6 py-3 uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300">
                    Get Tickets
                </button>
            )}
            {event.status === 'sold-out' && (
                <button className="w-full bg-transparent border border-zinc-700 text-gray-600 px-6 py-3 uppercase tracking-wider cursor-not-allowed">
                    Sold Out
                </button>
            )}
        </>
    );
}

function EventDescriptionCard({ event }: { event: Event }) {
    return (
        <>
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-red-600" />
                <h4 className="text-sm text-red-600 uppercase tracking-widest">Event Details</h4>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
                {event.description}
            </p>

            {/* Additional Info */}
            <div className="space-y-3 pt-4 border-t border-zinc-800">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 uppercase tracking-wide text-sm">Doors Open</span>
                    <span className="text-gray-300">{event.time}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 uppercase tracking-wide text-sm">Capacity</span>
                    <span className="text-gray-300">
                        {event.status === 'sold-out' ? 'SOLD OUT' : 'Limited Seats'}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 uppercase tracking-wide text-sm">Merchandise</span>
                    <span className="text-gray-300">Available</span>
                </div>
            </div>

            {/* Note */}
            <div className="mt-6 p-4 bg-black/50 border-l-2 border-red-600">
                <p className="text-gray-500 text-sm">
                    Exclusive Last Legends merchandise will be available at the event. Limited edition designs only sold at shows.
                </p>
            </div>
        </>
    );
}
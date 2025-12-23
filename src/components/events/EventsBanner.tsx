import Image from "next/image"
import { Ticket, Music, Users } from 'lucide-react';

const EventsBanner = () => {
    return (
        <div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                    src="/event-concert.jpeg"
                    alt="Rock Concert"
                    className="w-full h-full object-cover"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
                        Live Events
                    </h1>
                    <div className="w-24 h-1 bg-red-600 mb-6" />
                    <p className="text-gray-300 text-lg md:text-xl tracking-wide max-w-2xl">
                        Experience the legends live. Join us for exclusive concerts and merchandise events.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-zinc-900 border-y border-zinc-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <Music className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <div className="text-3xl text-white mb-2">50+</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Events Yearly</div>
                        </div>
                        <div className="text-center">
                            <Users className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <div className="text-3xl text-white mb-2">10K+</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Fans Attended</div>
                        </div>
                        <div className="text-center">
                            <Ticket className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <div className="text-3xl text-white mb-2">100%</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Rock & Roll</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsBanner

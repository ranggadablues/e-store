import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden bg-black min-h-[600px] flex flex-col justify-center">
            {/* Dark grunge texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 opacity-90" />

            {/* Background image with dark overlay */}
            <div className="absolute inset-0 opacity-20">
                <Image src="/concert.jpeg" alt="Rock concert background" fill priority className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl tracking-wider text-white uppercase">
                            90&apos;s Band Accessories
                        </h1>

                        <div className="w-24 h-1 bg-red-600 mx-auto" />

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Authentic vintage band tees from the golden era of rock, grunge, and alternative
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        <Button
                            size="lg"
                            className="border-2 border-gray-400 bg-red-600 hover:bg-red-700 text-white px-10 py-6 uppercase tracking-wider"
                        >
                            Shop Now
                        </Button>
                        <Button
                            size="lg"
                            className="border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white px-10 py-6 uppercase tracking-wider"
                        >
                            View Collection
                        </Button>
                    </div>

                    <div className="flex justify-center gap-8 pt-6 text-sm text-gray-400 uppercase tracking-wide">
                        <span>• Authentic Vintage</span>
                        <span>• 100% Cotton</span>
                        <span>• Free Shipping</span>
                    </div>
                </div>
            </div>

            {/* Subtle red accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
        </div>
    )
}

export default Banner;
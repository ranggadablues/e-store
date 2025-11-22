"use client"

import useCartStore from "@/store/cartStore";
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ShoppingCartIcon = () => {

    const router = useRouter();
    const {cart, hasHydrated} = useCartStore();

    if (!hasHydrated) return null;
    return (
        <Button 
            variant="ghost" 
            size="icon"
            className="relative text-gray-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
            onClick={() => router.push("/cart")}
        >
            <ShoppingCart className="w-4 h-4 text-grey-600" />
            <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center font-medium justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
        </Button>
    )
}

export default ShoppingCartIcon
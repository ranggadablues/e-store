"use client"

import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import useCartStore from "@/store/cartStore";
import { toast } from "react-toastify";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";

const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType, selectedSize: string, selectedColor: string }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartStore();
    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
    const handleQuantityChange = (action: "decrement" | "increment") => {
        if (action === "increment") {
            setQuantity(prev => prev + 1);
        } else if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }
    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: quantity,
            selectedSize: selectedSize,
            selectedColor: selectedColor,
        })
        toast.success(`${product.name} added to cart`)
    }
    return (
        <div className="flex flex-col space-y-6">

            {/* Band Name */}
            <div className="text-gray-400 uppercase tracking-widest text-xs">
                {product?.band}
            </div>

            {/* Product Title */}
            <div>
                <h1 className="text-2xl md:text-3xl text-white uppercase tracking-wider mb-4">
                    {product?.name}
                </h1>
                <div className="w-16 h-1 bg-red-600" />
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm">
                {product?.description}
            </p>

            {/* Price */}
            <div className="text-2xl text-white">
                IDR {product?.price.toFixed(2)}
            </div>

            <Separator className="bg-zinc-700" />

            {/* Size Selector */}
            <div className="space-y-3">
                <Label className="text-gray-400 uppercase tracking-wider text-xs">
                    Size
                </Label>
                <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => handleTypeChange("size", size)}
                            className={`px-5 py-2.5 border-2 uppercase tracking-wider transition-all cursor-pointer text-sm ${selectedSize === size
                                ? 'bg-red-600 border-red-600 text-white'
                                : 'bg-zinc-800 border-zinc-700 text-gray-300 hover:border-gray-500'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
                <Label className="text-gray-400 uppercase tracking-wider text-xs">
                    Color
                </Label>
                <div className="flex gap-3">
                    {product.colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => handleTypeChange("color", color)}
                            className={`w-12 h-12 rounded-full border-2 transition-all cursor-pointer ${selectedColor === color
                                ? 'border-red-600 scale-110'
                                : 'border-zinc-700 hover:border-gray-500'
                                }`}
                            style={{ backgroundColor: color }}
                            aria-label={color}
                        >
                            {selectedColor === color && color === 'white' && (
                                <div className="w-full h-full rounded-full border-2 border-gray-400" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
                <Label className="text-gray-400 uppercase tracking-wider text-xs">
                    Quantity
                </Label>
                <div className="flex items-center gap-4 w-fit">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange("decrement")}
                        className="h-10 w-10 border-2 border-zinc-700 bg-zinc-800 text-gray-300 hover:bg-zinc-900 hover:border-gray-500 hover:text-white"
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl text-white w-12 text-center">
                        {quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange("increment")}
                        className="h-10 w-10 border-2 border-zinc-700 bg-zinc-800 text-gray-300 hover:bg-zinc-900 hover:border-gray-500 hover:text-white"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Separator className="bg-zinc-700" />

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-red-600 hover:bg-red-700 text-white uppercase tracking-wider py-5"
                >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>

                <Button
                    variant="outline"
                    className="w-full border-2 border-zinc-700 bg-transparent text-gray-300 hover:bg-zinc-800 hover:text-white uppercase tracking-wider py-5"
                >
                    Buy this Item
                </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-4 space-y-2 text-sm text-gray-400">
                <div className="flex gap-8 uppercase tracking-wide">
                    <span>• 100% Cotton</span>
                    <span>• Free Shipping</span>
                </div>
                <div className="flex gap-8 uppercase tracking-wide">
                    <span>• Authentic Design</span>
                    <span>• Limited Stock</span>
                </div>
            </div>
        </div>
    )
}

export default ProductInteraction;
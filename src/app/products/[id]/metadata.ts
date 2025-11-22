import { productsData } from "../../../../data/productsdata"
import { ProductsType, ProductType } from "@/types"

const products: ProductsType = productsData
export function getProduct(id: string | number): ProductType | undefined {
    return products.find((p) => p.id === Number(id));
}
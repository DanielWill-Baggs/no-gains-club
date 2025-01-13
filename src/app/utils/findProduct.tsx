import products from "../types/cards.json";
import { CardProps as productProps } from "../types/card";

export default function findProduct(id: string | number): productProps | null {
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return null;
  }
  return product;
}

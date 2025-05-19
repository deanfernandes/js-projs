import { AddToCartButton } from "./components/AddToCartButton";

export function ItemCard({ item }) {
  return (
    <div className="item-card">
      <p>
        <b>{item.name.toUpperCase()}</b>
      </p>
      <p>£{item.price}</p>
      <AddToCartButton item={item}></AddToCartButton>
    </div>
  );
}

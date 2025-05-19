import { ItemCard } from "../ItemCard";

export function ItemsGrid({ items }) {
  return (
    <div className="item-cards-container">
      {items.map((item) => {
        return <ItemCard key={item.id} item={item}></ItemCard>;
      })}
    </div>
  );
}

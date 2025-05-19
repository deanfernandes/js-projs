import "./App.css";
import { Cart } from "./features/cart/Cart";
import { ItemsGrid } from "./components/ItemsGrid";

const items = [
  { id: 1, name: "gloves", price: 5 },
  { id: 2, name: "socks", price: 5 },
  { id: 3, name: "jacket", price: 75 },
  { id: 4, name: "shoes", price: 55 },
];

function App() {
  return (
    <>
      <Cart></Cart>
      <ItemsGrid items={items}></ItemsGrid>
    </>
  );
}

export default App;

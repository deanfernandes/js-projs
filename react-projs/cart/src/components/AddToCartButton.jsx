import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export function AddToCartButton({ item }) {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(addItem(item))}>Add to Cart</button>;
}

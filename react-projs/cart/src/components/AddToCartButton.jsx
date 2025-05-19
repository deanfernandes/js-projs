import { useDispatch } from "react-redux";

export function AddToCartButton({ item }) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({ type: "cart/addItem", payload: item })}>
      Add to Cart
    </button>
  );
}
